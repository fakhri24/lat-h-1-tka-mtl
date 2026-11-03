import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { questionsData } from './data/questionsData';
import { PackageId } from './types/question';
import { FloatingMenu } from './components/FloatingMenu';
import { QuestionView } from './components/QuestionView';
import { SolutionModal } from './components/SolutionModal';
import { PdfHandoutView } from './components/PdfHandoutView';

const STORAGE_KEY = 'tka_mtl_siaga2_state_v1';

interface SavedState {
  activePackage: PackageId;
  currentIndex: number;
  userAnswers: Record<string, string | string[] | Record<string, boolean>>;
  fontSizeLevel: 1 | 2 | 3;
  darkMode: boolean;
}

export function App() {
  const isPrintMode = useMemo(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    return params.get('print') === 'true' || params.get('mode') === 'pdf';
  }, []);

  if (isPrintMode) {
    return <PdfHandoutView />;
  }

  const [activePackage, setActivePackage] = useState<PackageId>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as SavedState;
        if (parsed.activePackage === 'siaga-2') {
          return parsed.activePackage;
        }
      }
    } catch {
      // ignore storage errors
    }
    return 'siaga-2';
  });

  const [currentIndex, setCurrentIndex] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as SavedState;
        return typeof parsed.currentIndex === 'number' ? parsed.currentIndex : 0;
      }
    } catch {
      // ignore
    }
    return 0;
  });

  const [userAnswers, setUserAnswers] = useState<
    Record<string, string | string[] | Record<string, boolean>>
  >(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as SavedState;
        return parsed.userAnswers || {};
      }
    } catch {
      // ignore
    }
    return {};
  });

  const [fontSizeLevel, setFontSizeLevel] = useState<1 | 2 | 3>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as SavedState;
        return parsed.fontSizeLevel || 1;
      }
    } catch {
      // ignore
    }
    return 1;
  });

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as SavedState;
        return Boolean(parsed.darkMode);
      }
    } catch {
      // ignore
    }
    return false;
  });

  const [showAnswerMap, setShowAnswerMap] = useState<Record<string, boolean>>({});
  const [solutionModalOpen, setSolutionModalOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const packageQuestions = useMemo(
    () => questionsData.filter((q) => q.packageId === activePackage),
    [activePackage]
  );

  const safeIndex = Math.min(Math.max(0, currentIndex), packageQuestions.length - 1);
  const currentQuestion = packageQuestions[safeIndex];

  useEffect(() => {
    try {
      const stateToSave: SavedState = {
        activePackage,
        currentIndex: safeIndex,
        userAnswers,
        fontSizeLevel,
        darkMode,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
    } catch {
      // ignore storage quota errors
    }
  }, [activePackage, safeIndex, userAnswers, fontSizeLevel, darkMode]);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const handleSelectPackage = useCallback((pkg: PackageId) => {
    setActivePackage(pkg);
    setCurrentIndex(0);
    setSolutionModalOpen(false);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setSolutionModalOpen(false);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev < packageQuestions.length - 1 ? prev + 1 : prev
    );
    setSolutionModalOpen(false);
  }, [packageQuestions.length]);

  const handleToggleAnswer = useCallback(() => {
    if (!currentQuestion) return;
    setShowAnswerMap((prev) => ({
      ...prev,
      [currentQuestion.id]: !prev[currentQuestion.id],
    }));
  }, [currentQuestion]);

  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  const handleSelectSingle = useCallback(
    (optionId: string) => {
      if (!currentQuestion) return;
      setUserAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: optionId,
      }));
    },
    [currentQuestion]
  );

  const handleToggleMultiple = useCallback(
    (optionId: string) => {
      if (!currentQuestion) return;
      setUserAnswers((prev) => {
        const existing = prev[currentQuestion.id];
        const currentList = Array.isArray(existing) ? existing : [];
        const updated = currentList.includes(optionId)
          ? currentList.filter((id) => id !== optionId)
          : [...currentList, optionId];
        return {
          ...prev,
          [currentQuestion.id]: updated,
        };
      });
    },
    [currentQuestion]
  );

  const handleSelectTable = useCallback(
    (statementId: string, value: boolean) => {
      if (!currentQuestion) return;
      setUserAnswers((prev) => {
        const existing = prev[currentQuestion.id];
        const currentMap =
          existing && typeof existing === 'object' && !Array.isArray(existing)
            ? (existing as Record<string, boolean>)
            : {};
        return {
          ...prev,
          [currentQuestion.id]: {
            ...currentMap,
            [statementId]: value,
          },
        };
      });
    },
    [currentQuestion]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === 'Escape') {
        if (solutionModalOpen) {
          setSolutionModalOpen(false);
          return;
        }
        if (menuOpen) {
          setMenuOpen(false);
          return;
        }
      }

      if (solutionModalOpen) {
        if (e.key.toLowerCase() === 'p') {
          e.preventDefault();
          setSolutionModalOpen(false);
        }
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'Backspace':
          e.preventDefault();
          handlePrev();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'h':
        case 'H':
          e.preventDefault();
          setMenuOpen((prev) => !prev);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setSolutionModalOpen((prev) => !prev);
          break;
        case 'k':
        case 'K':
          e.preventDefault();
          handleToggleAnswer();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    handleNext,
    handlePrev,
    handleToggleFullscreen,
    handleToggleAnswer,
    solutionModalOpen,
    menuOpen,
  ]);

  const answeredMap = useMemo(() => {
    const map: Record<string, boolean> = {};
    for (const q of packageQuestions) {
      const ans = userAnswers[q.id];
      if (!ans) continue;
      if (typeof ans === 'string' && ans.length > 0) {
        map[q.id] = true;
      } else if (Array.isArray(ans) && ans.length > 0) {
        map[q.id] = true;
      } else if (
        typeof ans === 'object' &&
        !Array.isArray(ans) &&
        Object.keys(ans).length > 0
      ) {
        map[q.id] = true;
      }
    }
    return map;
  }, [packageQuestions, userAnswers]);

  if (!currentQuestion) return null;

  const isAnswerShown = Boolean(showAnswerMap[currentQuestion.id]);

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 select-none transition-colors duration-200">
      <FloatingMenu
        activePackage={activePackage}
        onSelectPackage={handleSelectPackage}
        questions={packageQuestions}
        currentIndex={safeIndex}
        onSelectIndex={(idx) => {
          setCurrentIndex(idx);
          setSolutionModalOpen(false);
        }}
        answeredMap={answeredMap}
        showAnswer={isAnswerShown}
        onToggleAnswer={handleToggleAnswer}
        onOpenSolution={() => setSolutionModalOpen(true)}
        fontSizeLevel={fontSizeLevel}
        onChangeFontSize={setFontSizeLevel}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((prev) => !prev)}
        onToggleFullscreen={handleToggleFullscreen}
        isOpen={menuOpen}
        onToggleOpen={() => setMenuOpen((prev) => !prev)}
      />

      <main className="flex-1 w-full h-full overflow-hidden">
        <QuestionView
          question={currentQuestion}
          totalQuestions={packageQuestions.length}
          selectedSingle={
            typeof userAnswers[currentQuestion.id] === 'string'
              ? (userAnswers[currentQuestion.id] as string)
              : undefined
          }
          selectedMultiple={
            Array.isArray(userAnswers[currentQuestion.id])
              ? (userAnswers[currentQuestion.id] as string[])
              : []
          }
          selectedTable={
            userAnswers[currentQuestion.id] &&
            typeof userAnswers[currentQuestion.id] === 'object' &&
            !Array.isArray(userAnswers[currentQuestion.id])
              ? (userAnswers[currentQuestion.id] as Record<string, boolean>)
              : {}
          }
          onSelectSingle={handleSelectSingle}
          onToggleMultiple={handleToggleMultiple}
          onSelectTable={handleSelectTable}
          showAnswer={isAnswerShown}
          fontSizeLevel={fontSizeLevel}
        />
      </main>

      {solutionModalOpen && (
        <SolutionModal
          question={currentQuestion}
          onClose={() => setSolutionModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
