import React from 'react';
import { QuestionItem } from '../types/question';
import { MathRenderer } from './MathRenderer';
import { OptionSelector } from './OptionSelector';
import {
  VisualSoal1,
  VisualSoal5,
  VisualSoal6,
  VisualSoal7,
  VisualSoal15,
  VisualSoal16,
  VisualSoal19,
  VisualSoal20,
  VisualSoal22,
  VisualSoal24,
  VisualSoal30,
} from './svgs';

interface QuestionViewProps {
  question: QuestionItem;
  fontSizeLevel: number;
  selectedOption?: string;
  selectedCheckboxes?: number[];
  trueFalseAnswers?: { [index: number]: 'Benar' | 'Salah' };
  onSelectOption: (key: string) => void;
  onToggleCheckbox: (idx: number) => void;
  onSelectTrueFalse: (statementIndex: number, choice: 'Benar' | 'Salah') => void;
  onResetQuestionAnswer: () => void;
  hideOptions: boolean;
  onToggleHideOptions: () => void;
  showAnswerKey: boolean;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  fontSizeLevel,
  selectedOption,
  selectedCheckboxes,
  trueFalseAnswers,
  onSelectOption,
  onToggleCheckbox,
  onSelectTrueFalse,
  onResetQuestionAnswer,
  hideOptions,
  onToggleHideOptions,
  showAnswerKey,
}) => {
  // Projector Font Size: Level 0: 20px, Level 1: 22px, Level 2: 24px
  const baseSize =
    fontSizeLevel === 2
      ? 'text-[24px]'
      : fontSizeLevel === 1
      ? 'text-[22px]'
      : 'text-[20px]';

  const typography = {
    stimulus: `${baseSize} font-normal leading-snug text-slate-800 dark:text-slate-200`,
    question: `${baseSize} font-bold leading-snug text-slate-900 dark:text-slate-50`,
    option: baseSize,
  };

  const renderVisual = (visualId?: string) => {
    switch (visualId) {
      case 'soal-1':
        return <VisualSoal1 />;
      case 'soal-5':
        return <VisualSoal5 />;
      case 'soal-6':
        return <VisualSoal6 />;
      case 'soal-7':
        return <VisualSoal7 />;
      case 'soal-15':
        return <VisualSoal15 />;
      case 'soal-16':
        return <VisualSoal16 />;
      case 'soal-19':
        return <VisualSoal19 />;
      case 'soal-20':
        return <VisualSoal20 />;
      case 'soal-22':
        return <VisualSoal22 />;
      case 'soal-24':
        return <VisualSoal24 />;
      case 'soal-30':
        return <VisualSoal30 />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto pb-24">
      {/* Header Soal & Topik */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-700 text-white font-black text-xl shadow-md">
            {question.id}
          </span>
          <div>
            <div className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
              {question.topic}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {question.type === 'multiple-choice'
                ? 'Pilihan Ganda (A - E)'
                : question.type === 'complex-multiple-choice'
                ? 'Pilihan Ganda Kompleks (Banyak Pilihan)'
                : 'Tabel Evaluasi (Benar / Salah)'}
            </div>
          </div>
        </div>

        {/* Action button reset answer per question */}
        {(selectedOption ||
          (selectedCheckboxes && selectedCheckboxes.length > 0) ||
          (trueFalseAnswers && Object.keys(trueFalseAnswers).length > 0)) && (
          <button
            onClick={onResetQuestionAnswer}
            className="text-xs px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            Hapus Jawaban Soal Ini
          </button>
        )}
      </div>

      {/* Stimulus Context */}
      {question.storyContext && (
        <div className={`p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 ${typography.stimulus}`}>
          <MathRenderer content={question.storyContext} />
        </div>
      )}

      {/* Visual illustration (SVG) */}
      {question.visualId && renderVisual(question.visualId)}

      {/* Pertanyaan Inti */}
      <div className={`p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm ${typography.question}`}>
        <MathRenderer content={question.questionText} />
      </div>

      {/* Pilihan Jawaban */}
      <div className="relative">
        <OptionSelector
          question={question}
          selectedOption={selectedOption}
          selectedCheckboxes={selectedCheckboxes}
          trueFalseAnswers={trueFalseAnswers}
          onSelectOption={onSelectOption}
          onToggleCheckbox={onToggleCheckbox}
          onSelectTrueFalse={onSelectTrueFalse}
          onResetQuestionAnswer={onResetQuestionAnswer}
          fontSizeClass={typography.option}
          hideOptions={hideOptions}
          onToggleHideOptions={onToggleHideOptions}
          showAnswerKey={showAnswerKey}
        />
      </div>
    </div>
  );
};
