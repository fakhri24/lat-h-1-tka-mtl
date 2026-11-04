import { chromium } from 'playwright';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const SCREENSHOT_DIR = './audit-screenshots';
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

const VIEWPORTS = [
  { name: '1080p', width: 1920, height: 1080 },
  { name: 'WXGA+', width: 1440, height: 900 },
  { name: 'HD-768p', width: 1366, height: 768 },
];

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return true;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Server at ${url} did not start within ${timeoutMs}ms`);
}

async function runAudit() {
  const port = 4179;
  const serverProc = spawn('npx', ['vite', '--port', String(port)], {
    stdio: 'pipe',
    shell: true,
  });

  let browser;
  try {
    const baseUrl = `http://localhost:${port}`;
    await waitForServer(baseUrl);

    browser = await chromium.launch({ headless: true });

    const allViewportResults = [];

    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
      });
      const page = await context.newPage();
      await page.goto(baseUrl, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);

      const totalQ = 25;
      const vpRecords = [];

      for (let qIdx = 0; qIdx < totalQ; qIdx++) {
        // Navigate to question qIdx via floating menu
        const menuTrigger = page.locator('[data-menu-trigger]');
        await menuTrigger.click();
        await page.waitForTimeout(60);

        const qButtons = page.locator('[data-number-grid] button');
        await qButtons.nth(qIdx).click();
        await page.waitForTimeout(80);

        // Audit main question view
        const mainAudit = await page.evaluate(() => {
          const docEl = document.documentElement;
          const body = document.body;

          const hasOuterScrollY =
            docEl.scrollHeight > docEl.clientHeight + 2 ||
            body.scrollHeight > body.clientHeight + 2;
          const hasOuterScrollX =
            docEl.scrollWidth > docEl.clientWidth + 2 ||
            body.scrollWidth > body.clientWidth + 2;

          const hasPermanentHeaderFooter = Boolean(
            document.querySelector('header, footer')
          );

          const textCol = document.querySelector('[data-text-column]');
          let innerScrollExcess = 0;
          if (textCol) {
            innerScrollExcess = Math.max(
              0,
              textCol.scrollHeight - textCol.clientHeight
            );
          }

          const stimulusEl = document.querySelector('[data-stimulus]');
          const questionEl = document.querySelector('[data-question-text]');
          const stimulusFontSize = stimulusEl
            ? parseFloat(window.getComputedStyle(stimulusEl).fontSize)
            : 22;
          const questionFontSize = questionEl
            ? parseFloat(window.getComputedStyle(questionEl).fontSize)
            : 22;
          const questionFontWeight = questionEl
            ? window.getComputedStyle(questionEl).fontWeight
            : '700';
          const isQuestionBold = parseInt(questionFontWeight, 10) >= 600;

          const katexErrors = document.querySelectorAll('.katex-error').length;
          const bodyText = document.body.innerText || '';
          const hasRawDoubleAsterisk = bodyText.includes('**');

          const photoContainer = document.querySelector('[data-photo-container]');
          let hasVisual = false;
          let photoGridPct = 0;
          let svgRect = null;
          if (photoContainer) {
            hasVisual = true;
            const pRect = photoContainer.getBoundingClientRect();
            const parentRect =
              photoContainer.parentElement.getBoundingClientRect();
            photoGridPct =
              parentRect.width > 0 ? (pRect.width / parentRect.width) * 100 : 0;
            const svgEl = photoContainer.querySelector('svg');
            if (svgEl) {
              const sRect = svgEl.getBoundingClientRect();
              svgRect = {
                width: Math.round(sRect.width),
                height: Math.round(sRect.height),
              };
            }
          }

          return {
            hasOuterScrollY,
            hasOuterScrollX,
            hasPermanentHeaderFooter,
            innerScrollExcess,
            stimulusFontSize,
            questionFontSize,
            isQuestionBold,
            katexErrors,
            hasRawDoubleAsterisk,
            hasVisual,
            photoGridPct: Math.round(photoGridPct * 10) / 10,
            svgRect,
          };
        });

        // Screenshot key visual & matrix questions on 1080p and 768p
        if (
          (vp.name === '1080p' || vp.name === 'HD-768p') &&
          [0, 8, 15, 19, 21, 23, 25, 28, 29, 32].includes(qIdx)
        ) {
          await page.screenshot({
            path: path.join(
              SCREENSHOT_DIR,
              `web_${vp.name}_q${qIdx + 1}.png`
            ),
          });
        }

        // Open Solution Modal and audit KaTeX & horizontal overflow
        const solBtn = page.locator('[data-solution-trigger]');
        await solBtn.click();
        await page.waitForTimeout(80);

        const modalAudit = await page.evaluate(() => {
          const modal = document.querySelector('[data-solution-modal]');
          if (!modal) return { modalOpen: false };
          const katexErrors = modal.querySelectorAll('.katex-error').length;
          const modalText = modal.innerText || '';
          const hasRawDoubleAsterisk = modalText.includes('**');

          const stepDivs = Array.from(
            modal.querySelectorAll('[data-solution-step]')
          );
          const offsideSteps = stepDivs
            .map((el, idx) => ({
              idx,
              overflowX: el.scrollWidth - el.clientWidth,
            }))
            .filter((s) => s.overflowX > 4);

          return {
            modalOpen: true,
            katexErrors,
            hasRawDoubleAsterisk,
            offsideSteps,
          };
        });

        // Close modal
        await page.keyboard.press('Escape');
        await page.waitForTimeout(50);

        vpRecords.push({
          viewport: vp.name,
          qNum: qIdx + 1,
          ...mainAudit,
          modalAudit,
        });
      }

      allViewportResults.push({
        viewport: vp,
        records: vpRecords,
      });

      await context.close();
    }

    // Compute objective 1-10 score per question & overall
    let totalScore = 0;
    let totalItems = 0;
    const issues = [];

    for (const vpGroup of allViewportResults) {
      for (const a of vpGroup.records) {
        let qScore = 10.0;
        const qIssues = [];

        if (a.hasOuterScrollY || a.hasOuterScrollX) {
          qScore -= 3.0;
          qIssues.push('Outer window scrollbar detected');
        }
        if (a.hasPermanentHeaderFooter) {
          qScore -= 2.0;
          qIssues.push('Permanent header/footer detected');
        }
        if (a.stimulusFontSize < 20 || a.questionFontSize < 20) {
          qScore -= 2.0;
          qIssues.push(
            `Font too small (${a.stimulusFontSize}px / ${a.questionFontSize}px)`
          );
        }
        if (!a.isQuestionBold) {
          qScore -= 1.5;
          qIssues.push('Question text is not bold');
        }
        if (a.katexErrors > 0 || (a.modalAudit && a.modalAudit.katexErrors > 0)) {
          qScore -= 3.0;
          qIssues.push('KaTeX parse error');
        }
        if (
          a.hasRawDoubleAsterisk ||
          (a.modalAudit && a.modalAudit.hasRawDoubleAsterisk)
        ) {
          qScore -= 2.0;
          qIssues.push('Unparsed ** markdown');
        }
        if (
          a.modalAudit &&
          a.modalAudit.offsideSteps &&
          a.modalAudit.offsideSteps.length > 0
        ) {
          qScore -= 2.0;
          qIssues.push(
            `Modal horizontal overflow (${JSON.stringify(a.modalAudit.offsideSteps)})`
          );
        }
        if (a.hasVisual && a.photoGridPct < 50) {
          qScore -= 2.0;
          qIssues.push(`Visual grid too narrow (${a.photoGridPct}%)`);
        }
        if (
          a.hasVisual &&
          (!a.svgRect || a.svgRect.width < 350 || a.svgRect.height < 200)
        ) {
          qScore -= 2.0;
          qIssues.push(`SVG too small (${JSON.stringify(a.svgRect)})`);
        }
        if (vpGroup.viewport.height >= 900 && a.innerScrollExcess > 10) {
          qScore -= 1.5;
          qIssues.push(
            `Inner scroll excess ${a.innerScrollExcess}px on ${a.viewport}`
          );
        } else if (vpGroup.viewport.height < 900 && a.innerScrollExcess > 120) {
          qScore -= 1.0;
          qIssues.push(
            `Large inner scroll excess ${a.innerScrollExcess}px on 768p`
          );
        }

        qScore = Math.max(1, qScore);
        totalScore += qScore;
        totalItems++;

        if (qIssues.length > 0) {
          issues.push({
            viewport: a.viewport,
            qNum: a.qNum,
            score: qScore,
            issues: qIssues,
          });
        }
      }
    }

    const avgScore = (totalScore / totalItems).toFixed(2);
    console.log('====================================================');
    console.log(`TOTAL ITEMS AUDITED: ${totalItems} (25 questions x 3 viewports)`);
    console.log(`AVERAGE UI/UX & KATEX SCORE: ${avgScore} / 10.00`);
    console.log(`ISSUES FOUND: ${issues.length}`);
    if (issues.length > 0) {
      console.log(JSON.stringify(issues, null, 2));
    }
    console.log('====================================================');
  } finally {
    if (browser) await browser.close();
    serverProc.kill();
  }
}

runAudit().catch((e) => {
  console.error(e);
  process.exit(1);
});
