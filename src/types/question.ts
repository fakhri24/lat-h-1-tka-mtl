export type PackageId = 'siaga-2';

export type QuestionType = 'single' | 'multiple' | 'table';

export interface QuestionOption {
  id: string;
  text: string;
}

export interface QuestionStatement {
  id: string;
  text: string;
  isTrue: boolean;
}

export interface Question {
  id: string;
  number: number;
  packageId: PackageId;
  topic: string;
  subtopic?: string;
  type: QuestionType;
  svgType?: string;
  stimulus?: string;
  questionText: string;
  options?: QuestionOption[];
  statements?: QuestionStatement[];
  correctAnswer?: string | string[] | Record<string, boolean>;
  solutionSteps: string[];
}
