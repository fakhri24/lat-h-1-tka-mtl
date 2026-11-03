import React from 'react';
import { Check, Square, CheckSquare } from 'lucide-react';
import { QuestionOption, QuestionStatement, QuestionType } from '../types/question';
import { MathRenderer } from './MathRenderer';

interface OptionSelectorProps {
  type: QuestionType;
  options?: QuestionOption[];
  statements?: QuestionStatement[];
  selectedSingle?: string;
  selectedMultiple?: string[];
  selectedTable?: Record<string, boolean>;
  onSelectSingle: (optionId: string) => void;
  onToggleMultiple: (optionId: string) => void;
  onSelectTable: (statementId: string, val: boolean) => void;
  showAnswer: boolean;
  correctAnswer?: string | string[] | Record<string, boolean>;
  fontSizeLevel: 1 | 2 | 3;
  compact?: boolean;
  hasVisual?: boolean;
}

export const OptionSelector: React.FC<OptionSelectorProps> = ({
  type,
  options = [],
  statements = [],
  selectedSingle,
  selectedMultiple = [],
  selectedTable = {},
  onSelectSingle,
  onToggleMultiple,
  onSelectTable,
  showAnswer,
  correctAnswer,
  fontSizeLevel,
  compact = false,
  hasVisual = false,
}) => {
  const textSizeClass =
    fontSizeLevel === 1
      ? compact
        ? 'text-[17px] leading-[1.35]'
        : 'text-[19px] 2xl:text-[21px] leading-[1.38]'
      : fontSizeLevel === 2
      ? compact
        ? 'text-[20px] leading-[1.4]'
        : 'text-[23px] leading-[1.42]'
      : compact
      ? 'text-[22px] leading-[1.42]'
      : 'text-[26px] leading-[1.45]';

  if (type === 'table') {
    return (
      <div className="w-full overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="bg-slate-100/90 dark:bg-slate-800/90 border-b border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">
              <th className={`py-2.5 px-4 font-bold ${textSizeClass}`}>Pernyataan</th>
              <th className={`py-2.5 px-4 font-bold text-center w-28 ${textSizeClass}`}>
                Benar
              </th>
              <th className={`py-2.5 px-4 font-bold text-center w-28 ${textSizeClass}`}>
                Salah
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/70 dark:divide-slate-800">
            {statements.map((st, idx) => {
              const userChoice = selectedTable[st.id];
              const isTrueCorrect = st.isTrue === true;
              const isFalseCorrect = st.isTrue === false;

              return (
                <tr
                  key={st.id}
                  className={`transition-colors ${
                    idx % 2 === 0
                      ? 'bg-white dark:bg-slate-900'
                      : 'bg-slate-50/50 dark:bg-slate-900/50'
                  }`}
                >
                  <td className={`py-2.5 px-4 text-slate-800 dark:text-slate-100 ${textSizeClass}`}>
                    <MathRenderer content={st.text} />
                  </td>
                  <td className="py-2.5 px-4 text-center">
                    <button
                      type="button"
                      onClick={() => onSelectTable(st.id, true)}
                      className={`w-9 h-9 rounded-xl inline-flex items-center justify-center border-2 transition-all ${
                        showAnswer && isTrueCorrect
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-md scale-105'
                          : userChoice === true
                          ? 'bg-brand-600 border-brand-600 text-white'
                          : 'border-slate-300 dark:border-slate-700 hover:border-brand-400 text-transparent'
                      }`}
                    >
                      <Check className="w-5 h-5 stroke-[3]" />
                    </button>
                  </td>
                  <td className="py-2.5 px-4 text-center">
                    <button
                      type="button"
                      onClick={() => onSelectTable(st.id, false)}
                      className={`w-9 h-9 rounded-xl inline-flex items-center justify-center border-2 transition-all ${
                        showAnswer && isFalseCorrect
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-md scale-105'
                          : userChoice === false
                          ? 'bg-brand-600 border-brand-600 text-white'
                          : 'border-slate-300 dark:border-slate-700 hover:border-brand-400 text-transparent'
                      }`}
                    >
                      <Check className="w-5 h-5 stroke-[3]" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  const isMultiple = type === 'multiple';
  const correctList = Array.isArray(correctAnswer)
    ? correctAnswer
    : typeof correctAnswer === 'string'
    ? [correctAnswer]
    : [];

  // Use multi-column option grid when options contain matrices/determinants on non-visual questions
  // so 5 tall matrix options never cause vertical scroll on 768p/900p screens.
  const hasTallMatrixOptions =
    !hasVisual &&
    options.some((opt) => opt.text.includes('\\begin{'));

  const containerLayoutClass = hasTallMatrixOptions
    ? 'grid grid-cols-2 xl:grid-cols-3 gap-2.5'
    : !hasVisual && options.length === 5
    ? 'grid grid-cols-1 md:grid-cols-2 gap-2.5'
    : 'flex flex-col gap-2';

  return (
    <div className={containerLayoutClass}>
      {options.map((opt) => {
        const isSelected = isMultiple
          ? selectedMultiple.includes(opt.id)
          : selectedSingle === opt.id;
        const isCorrect = correctList.includes(opt.id);

        let cardStyle =
          'bg-white dark:bg-slate-900 border-slate-200/90 dark:border-slate-800 hover:border-brand-400 dark:hover:border-brand-600 text-slate-800 dark:text-slate-100';
        let badgeStyle =
          'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700';

        if (showAnswer && isCorrect) {
          cardStyle =
            'bg-emerald-50/90 dark:bg-emerald-950/50 border-emerald-500 dark:border-emerald-500 text-emerald-950 dark:text-emerald-100 ring-2 ring-emerald-500/30';
          badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
        } else if (isSelected) {
          cardStyle =
            'bg-brand-50/90 dark:bg-brand-950/60 border-brand-500 dark:border-brand-500 text-brand-950 dark:text-brand-100 ring-2 ring-brand-500/20';
          badgeStyle = 'bg-brand-600 text-white border-brand-600';
        }

        return (
          <button
            key={opt.id}
            type="button"
            onClick={() =>
              isMultiple ? onToggleMultiple(opt.id) : onSelectSingle(opt.id)
            }
            className={`group w-full text-left rounded-xl border-2 transition-all flex items-center gap-3 ${
              compact ? 'px-3 py-2' : 'px-3.5 py-2.5'
            } ${cardStyle}`}
          >
            {isMultiple ? (
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                  showAnswer && isCorrect
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : isSelected
                    ? 'text-brand-600 dark:text-brand-400'
                    : 'text-slate-400 dark:text-slate-600 group-hover:text-brand-500'
                }`}
              >
                {isSelected || (showAnswer && isCorrect) ? (
                  <CheckSquare className="w-6 h-6 stroke-[2.5]" />
                ) : (
                  <Square className="w-6 h-6 stroke-[2]" />
                )}
              </div>
            ) : (
              <div
                className={`w-8 h-8 rounded-lg border font-bold text-sm flex items-center justify-center shrink-0 transition-colors ${badgeStyle}`}
              >
                {opt.id}
              </div>
            )}

            <div className={`flex-1 min-w-0 font-medium ${textSizeClass}`}>
              <MathRenderer content={opt.text} />
            </div>

            {showAnswer && isCorrect && (
              <span className="px-2 py-0.5 rounded-md bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shrink-0">
                Benar
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
