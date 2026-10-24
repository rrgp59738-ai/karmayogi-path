export type CompetencyCategory = "behavioral" | "functional" | "domain";

export type Competency = {
  id: string;
  name: string;
  short: string;
  category: CompetencyCategory;
  blurb: string;
};

export type Role = {
  id: string;
  name: string;
  cadre: string;
  blurb: string;
  competencyIds: string[];
};

export type QuizQuestion = {
  id: string;
  competencyId: string;
  stem: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  topicTag: string;
  difficulty: "foundation" | "practitioner" | "advanced";
};

export type GeneratedQuiz = {
  id: string;
  title: string;
  competencyId: string;
  source: "bank" | "ai";
  questions: QuizQuestion[];
  createdAt: string;
};

export type QuizAttempt = {
  id: string;
  quiz: GeneratedQuiz;
  answers: Array<number | null>;
  score: number;
  weakTopics: string[];
  completedAt: string;
};

export type CourseModule = {
  id: string;
  title: string;
  minutes: number;
  paragraphs: string[];
  takeaways: string[];
};

export type Course = {
  id: string;
  title: string;
  subtitle: string;
  competencyIds: string[];
  category: CompetencyCategory;
  durationMin: number;
  level: "foundation" | "practitioner" | "advanced";
  audience: string;
};

export type OfficialProfile = {
  name: string;
  roleId: string;
  designation: string;
  ministry: string;
  yearsOfService: number;
  workFocus: string[];
};

export type CompetencyScore = {
  competencyId: string;
  score: number;
  attempts: number;
  lastAttemptAt: string;
};

export type CourseProgress = {
  courseId: string;
  completedModuleIds: string[];
  startedAt: string;
  completedAt?: string;
};
