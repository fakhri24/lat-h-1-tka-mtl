import React from 'react';
import { Question } from '../types/question';
import { MathRenderer } from './MathRenderer';
import { OptionSelector } from './OptionSelector';
import { QUESTION_SVGS } from './svgs';

interface QuestionViewProps {
  question: Question;
  totalQuestions: number;
  selectedSingle?: string;
  selectedMultiple?: string[];
  selectedTable?: Record<string, boolean>;
  onSelectSingle: (optionId: string) => void;
  onToggleMultiple: (optionId: string) => void;
  onSelectTable: (statementId: string, val: boolean) => void;
  showAnswer: boolean;
  fontSizeLevel: 1 | 2 | 3;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  selectedSingle,
  selectedMultiple,
  selectedTable,
  onSelectSingle,
  onToggleMultiple,
  onSelectTable,
  showAnswer,
  fontSizeLevel,
}) => {
  const VisualComponent = question.svgType
    ? QUESTION_SVGS[question.svgType]
    : undefined;

  const hasVisual = Boolean(VisualComponent);

  const stimulusSize =
    fontSizeLevel === 1
      ? 'text-[20px] 2xl:text-[22px] leading-[1.38]'
      : fontSizeLevel === 2
      ? 'text-[24px] leading-[1.45]'
      : 'text-[27px] leading-[1.48]';

  const questionSize =
    fontSizeLevel === 1
      ? 'text-[20px] 2xl:text-[22px] leading-[1.36]'
      : fontSizeLevel === 2
      ? 'text-[24px] leading-[1.42]'
      : 'text-[27px] leading-[1.46]';

  const typeBadge =
    question.type === 'single'
      ? 'Pilihan Ganda'
      : question.type === 'multiple'
      ? 'PGK MCMA (Lebih dari 1 Jawaban)'
      : 'PGK Kategori (Benar / Salah)';

  return (
    <div
      data-question-view
      className="w-full h-full px-5 pt-3 pb-3 flex flex-col justify-center overflow-hidden"
    >
      {hasVisual ? (
        /* Split Layout: Left 5/12 for Text & Options, Right 7/12 (58.3%) for Vector Diagram */
        <div className="w-full h-full grid grid-cols-12 gap-5 items-center overflow-hidden">
          <div
            data-text-column
            className="col-span-5 h-full flex flex-col justify-center overflow-y-auto pr-2 py-1 gap-2.5 custom-scrollbar"
          >
            {/* Header Badges */}
            <div className="flex flex-wrap items-center gap-2 pr-4">
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-xl bg-brand-600 text-white font-extrabold text-sm tracking-wide shadow-sm">
                SOAL {question.number}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider">
                {question.topic}
              </span>
              {question.subtopic && (
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 font-semibold text-xs">
                  {question.subtopic}
                </span>
              )}
              <span className="px-2.5 py-1 rounded-lg bg-amber-100/80 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-semibold text-xs">
                {typeBadge}
              </span>
            </div>

            {/* Stimulus Card */}
            {question.stimulus && (
              <div
                data-stimulus
                className={`p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm ${stimulusSize}`}
              >
                <MathRenderer content={question.stimulus} />
              </div>
            )}

            {/* Question Stem */}
            <div
              data-question-text
              className={`font-bold text-slate-900 dark:text-white ${questionSize}`}
            >
              <MathRenderer content={question.questionText} />
            </div>

            {/* Options / Statements */}
            <OptionSelector
              type={question.type}
              options={question.options}
              statements={question.statements}
              selectedSingle={selectedSingle}
              selectedMultiple={selectedMultiple}
              selectedTable={selectedTable}
              onSelectSingle={onSelectSingle}
              onToggleMultiple={onToggleMultiple}
              onSelectTable={onSelectTable}
              showAnswer={showAnswer}
              correctAnswer={question.correctAnswer}
              fontSizeLevel={fontSizeLevel}
              compact={true}
              hasVisual={true}
            />
          </div>

          {/* Right 7/12 Visual Canvas */}
          <div
            data-photo-container
            className="col-span-7 h-full max-h-[93vh] flex items-center justify-center bg-white dark:bg-slate-900 rounded-3xl border-2 border-slate-200/90 dark:border-slate-800 shadow-md p-5 overflow-hidden"
          >
            <div className="w-full h-full flex items-center justify-center">
              {VisualComponent && <VisualComponent />}
            </div>
          </div>
        </div>
      ) : (
        /* Full-Width Centered Layout for Non-Photo Questions */
        <div
          data-text-column
          className="w-full max-w-[1440px] mx-auto h-full flex flex-col justify-center overflow-y-auto px-4 py-1 gap-2.5 2xl:gap-3.5 custom-scrollbar"
        >
          {/* Header Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pr-72">
            <span className="inline-flex items-center justify-center px-3.5 py-1 rounded-xl bg-brand-600 text-white font-extrabold text-base tracking-wide shadow-sm">
              SOAL {question.number}
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs uppercase tracking-wider">
              {question.topic}
            </span>
            {question.subtopic && (
              <span className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 font-semibold text-xs">
                {question.subtopic}
              </span>
            )}
            <span className="px-3 py-1 rounded-lg bg-amber-100/80 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 font-semibold text-xs">
              {typeBadge}
            </span>
          </div>

          {/* Stimulus Card */}
          {question.stimulus && (
            <div
              data-stimulus
              className={`p-3.5 2xl:p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-sm ${stimulusSize}`}
            >
              <MathRenderer content={question.stimulus} />
            </div>
          )}

          {/* Question Stem */}
          <div
            data-question-text
            className={`font-bold text-slate-900 dark:text-white ${questionSize}`}
          >
            <MathRenderer content={question.questionText} />
          </div>

          {/* Options / Statements */}
          <OptionSelector
            type={question.type}
            options={question.options}
            statements={question.statements}
            selectedSingle={selectedSingle}
            selectedMultiple={selectedMultiple}
            selectedTable={selectedTable}
            onSelectSingle={onSelectSingle}
            onToggleMultiple={onToggleMultiple}
            onSelectTable={onSelectTable}
            showAnswer={showAnswer}
            correctAnswer={question.correctAnswer}
            fontSizeLevel={fontSizeLevel}
            compact={false}
            hasVisual={false}
          />
        </div>
      )}
    </div>
  );
};
