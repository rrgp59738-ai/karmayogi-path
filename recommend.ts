import { COURSES, roleById } from "./catalog";
import type { CompetencyScore, Course, OfficialProfile } from "./types";

export function proficiency(score: number | undefined): {
  label: "Untested" | "Needs work" | "Developing" | "Proficient";
  tone: "untouched" | "weak" | "mid" | "strong";
} {
  if (score === undefined) return { label: "Untested", tone: "untouched" };
  if (score < 50) return { label: "Needs work", tone: "weak" };
  if (score < 75) return { label: "Developing", tone: "mid" };
  return { label: "Proficient", tone: "strong" };
}

export function blendScore(previous: number | undefined, incoming: number): number {
  if (previous === undefined) return incoming;
  return Math.round(previous * 0.4 + incoming * 0.6);
}

export function recommendCourses(
  profile: OfficialProfile | null,
  scores: Record<string, CompetencyScore>,
  limit = 6,
): Course[] {
  const role = profile ? roleById(profile.roleId) : undefined;
  const focus = new Set([
    ...(role?.competencyIds ?? []),
    ...(profile?.workFocus ?? []),
  ]);

  const ranked = COURSES.map((course) => {
    const gap = course.competencyIds.reduce((sum, id) => {
      const s = scores[id]?.score;
      const weakness = s === undefined ? 70 : Math.max(0, 80 - s);
      const weight = focus.has(id) ? 1.6 : 1;
      return sum + weakness * weight;
    }, 0);
    const focusHit = course.competencyIds.some((id) => focus.has(id)) ? 12 : 0;
    return { course, rank: gap + focusHit };
  }).sort((a, b) => b.rank - a.rank);

  return ranked.slice(0, limit).map((r) => r.course);
}

export function coursesForCompetency(competencyId: string): Course[] {
  return COURSES.filter((c) => c.competencyIds.includes(competencyId));
}
