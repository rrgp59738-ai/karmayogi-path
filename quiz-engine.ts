import { COMPETENCIES, roleById } from "./catalog";
import { QUESTION_BANK, questionsFor } from "./questions";
import type {
  GeneratedQuiz,
  OfficialProfile,
  QuizQuestion,
} from "./types";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function buildBankQuiz(input: {
  competencyId: string;
  title?: string;
  difficulty?: QuizQuestion["difficulty"];
  count?: number;
}): GeneratedQuiz | null {
  const pool = questionsFor(input.competencyId);
  if (pool.length === 0) return null;
  const preferred = input.difficulty
    ? pool.filter((q) => q.difficulty === input.difficulty)
    : pool;
  const picked = shuffle(preferred.length >= 4 ? preferred : pool).slice(
    0,
    input.count ?? 6,
  );
  const competency = COMPETENCIES.find((c) => c.id === input.competencyId);
  return {
    id: crypto.randomUUID(),
    title: input.title ?? `${competency?.name ?? "Competency"} diagnostic`,
    competencyId: input.competencyId,
    source: "bank",
    questions: picked,
    createdAt: new Date().toISOString(),
  };
}

export function buildRoleQuiz(profile: OfficialProfile): GeneratedQuiz {
  const role = roleById(profile.roleId);
  const ids =
    profile.workFocus.length > 0
      ? profile.workFocus
      : (role?.competencyIds ?? COMPETENCIES.slice(0, 4).map((c) => c.id));

  const picked: QuizQuestion[] = [];
  for (const id of ids) {
    const fromComp = shuffle(questionsFor(id)).slice(0, 2);
    picked.push(...fromComp);
    if (picked.length >= 8) break;
  }
  if (picked.length < 8) {
    const used = new Set(picked.map((q) => q.id));
    const extra = shuffle(QUESTION_BANK.filter((q) => !used.has(q.id)));
    picked.push(...extra.slice(0, 8 - picked.length));
  }

  return {
    id: crypto.randomUUID(),
    title: `Role diagnostic · ${role?.name ?? "Official"}`,
    competencyId: ids[0] ?? "ethics",
    source: "bank",
    questions: picked.slice(0, 8),
    createdAt: new Date().toISOString(),
  };
}

export function scoreAttempt(
  questions: QuizQuestion[],
  answers: Array<number | null>,
): { score: number; correct: number; weakTopics: string[] } {
  let correct = 0;
  const weak: string[] = [];
  questions.forEach((q, i) => {
    if (answers[i] === q.correctIndex) correct += 1;
    else weak.push(q.topicTag);
  });
  const unique = [...new Set(weak)];
  return {
    correct,
    score: questions.length ? Math.round((correct / questions.length) * 100) : 0,
    weakTopics: unique,
  };
}

export function parseQuizPayload(
  raw: string,
  competencyId: string,
): GeneratedQuiz | null {
  const trimmed = raw.trim();
  const fenced = trimmed.match(/```(?:json)?\s*([\s\S]*?)```/);
  const candidate = fenced?.[1]?.trim() ?? trimmed;
  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    const json = JSON.parse(candidate.slice(start, end + 1)) as {
      title?: string;
      questions?: Array<{
        stem?: string;
        options?: string[];
        correctIndex?: number;
        explanation?: string;
        topicTag?: string;
        difficulty?: string;
      }>;
    };
    if (!Array.isArray(json.questions) || json.questions.length < 4) return null;
    const questions: QuizQuestion[] = [];
    for (const [i, q] of json.questions.slice(0, 8).entries()) {
      const options = (q.options ?? []).map((o) => String(o)).filter(Boolean);
      if (!q.stem || options.length < 4) continue;
      const correct = Number(q.correctIndex);
      if (!Number.isInteger(correct) || correct < 0 || correct > 3) continue;
      const diff = q.difficulty;
      const difficulty: QuizQuestion["difficulty"] =
        diff === "advanced" || diff === "practitioner" ? diff : "foundation";
      questions.push({
        id: `ai-${crypto.randomUUID()}-${i}`,
        competencyId,
        stem: String(q.stem),
        options: [options[0], options[1], options[2], options[3]],
        correctIndex: correct as 0 | 1 | 2 | 3,
        explanation: String(q.explanation ?? "Review the related circular and rule."),
        topicTag: String(q.topicTag ?? "Applied judgement"),
        difficulty,
      });
    }
    if (questions.length < 4) return null;
    return {
      id: crypto.randomUUID(),
      title: json.title?.trim() || "Custom diagnostic",
      competencyId,
      source: "ai",
      questions,
      createdAt: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}
