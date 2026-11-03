import React, { useState, useEffect, useCallback } from 'react';
import { questionsData } from './data/questionsData';
import { UserAnswerState } from './types/question';
import { FloatingMenu } from './components/FloatingMenu';
import { QuestionView } from './components/QuestionView';
import { SolutionModal } from './components/SolutionModal';
import { PdfHandoutView } from './components/PdfHandoutView';

const STORAGE_KEY = 'tka_mtl_siaga2_answers';

export const App: React.FC = () => {
  const searchParams =
    typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null;
  const isPdfMode = searchParams?.get('mode') === 'pdf';

  if (isPdfMode) {
    return <PdfHandoutView />;
  }

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [answers, setAnswers] = useState<UserAnswerState>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Projector display preferences
  const [fontSizeLevel, setFontSizeLevel] = useState<number>(0); // 0: 20px, 1: 22px, 2: 24px
  const [hideOptions, setHideOptions] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showSolutionModal, setShowSolutionModal] = useState<boolean>(false);
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
    } catch (e) {
      console.error('Failed to save answers to localStorage', e);
    }
  }, [answers]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const total = questionsData.length;
  const currentQuestion = questionsData[currentIndex];
  const questionIds = questionsData.map((q) => q.id);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(total - 1, prev + 1));
  }, [total]);

  const handleSelectQuestionId = useCallback(
    (id: number) => {
      const idx = questionsData.findIndex((q) => q.id === id);
      if (idx !== -1) {
        setCurrentIndex(idx);
      }
    },
    []
  );

  const handleSelectOption = useCallback(
    (key: string) => {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          ...prev[currentQuestion.id],
          selectedOption: key,
        },
      }));
    },
    [currentQuestion.id]
  );

  const handleToggleCheckbox = useCallback(
    (idx: number) => {
      setAnswers((prev) => {
        const currentSelected = prev[currentQuestion.id]?.selectedCheckboxes || [];
        const nextSelected = currentSelected.includes(idx)
          ? currentSelected.filter((i) => i !== idx)
          : [...currentSelected, idx];
        return {
          ...prev,
          [currentQuestion.id]: {
            ...prev[currentQuestion.id],
            selectedCheckboxes: nextSelected,
          },
        };
      });
    },
    [currentQuestion.id]
  );

  const handleSelectTrueFalse = useCallback(
    (statementIndex: number, choice: 'Benar' | 'Salah') => {
      setAnswers((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          ...prev[currentQuestion.id],
          trueFalseAnswers: {
            ...prev[currentQuestion.id]?.trueFalseAnswers,
            [statementIndex]: choice,
          },
        },
      }));
    },
    [currentQuestion.id]
  );

  const handleResetQuestionAnswer = useCallback(() => {
    setAnswers((prev) => {
      const copy = { ...prev };
      delete copy[currentQuestion.id];
      return copy;
    });
  }, [currentQuestion.id]);

  const handleResetAllAnswers = useCallback(() => {
    setAnswers({});
  }, []);

  // Keyboard navigation & shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is in an input field
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key >= '1' && e.key <= '5' && currentQuestion.type === 'multiple-choice') {
        const keyMap: { [k: string]: string } = { '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E' };
        const optionKey = keyMap[e.key];
        if (currentQuestion.options?.some((o) => o.key === optionKey)) {
          handleSelectOption(optionKey);
        }
      } else if (e.key === 'Escape') {
        if (showSolutionModal) {
          setShowSolutionModal(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, handleSelectOption, currentQuestion, showSolutionModal]);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('Fullscreen request error:', err);
      });
    } else {
      document.exitFullscreen().catch((err) => {
        console.error('Exit fullscreen error:', err);
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
      {/* Top Bar Banner */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow">
            TKA
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white leading-tight">
              Latihan H-1 TKA Matematika Tingkat Lanjut
            </h1>
            <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
              Paket Siaga 2 (33 Soal Lengkap)
            </p>
          </div>
        </div>

        <div className="text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
          Soal {currentIndex + 1} dari {total}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-8">
        <QuestionView
          question={currentQuestion}
          fontSizeLevel={fontSizeLevel}
          selectedOption={answers[currentQuestion.id]?.selectedOption}
          selectedCheckboxes={answers[currentQuestion.id]?.selectedCheckboxes}
          trueFalseAnswers={answers[currentQuestion.id]?.trueFalseAnswers}
          onSelectOption={handleSelectOption}
          onToggleCheckbox={handleToggleCheckbox}
          onSelectTrueFalse={handleSelectTrueFalse}
          onResetQuestionAnswer={handleResetQuestionAnswer}
          hideOptions={hideOptions}
          onToggleHideOptions={() => setHideOptions((v) => !v)}
          showAnswerKey={showAnswerKey}
        />
      </main>

      {/* Floating Controller */}
      <FloatingMenu
        currentIndex={currentIndex}
        currentQuestionId={currentQuestion.id}
        questionIds={questionIds}
        onSelectQuestionId={handleSelectQuestionId}
        onPrev={handlePrev}
        onNext={handleNext}
        answers={answers}
        fontSizeLevel={fontSizeLevel}
        onChangeFontSize={(delta) => setFontSizeLevel((prev) => Math.max(0, Math.min(2, prev + delta)))}
        hideOptions={hideOptions}
        onToggleHideOptions={() => setHideOptions((v) => !v)}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode((v) => !v)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        showSolutionModal={showSolutionModal}
        onToggleSolutionModal={() => setShowSolutionModal((v) => !v)}
        showAnswerKey={showAnswerKey}
        onToggleAnswerKey={() => setShowAnswerKey((v) => !v)}
        onResetAllAnswers={handleResetAllAnswers}
      />

      {/* Modal Pembahasan */}
      <SolutionModal
        question={currentQuestion}
        isOpen={showSolutionModal}
        onClose={() => setShowSolutionModal(false)}
        fontSizeLevel={fontSizeLevel}
      />
    </div>
  );
};
