import React from 'react';
import { questionsData } from '../data/questionsData';
import { Question } from '../types/question';
import { MathRenderer } from './MathRenderer';
import { QUESTION_SVGS } from './svgs';

interface PageSpec {
  pageNumber: number;
  leftNums: number[];
  rightNums: number[];
}

const PAGES_SIAGA_2: PageSpec[] = [
  { pageNumber: 1, leftNums: [1, 2, 3, 4], rightNums: [5, 6, 7] },
  { pageNumber: 2, leftNums: [8, 9, 10], rightNums: [11, 12, 13] },
  { pageNumber: 3, leftNums: [14, 15, 16], rightNums: [17, 18] },
  { pageNumber: 4, leftNums: [19, 20, 21], rightNums: [22, 23, 24, 25] },
];

const compactNewlines = (text?: string): string => {
  if (!text) return '';
  return text.replace(/\n{2,}/g, '\n');
};

const PdfQuestionBlock: React.FC<{ q: Question }> = ({ q }) => {
  const VisualComponent = q.svgType ? QUESTION_SVGS[q.svgType] : undefined;

  // Choose compact option grid columns based on option content length/type
  const isOneColOptions = [9, 12, 20, 22].includes(q.number);
  const isTwoColOptions = [5, 6, 7, 8, 10, 13, 15, 16, 17, 18, 19, 21, 23, 25].includes(
    q.number
  );
  const isFiveColOptions = [1, 2, 3, 4, 24].includes(q.number);

  const hasMatrixInOptions = q.options?.some((o) => o.text.includes('\\begin{'));

  return (
    <div
      data-pdf-question={q.number}
      className="border border-slate-300 rounded-md px-2.5 py-1.5 bg-white flex flex-col gap-0.5 text-[9.5px] leading-[1.26] text-slate-900 [&_.katex-display]:!my-0.5"
    >
      {/* Header Soal & Topik */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-0.5 mb-0.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="px-1.5 py-0.2 bg-slate-900 text-white font-extrabold rounded text-[9px] whitespace-nowrap flex-shrink-0">
            NO. {q.number}
          </span>
          <span className="text-[8.5px] font-bold text-slate-600 uppercase tracking-tight truncate">
            {q.topic} {q.subtopic ? `• ${q.subtopic}` : ''}
          </span>
        </div>
      </div>

      {/* Stimulus Context */}
      {q.stimulus && (
        <div className="text-slate-800">
          <MathRenderer content={compactNewlines(q.stimulus)} />
        </div>
      )}

      {/* Visual illustration (SVG) */}
      {VisualComponent && (
        <div className="w-full flex items-center justify-center my-0.5 overflow-hidden bg-slate-50/50 rounded border border-slate-200/80 py-0.5 px-1 [&_svg]:!min-h-0 [&_svg]:!max-h-[85px] [&_svg]:!w-auto [&_svg]:!max-w-full [&_svg]:mx-auto">
          <VisualComponent />
        </div>
      )}

      {/* Main Question Prompt */}
      <div className="font-bold text-slate-950">
        <MathRenderer content={compactNewlines(q.questionText)} />
      </div>

      {/* Options: Single Choice */}
      {q.type === 'single' && q.options && (
        <div
          className={`${
            isOneColOptions
              ? 'grid grid-cols-1 gap-y-0.5 pt-0.5'
              : isTwoColOptions
              ? 'grid grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5'
              : isFiveColOptions
              ? 'grid grid-cols-5 gap-x-1 gap-y-0.5 pt-0.5'
              : 'grid grid-cols-3 gap-x-1.5 gap-y-0.5 pt-0.5'
          } ${hasMatrixInOptions ? '[&_.katex]:!text-[8px] leading-[1.1]' : 'leading-[1.35]'}`}
        >
          {q.options.map((opt) => (
            <div key={opt.id} className="flex items-baseline gap-1 min-w-0 py-[1px]">
              <span className="font-extrabold text-slate-900 shrink-0">{opt.id}.</span>
              <span className="min-w-0">
                <MathRenderer content={opt.text} />
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Options: Complex Multiple Choice (PGK MCMA) */}
      {q.type === 'multiple' && q.options && (
        <div
          className={
            q.options.every((o) => o.text.length < 28)
              ? 'grid grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5 [&_.katex]:!text-[9px]'
              : 'flex flex-col gap-0.5 pt-0.5 [&_.katex]:!text-[9px]'
          }
        >
          {q.options.map((opt) => (
            <div key={opt.id} className="flex items-start gap-1.5">
              <span className="inline-block w-2.5 h-2.5 border border-slate-700 rounded-[2px] flex-shrink-0 mt-0.5" />
              <span className="flex-1">
                <MathRenderer content={opt.text} />
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Options: True False Table */}
      {q.type === 'table' && q.statements && (
        <div className="pt-0.5">
          <table className="w-full border-collapse border border-slate-300 text-[9px] [&_.katex]:!text-[8.5px]">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-1 py-0.5 text-left font-bold text-slate-800">
                  Pernyataan
                </th>
                <th className="border border-slate-300 px-1 py-0.5 text-center font-bold text-slate-800 w-10">
                  Benar
                </th>
                <th className="border border-slate-300 px-1 py-0.5 text-center font-bold text-slate-800 w-10">
                  Salah
                </th>
              </tr>
            </thead>
            <tbody>
              {q.statements.map((stmt, idx) => (
                <tr key={stmt.id} className={idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'}>
                  <td className="border border-slate-300 px-1 py-0.5">
                    <MathRenderer content={stmt.text} />
                  </td>
                  <td className="border border-slate-300 px-1 py-0.5 text-center">
                    <span className="inline-block w-2.5 h-2.5 border border-slate-700 rounded-full" />
                  </td>
                  <td className="border border-slate-300 px-1 py-0.5 text-center">
                    <span className="inline-block w-2.5 h-2.5 border border-slate-700 rounded-full" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export const PdfHandoutView: React.FC = () => {
  const getQuestion = (num: number): Question | undefined => {
    return questionsData.find((q) => q.number === num);
  };

  const formatAnswerKey = (q: Question): string => {
    if (q.type === 'single' && typeof q.correctAnswer === 'string') {
      return q.correctAnswer;
    }
    if (q.type === 'multiple' && Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(',');
    }
    if (q.type === 'table' && q.statements) {
      return q.statements.map((s) => (s.isTrue ? 'B' : 'S')).join('-');
    }
    return '-';
  };

  return (
    <div className="bg-slate-200 min-h-screen py-6 print:py-0 print:bg-white text-slate-900 font-sans">
      <style>{`
        @page {
          size: A4 portrait;
          margin: 0mm;
        }
        html, body {
          overflow: visible !important;
          height: auto !important;
          width: auto !important;
          background: #ffffff !important;
        }
      `}</style>
      <div className="max-w-[210mm] mx-auto flex flex-col gap-8 print:gap-0">
        {PAGES_SIAGA_2.map((pSpec) => (
          <div
            key={pSpec.pageNumber}
            data-pdf-page={pSpec.pageNumber}
            className="w-[210mm] h-[297mm] max-h-[297mm] bg-white mx-auto p-[7.5mm] shadow-lg print:shadow-none flex flex-col justify-between box-border overflow-hidden print:m-0 print:break-after-page"
            style={{ pageBreakAfter: 'always' }}
          >
            {/* Kop Naskah di Setiap Halaman */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-1 mb-2">
                <div>
                  <h1 className="text-[12px] font-black uppercase tracking-wider text-slate-950">
                    LATIHAN H-1 TKA MATEMATIKA TINGKAT LANJUT
                  </h1>
                  <p className="text-[9.5px] font-bold text-slate-700">
                    Naskah Soal Uji Siaga 2 (25 Soal) • Tahun Ajaran 2026/2027
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-[9.5px] font-bold text-slate-900">
                    Halaman {pSpec.pageNumber} dari {PAGES_SIAGA_2.length}
                  </div>
                  <div className="text-[8px] text-slate-500 font-medium">
                    Format Hemat Lembar A4 (2 Kolom)
                  </div>
                </div>
              </div>

              {/* Layout 2 Kolom Soal */}
              <div className="grid grid-cols-2 gap-x-2.5 items-start">
                {/* Kolom Kiri */}
                <div data-pdf-col="left" className="flex flex-col gap-1.5">
                  {pSpec.leftNums.map((num) => {
                    const q = getQuestion(num);
                    if (!q) return null;
                    return <PdfQuestionBlock key={q.id} q={q} />;
                  })}
                </div>

                {/* Kolom Kanan */}
                <div data-pdf-col="right" className="flex flex-col gap-1.5">
                  {pSpec.rightNums.map((num) => {
                    const q = getQuestion(num);
                    if (!q) return null;
                    return <PdfQuestionBlock key={q.id} q={q} />;
                  })}

                  {/* Kunci Jawaban Singkat di Halaman 4 Kolom Kanan */}
                  {pSpec.pageNumber === 4 && (
                    <div className="border-2 border-slate-900 rounded-md p-2 bg-slate-50 mt-1">
                      <div className="text-[9.5px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1 text-center">
                        Kunci Jawaban Singkat (Nomor 1 – 25)
                      </div>
                      <div className="grid grid-cols-5 gap-x-1.5 gap-y-0.5 text-[8.5px] font-bold text-slate-800">
                        {questionsData.map((q) => (
                          <div
                            key={q.id}
                            className="flex justify-between border-b border-slate-200/70 pb-0.5"
                          >
                            <span className="text-slate-500">{q.number}.</span>
                            <span className="text-slate-950 font-extrabold">
                              {formatAnswerKey(q)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Halaman */}
            <div className="border-t border-slate-300 pt-1 text-[8px] text-slate-500 flex justify-between items-center">
              <span>SMA / MA — Persiapan Siaga Menghadapi TKA Matematika Tingkat Lanjut</span>
              <span>Halaman {pSpec.pageNumber} / {PAGES_SIAGA_2.length}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
