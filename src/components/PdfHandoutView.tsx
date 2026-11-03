import React from 'react';
import { questionsData } from '../data/questionsData';
import { QuestionItem } from '../types/question';
import { MathRenderer } from './MathRenderer';
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

interface PageSpec {
  pageNumber: number;
  leftIds: number[];
  rightIds: number[];
}

const PAGES_SIAGA_2: PageSpec[] = [
  { pageNumber: 1, leftIds: [1, 2, 3, 4], rightIds: [5, 6, 7] },
  { pageNumber: 2, leftIds: [8, 9, 10], rightIds: [11, 12, 13, 14] },
  { pageNumber: 3, leftIds: [15, 16, 17, 18], rightIds: [19, 20, 21] },
  { pageNumber: 4, leftIds: [22, 23, 24, 25], rightIds: [26, 27, 28] },
  { pageNumber: 5, leftIds: [29, 30, 31], rightIds: [32, 33] },
];

const compactNewlines = (text?: string): string => {
  if (!text) return '';
  return text.replace(/\n{2,}/g, '\n');
};

const PdfQuestionBlock: React.FC<{ q: QuestionItem }> = ({ q }) => {
  const isOneColOptions = [22, 26, 30].includes(q.id);
  const isTwoColOptions = [5, 9, 10, 12, 13, 14, 20, 23, 27, 33].includes(q.id);
  const isFiveColOptions = [1, 2, 3, 4, 7, 17, 31, 32].includes(q.id);

  return (
    <div
      data-pdf-question={q.id}
      className="border border-slate-300 rounded-md px-2 py-1.5 bg-white flex flex-col gap-0.5 text-[10px] leading-[1.26] text-slate-900"
    >
      {/* Header Soal & Topik */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-0.5 mb-0.5">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="px-1.5 py-0.2 bg-slate-900 text-white font-extrabold rounded text-[9.5px] whitespace-nowrap flex-shrink-0">
            NO. {q.id}
          </span>
          <span className="text-[9px] font-bold text-slate-600 uppercase tracking-tight truncate">
            {q.topic}
          </span>
        </div>
      </div>

      {/* Stimulus Context */}
      {q.storyContext && (
        <div className="text-slate-800">
          <MathRenderer content={compactNewlines(q.storyContext)} />
        </div>
      )}

      {/* Visual illustration (SVG) */}
      {q.visualId && (
        <div className="w-full flex items-center justify-center my-0.5 overflow-hidden bg-slate-50/50 rounded border border-slate-200/80 py-0.5 px-1 [&_svg]:!max-h-[115px] [&_svg]:!w-auto [&_svg]:!max-w-full [&_svg]:mx-auto">
          {renderVisual(q.visualId)}
        </div>
      )}

      {/* Main Question Prompt */}
      <div className="font-bold text-slate-950">
        <MathRenderer content={compactNewlines(q.questionText)} />
      </div>

      {/* Options: Multiple Choice */}
      {q.type === 'multiple-choice' && q.options && (
        <div
          className={
            isOneColOptions
              ? 'grid grid-cols-1 gap-y-0.5 pt-0.5'
              : isTwoColOptions
              ? 'grid grid-cols-2 gap-x-2 gap-y-0.5 pt-0.5'
              : isFiveColOptions
              ? 'grid grid-cols-5 gap-x-1 gap-y-0.5 pt-0.5'
              : 'grid grid-cols-3 gap-x-1.5 gap-y-0.5 pt-0.5'
          }
        >
          {q.options.map((opt) => (
            <div key={opt.key} className="flex items-baseline gap-1">
              <span className="font-extrabold text-slate-900">{opt.key}.</span>
              <span>
                <MathRenderer content={opt.text} />
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Options: Complex Multiple Choice */}
      {q.type === 'complex-multiple-choice' && q.checkboxOptions && (
        <div className="flex flex-col gap-0.5 pt-0.5">
          {q.checkboxOptions.map((optText, idx) => (
            <div key={idx} className="flex items-start gap-1.5">
              <span className="inline-block w-2.5 h-2.5 border border-slate-700 rounded-[2px] flex-shrink-0 mt-0.5" />
              <span className="flex-1">
                <MathRenderer content={optText} />
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Options: True False Table */}
      {q.type === 'true-false-table' && q.statements && (
        <div className="pt-0.5">
          <table className="w-full border-collapse border border-slate-300 text-[9.5px]">
            <thead>
              <tr className="bg-slate-100">
                <th className="border border-slate-300 px-1 py-0.5 text-left font-bold text-slate-800">
                  Pernyataan
                </th>
                <th className="border border-slate-300 px-1 py-0.5 text-center font-bold text-slate-800 w-12">
                  Benar
                </th>
                <th className="border border-slate-300 px-1 py-0.5 text-center font-bold text-slate-800 w-12">
                  Salah
                </th>
              </tr>
            </thead>
            <tbody>
              {q.statements.map((stmt, idx) => (
                <tr key={idx} className={idx % 2 === 1 ? 'bg-slate-50/60' : 'bg-white'}>
                  <td className="border border-slate-300 px-1 py-0.5">
                    <MathRenderer content={stmt} />
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
  const getQuestion = (id: number): QuestionItem | undefined => {
    return questionsData.find((q) => q.id === id);
  };

  return (
    <div className="bg-slate-200 min-h-screen py-6 print:py-0 print:bg-white text-slate-900 font-sans">
      <div className="max-w-[210mm] mx-auto flex flex-col gap-8 print:gap-0">
        {PAGES_SIAGA_2.map((pSpec) => (
          <div
            key={pSpec.pageNumber}
            data-pdf-page={pSpec.pageNumber}
            className="w-[210mm] h-[297mm] max-h-[297mm] bg-white mx-auto p-[8mm] shadow-lg print:shadow-none flex flex-col justify-between box-border overflow-hidden print:m-0 print:break-after-page"
            style={{ pageBreakAfter: 'always' }}
          >
            {/* Kop Naskah di Setiap Halaman */}
            <div>
              <div className="flex items-center justify-between border-b-2 border-slate-900 pb-1.5 mb-2.5">
                <div>
                  <h1 className="text-[12.5px] font-black uppercase tracking-wider text-slate-950">
                    LATIHAN H-1 TKA MATEMATIKA TINGKAT LANJUT
                  </h1>
                  <p className="text-[10px] font-bold text-slate-700">
                    Naskah Soal Uji Siaga 2 (33 Soal) • Tahun Ajaran 2026/2027
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-slate-900">
                    Halaman {pSpec.pageNumber} dari {PAGES_SIAGA_2.length}
                  </div>
                  <div className="text-[8.5px] text-slate-500 font-medium">
                    Format Hemat Lembar A4 (2 Kolom)
                  </div>
                </div>
              </div>

              {/* Layout 2 Kolom Soal */}
              <div className="grid grid-cols-2 gap-x-3 items-start">
                {/* Kolom Kiri */}
                <div data-pdf-col="left" className="flex flex-col gap-2">
                  {pSpec.leftIds.map((id) => {
                    const q = getQuestion(id);
                    if (!q) return null;
                    return <PdfQuestionBlock key={q.id} q={q} />;
                  })}
                </div>

                {/* Kolom Kanan */}
                <div data-pdf-col="right" className="flex flex-col gap-2">
                  {pSpec.rightIds.map((id) => {
                    const q = getQuestion(id);
                    if (!q) return null;
                    return <PdfQuestionBlock key={q.id} q={q} />;
                  })}

                  {/* Kunci Jawaban Singkat di Halaman 5 Kolom Kanan */}
                  {pSpec.pageNumber === 5 && (
                    <div className="border-2 border-slate-900 rounded-md p-2 bg-slate-50 mt-1">
                      <div className="text-[10px] font-black uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-1.5 text-center">
                        Kunci Jawaban Singkat (Nomor 1 - 33)
                      </div>
                      <div className="grid grid-cols-6 gap-x-1.5 gap-y-0.5 text-[8.5px] font-bold text-slate-800">
                        {questionsData.map((q) => {
                          const ansSummary =
                            q.type === 'multiple-choice'
                              ? q.solution.correctOptionKey || '-'
                              : q.type === 'complex-multiple-choice'
                              ? q.solution.correctCheckboxIndices
                                  ?.map((i) => i + 1)
                                  .join(',') || 'Kompleks'
                              : 'B/S';
                          return (
                            <div key={q.id} className="flex justify-between border-b border-slate-200/60 pb-0.5">
                              <span className="text-slate-500">{q.id}.</span>
                              <span className="text-slate-950 font-extrabold">{ansSummary}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer Halaman */}
            <div className="border-t border-slate-300 pt-1 text-[8.5px] text-slate-500 flex justify-between items-center">
              <span>SMA / MA — Persiapan Siaga Menghadapi TKA Matematika Tingkat Lanjut</span>
              <span>Halaman {pSpec.pageNumber} / {PAGES_SIAGA_2.length}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
