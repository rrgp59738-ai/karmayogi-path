import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { blendScore } from "./recommend";
import type {
  CourseProgress,
  CompetencyScore,
  GeneratedQuiz,
  OfficialProfile,
  QuizAttempt,
} from "./types";

type AppState = {
  profile: OfficialProfile | null;
  scores: Record<string, CompetencyScore>;
  attempts: QuizAttempt[];
  courseProgress: Record<string, CourseProgress>;
  activeQuiz: GeneratedQuiz | null;
  setProfile: (profile: OfficialProfile) => void;
  clearProfile: () => void;
  setActiveQuiz: (quiz: GeneratedQuiz | null) => void;
  saveAttempt: (attempt: QuizAttempt) => void;
  startCourse: (courseId: string) => void;
  completeModule: (courseId: string, moduleId: string, moduleCount: number) => void;
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      profile: null,
      scores: {},
      attempts: [],
      courseProgress: {},
      activeQuiz: null,
      setProfile: (profile) => set({ profile }),
      clearProfile: () =>
        set({
          profile: null,
          scores: {},
          attempts: [],
          courseProgress: {},
          activeQuiz: null,
        }),
      setActiveQuiz: (quiz) => set({ activeQuiz: quiz }),
      saveAttempt: (attempt) => {
        const { scores, attempts } = get();
        const perComp: Record<string, { correct: number; total: number }> = {};
        attempt.quiz.questions.forEach((q, i) => {
          const bucket = perComp[q.competencyId] ?? { correct: 0, total: 0 };
          bucket.total += 1;
          if (attempt.answers[i] === q.correctIndex) bucket.correct += 1;
          perComp[q.competencyId] = bucket;
        });
        const nextScores = { ...scores };
        const now = attempt.completedAt;
        for (const [competencyId, bucket] of Object.entries(perComp)) {
          const incoming = Math.round((bucket.correct / bucket.total) * 100);
          const prev = nextScores[competencyId];
          nextScores[competencyId] = {
            competencyId,
            score: blendScore(prev?.score, incoming),
            attempts: (prev?.attempts ?? 0) + 1,
            lastAttemptAt: now,
          };
        }
        set({
          scores: nextScores,
          attempts: [attempt, ...attempts].slice(0, 40),
          activeQuiz: null,
        });
      },
      startCourse: (courseId) => {
        const existing = get().courseProgress[courseId];
        if (existing) return;
        set({
          courseProgress: {
            ...get().courseProgress,
            [courseId]: {
              courseId,
              completedModuleIds: [],
              startedAt: new Date().toISOString(),
            },
          },
        });
      },
      completeModule: (courseId, moduleId, moduleCount) => {
        const current = get().courseProgress[courseId] ?? {
          courseId,
          completedModuleIds: [],
          startedAt: new Date().toISOString(),
        };
        const completed = current.completedModuleIds.includes(moduleId)
          ? current.completedModuleIds
          : [...current.completedModuleIds, moduleId];
        const done = completed.length >= moduleCount;
        set({
          courseProgress: {
            ...get().courseProgress,
            [courseId]: {
              ...current,
              completedModuleIds: completed,
              completedAt: done ? new Date().toISOString() : current.completedAt,
            },
          },
        });
      },
    }),
    { name: "karmayogi-path" },
  ),
);

export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const finish = () => setHydrated(true);
    if (useAppStore.persist.hasHydrated()) {
      finish();
      return;
    }
    return useAppStore.persist.onFinishHydration(finish);
  }, []);
  return hydrated;
}
