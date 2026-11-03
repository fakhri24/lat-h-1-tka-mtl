import React, { useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Eye,
  EyeOff,
  BookOpen,
  Maximize2,
  Sun,
  Moon,
  Type,
  X,
} from 'lucide-react';
import { PackageId, Question } from '../types/question';

interface FloatingMenuProps {
  activePackage: PackageId;
  onSelectPackage: (pkg: PackageId) => void;
  questions: Question[];
  currentIndex: number;
  onSelectIndex: (idx: number) => void;
  answeredMap: Record<string, boolean>;
  showAnswer: boolean;
  onToggleAnswer: () => void;
  onOpenSolution: () => void;
  fontSizeLevel: 1 | 2 | 3;
  onChangeFontSize: (level: 1 | 2 | 3) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onToggleFullscreen: () => void;
  isOpen: boolean;
  onToggleOpen: () => void;
}

export const FloatingMenu: React.FC<FloatingMenuProps> = ({
  questions,
  currentIndex,
  onSelectIndex,
  answeredMap,
  showAnswer,
  onToggleAnswer,
  onOpenSolution,
  fontSizeLevel,
  onChangeFontSize,
  darkMode,
  onToggleDarkMode,
  onToggleFullscreen,
  isOpen,
  onToggleOpen,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        onToggleOpen();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onToggleOpen]);

  const currentQuestion = questions[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < questions.length - 1;

  return (
    <div
      ref={menuRef}
      className="fixed top-3 right-4 z-40 flex flex-col items-end select-none"
    >
      {/* Compact Floating Trigger Bar */}
      <div className="flex items-center gap-1.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 shadow-lg rounded-full px-2.5 py-1.5 transition-all">
        <button
          onClick={() => hasPrev && onSelectIndex(currentIndex - 1)}
          disabled={!hasPrev}
          title="Soal Sebelumnya (Panah Kiri)"
          className="p-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-35 disabled:pointer-events-none transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={onToggleOpen}
          data-menu-trigger
          title="Buka Navigasi Soal (Tombol H)"
          className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 dark:bg-brand-950/80 text-brand-700 dark:text-brand-300 font-bold text-sm hover:bg-brand-100 dark:hover:bg-brand-900/60 transition-colors"
        >
          <span>SIAGA 2</span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span>
            No. {currentQuestion?.number ?? currentIndex + 1} / {questions.length}
          </span>
          {isOpen ? <X className="w-4 h-4 ml-0.5" /> : <Menu className="w-4 h-4 ml-0.5" />}
        </button>

        <button
          onClick={() => hasNext && onSelectIndex(currentIndex + 1)}
          disabled={!hasNext}
          title="Soal Berikutnya (Panah Kanan / Spasi)"
          className="p-1.5 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-35 disabled:pointer-events-none transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="h-5 w-px bg-slate-200 dark:bg-slate-800 mx-0.5" />

        <button
          onClick={onToggleAnswer}
          title="Tampilkan Kunci Jawaban (Tombol K)"
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
            showAnswer
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          {showAnswer ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
          <span className="hidden sm:inline">Kunci</span>
        </button>

        <button
          onClick={onOpenSolution}
          data-solution-trigger
          title="Buka Pembahasan Lengkap (Tombol P)"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-brand-600 hover:bg-brand-700 text-white shadow-sm transition-all"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Pembahasan</span>
        </button>
      </div>

      {/* Collapsible Popover Drawer */}
      {isOpen && (
        <div
          data-floating-drawer
          className="mt-2 w-[380px] sm:w-[440px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-4 flex flex-col gap-4 transition-all"
        >
          {/* Package Info Header */}
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1.5">
              Paket Latihan H-1 TKA Matematika Tingkat Lanjut
            </div>
            <div className="px-3 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs flex items-center justify-between shadow-sm">
              <span>Paket Utama — SIAGA 2 (Matematika Lanjut)</span>
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-[11px]">
                {questions.length} Soal
              </span>
            </div>
          </div>

          {/* Question Number Grid */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Daftar Nomor Soal ({questions.length} Soal)
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Terjawab: {Object.keys(answeredMap).length}/{questions.length}
              </span>
            </div>
            <div
              data-number-grid
              className="grid grid-cols-6 gap-1.5 max-h-[240px] overflow-y-auto p-1"
            >
              {questions.map((q, idx) => {
                const isCurrent = idx === currentIndex;
                const isAnswered = Boolean(answeredMap[q.id]);
                return (
                  <button
                    key={q.id}
                    onClick={() => {
                      onSelectIndex(idx);
                      onToggleOpen();
                    }}
                    className={`h-9 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${
                      isCurrent
                        ? 'bg-brand-600 text-white ring-2 ring-brand-400 ring-offset-1 dark:ring-offset-slate-900'
                        : isAnswered
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                        : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {q.number}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Display Controls (Font Size, Dark Mode, Fullscreen) */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
              <Type className="w-4 h-4 text-slate-500 ml-1.5 mr-1" />
              {([1, 2, 3] as const).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => onChangeFontSize(lvl)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                    fontSizeLevel === lvl
                      ? 'bg-white dark:bg-slate-900 text-brand-600 dark:text-brand-400 shadow-sm'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  {lvl === 1 ? 'A' : lvl === 2 ? 'A+' : 'A++'}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={onToggleDarkMode}
                title="Mode Gelap / Terang"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>
              <button
                onClick={onToggleFullscreen}
                title="Layar Penuh (Tombol F)"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Shortcut Legend */}
          <div className="text-[11px] text-slate-400 dark:text-slate-500 flex flex-wrap justify-between gap-x-3 gap-y-1 pt-1 border-t border-slate-100 dark:border-slate-800">
            <span>←/→ : Navigasi</span>
            <span>P : Pembahasan</span>
            <span>K : Kunci</span>
            <span>H : Menu</span>
            <span>F : Fullscreen</span>
          </div>
        </div>
      )}
    </div>
  );
};
