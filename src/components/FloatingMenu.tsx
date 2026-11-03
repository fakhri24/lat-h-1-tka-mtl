import React, { useState } from 'react';
import {
  Grid,
  BookOpen,
  Maximize,
  Minimize,
  Moon,
  Sun,
  Eye,
  EyeOff,
  RotateCcw,
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  X,
  PanelTopClose,
  FileDown,
} from 'lucide-react';
import { UserAnswerState } from '../types/question';

interface FloatingMenuProps {
  currentIndex: number;
  currentQuestionId: number;
  questionIds: number[];
  onSelectQuestionId: (id: number) => void;
  onPrev: () => void;
  onNext: () => void;
  answers: UserAnswerState;
  fontSizeLevel: number;
  onChangeFontSize: (delta: number) => void;
  hideOptions: boolean;
  onToggleHideOptions: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  showSolutionModal: boolean;
  onToggleSolutionModal: () => void;
  showAnswerKey: boolean;
  onToggleAnswerKey: () => void;
  onResetAllAnswers: () => void;
}

export const FloatingMenu: React.FC<FloatingMenuProps> = ({
  currentIndex,
  currentQuestionId,
  questionIds,
  onSelectQuestionId,
  onPrev,
  onNext,
  answers,
  fontSizeLevel,
  onChangeFontSize,
  hideOptions,
  onToggleHideOptions,
  darkMode,
  onToggleDarkMode,
  isFullscreen,
  onToggleFullscreen,
  showSolutionModal,
  onToggleSolutionModal,
  showAnswerKey,
  onToggleAnswerKey,
  onResetAllAnswers,
}) => {
  const [showGridModal, setShowGridModal] = useState(false);
  const totalQuestions = questionIds.length;

  const answeredCount = Object.keys(answers).filter((idStr) => {
    const qId = Number(idStr);
    const ans = answers[qId];
    if (!ans) return false;
    if (ans.selectedOption) return true;
    if (ans.selectedCheckboxes && ans.selectedCheckboxes.length > 0) return true;
    if (ans.trueFalseAnswers && Object.keys(ans.trueFalseAnswers).length > 0) return true;
    return false;
  }).length;

  return (
    <>
      {/* Floating Bottom Control Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-auto max-w-[95vw] px-4 py-2.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center gap-2 sm:gap-3 transition">
        {/* Tombol Prev */}
        <button
          onClick={onPrev}
          disabled={currentIndex === 0}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition text-slate-700 dark:text-slate-200"
          title="Soal Sebelumnya (Panah Kiri)"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Indikator Nomor & Modal Grid */}
        <button
          onClick={() => setShowGridModal(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 font-bold text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
          title="Buka Kisi Nomor Soal"
        >
          <Grid className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>
            {currentQuestionId} / {totalQuestions}
          </span>
        </button>

        {/* Tombol Next */}
        <button
          onClick={onNext}
          disabled={currentIndex === totalQuestions - 1}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none transition text-slate-700 dark:text-slate-200"
          title="Soal Berikutnya (Panah Kanan)"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="h-6 w-[1px] bg-slate-300 dark:bg-slate-700 hidden sm:block" />

        {/* Font Zoom */}
        <div className="hidden sm:flex items-center gap-1 bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
          <button
            onClick={() => onChangeFontSize(-1)}
            disabled={fontSizeLevel <= 0}
            className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 transition text-slate-700 dark:text-slate-300"
            title="Perkecil Ukuran Teks"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-xs font-semibold px-1 text-slate-600 dark:text-slate-300">
            {fontSizeLevel === 0 ? 'Normal' : fontSizeLevel === 1 ? 'Besar' : 'Ekstra'}
          </span>
          <button
            onClick={() => onChangeFontSize(1)}
            disabled={fontSizeLevel >= 2}
            className="p-1.5 rounded-lg hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 transition text-slate-700 dark:text-slate-300"
            title="Perbesar Ukuran Teks"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>

        {/* Sembunyikan Opsi Toggle */}
        <button
          onClick={onToggleHideOptions}
          className={`p-2 rounded-xl border transition ${
            hideOptions
              ? 'bg-amber-100 dark:bg-amber-950/60 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300'
              : 'bg-slate-100 dark:bg-slate-800 border-transparent hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
          }`}
          title={hideOptions ? 'Tampilkan Pilihan Ganda' : 'Sembunyikan Pilihan Ganda (Mode Eksplorasi)'}
        >
          {hideOptions ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>

        {/* Kunci Jawaban Cepat */}
        <button
          onClick={onToggleAnswerKey}
          className={`hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition ${
            showAnswerKey
              ? 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300'
              : 'bg-slate-100 dark:bg-slate-800 border-transparent hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300'
          }`}
          title="Tampilkan Kunci Cepat di Pilihan"
        >
          <span>Kunci</span>
        </button>

        {/* Pembahasan Lengkap Modal Button */}
        <button
          onClick={onToggleSolutionModal}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm transition ${
            showSolutionModal
              ? 'bg-indigo-600 text-white'
              : 'bg-indigo-50 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 dark:hover:bg-indigo-900'
          }`}
          title="Buka Pembahasan Lengkap"
        >
          <BookOpen className="w-4 h-4" />
          <span className="hidden sm:inline">Pembahasan</span>
        </button>

        {/* PDF Handout Download */}
        <a
          href="/33-Soal-TKA-Matematika-Tingkat-Lanjut-Siaga-2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          title="Unduh PDF Naskah Handout (A4 Padat)"
        >
          <FileDown className="w-4 h-4 text-rose-600 dark:text-rose-400" />
          <span className="hidden md:inline">PDF</span>
        </a>

        {/* Dark Mode */}
        <button
          onClick={onToggleDarkMode}
          className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
          title={darkMode ? 'Beralih ke Terang' : 'Beralih ke Gelap'}
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Fullscreen */}
        <button
          onClick={onToggleFullscreen}
          className="hidden sm:block p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition"
          title={isFullscreen ? 'Keluar Layar Penuh' : 'Mode Layar Penuh (Proyektor)'}
        >
          {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
        </button>
      </div>

      {/* Grid Modal Selector */}
      {showGridModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Grid className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Daftar Nomor Soal (Siaga 2)
                </h3>
              </div>
              <button
                onClick={() => setShowGridModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Status ringkasan */}
            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
              <div>
                Dijawab: <span className="font-bold text-indigo-600 dark:text-indigo-400">{answeredCount}</span> dari{' '}
                <span className="font-bold">{totalQuestions}</span> soal
              </div>
              <button
                onClick={() => {
                  if (confirm('Apakah Anda yakin ingin mereset seluruh jawaban yang tersimpan?')) {
                    onResetAllAnswers();
                  }
                }}
                className="flex items-center gap-1 text-rose-600 hover:text-rose-700 font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Semua Jawaban</span>
              </button>
            </div>

            {/* Grid 33 Soal */}
            <div className="p-6 overflow-y-auto grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 gap-2.5">
              {questionIds.map((qId) => {
                const isCurrent = qId === currentQuestionId;
                const ans = answers[qId];
                const isAnswered = Boolean(
                  ans?.selectedOption ||
                    (ans?.selectedCheckboxes && ans.selectedCheckboxes.length > 0) ||
                    (ans?.trueFalseAnswers && Object.keys(ans.trueFalseAnswers).length > 0)
                );

                return (
                  <button
                    key={qId}
                    onClick={() => {
                      onSelectQuestionId(qId);
                      setShowGridModal(false);
                    }}
                    className={`h-11 rounded-xl font-bold text-sm flex flex-col items-center justify-center transition border ${
                      isCurrent
                        ? 'bg-indigo-600 text-white border-indigo-700 shadow-md ring-2 ring-indigo-400 dark:ring-indigo-500'
                        : isAnswered
                        ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
                    }`}
                  >
                    <span>{qId}</span>
                    {isAnswered && !isCurrent && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setShowGridModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold hover:bg-slate-300 dark:hover:bg-slate-600 transition"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
