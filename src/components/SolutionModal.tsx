import React from 'react';
import { X, CheckCircle2, Sparkles } from 'lucide-react';
import { Question } from '../types/question';
import { MathRenderer } from './MathRenderer';

interface SolutionModalProps {
  question: Question;
  onClose: () => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({
  question,
  onClose,
}) => {
  const renderCorrectSummary = () => {
    if (question.type === 'single' && typeof question.correctAnswer === 'string') {
      const matched = question.options?.find((o) => o.id === question.correctAnswer);
      return (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-bold">Jawaban Benar: Opsi {question.correctAnswer}</span>
          {matched && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg bg-emerald-100 dark:bg-emerald-900/70 text-emerald-900 dark:text-emerald-100 font-semibold">
              <MathRenderer content={matched.text} />
            </span>
          )}
        </div>
      );
    }

    if (question.type === 'multiple' && Array.isArray(question.correctAnswer)) {
      return (
        <div className="flex flex-col gap-1.5">
          <span className="font-bold">
            Jawaban Benar (PGK MCMA): Opsi {question.correctAnswer.join(', ')}
          </span>
          <div className="flex flex-wrap gap-2">
            {question.correctAnswer.map((ansId) => {
              const matched = question.options?.find((o) => o.id === ansId);
              return (
                <span
                  key={ansId}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/70 text-emerald-950 dark:text-emerald-100 text-base font-medium"
                >
                  <strong>({ansId})</strong>
                  {matched && <MathRenderer content={matched.text} />}
                </span>
              );
            })}
          </div>
        </div>
      );
    }

    if (question.type === 'table' && question.statements) {
      return (
        <div className="flex flex-col gap-1">
          <span className="font-bold">Kunci Pernyataan:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {question.statements.map((st, idx) => (
              <span
                key={st.id}
                className="px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/70 text-emerald-950 dark:text-emerald-100 text-base font-bold"
              >
                Pernyataan {idx + 1}: {st.isTrue ? 'BENAR' : 'SALAH'}
              </span>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      data-solution-modal
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 backdrop-blur-sm p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-800/70 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 dark:text-white">
                Pembahasan Soal Nomor {question.number} (SIAGA 2)
              </h2>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {question.topic} {question.subtopic ? `• ${question.subtopic}` : ''}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            data-close-modal
            title="Tutup Pembahasan (Esc / P)"
            className="p-2 rounded-xl bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {/* Correct Answer Banner */}
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-100 flex items-start gap-3 text-lg">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div className="flex-1">{renderCorrectSummary()}</div>
          </div>

          {/* Step-by-Step Solution */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Langkah Penyelesaian
            </h3>
            <div className="space-y-2.5">
              {question.solutionSteps.map((step, index) => (
                <div
                  key={index}
                  data-solution-step
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/80 dark:border-slate-800 text-slate-800 dark:text-slate-100 text-[20px] leading-[1.55] overflow-x-auto"
                >
                  <MathRenderer content={step} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
