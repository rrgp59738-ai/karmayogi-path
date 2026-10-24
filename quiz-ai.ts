import { createServerFn } from "@tanstack/react-start";
import { COMPETENCIES } from "./catalog";
import { parseQuizPayload } from "./quiz-engine";
import type { GeneratedQuiz } from "./types";

type GenerateInput = {
  competencyId: string;
  roleName: string;
  designation: string;
  ministry: string;
  yearsOfService: number;
  difficulty: "foundation" | "practitioner" | "advanced";
  workFocus: string[];
};

export const generateAiQuiz = createServerFn({ method: "POST" })
  .validator((input: GenerateInput) => input)
  .handler(async ({ data }): Promise<
    { ok: true; quiz: GeneratedQuiz } | { ok: false; error: string }
  > => {
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return { ok: false, error: "AI generation is unavailable in this environment." };
    }

    const competency = COMPETENCIES.find((c) => c.id === data.competencyId);
    if (!competency) return { ok: false, error: "Unknown competency." };

    const prompt = `You write diagnostic multiple-choice quizzes for Indian government officials on the Karmayogi Path learning platform (inspired by Mission Karmayogi / iGOT, but original — do not copy any copyrighted iGOT course text).

Officer:
- Role: ${data.roleName}
- Designation: ${data.designation || "Not specified"}
- Ministry / department: ${data.ministry || "Not specified"}
- Years of service: ${data.yearsOfService}
- Work focus tags: ${data.workFocus.join(", ") || "none"}

Competency to test: ${competency.name} (${competency.category}). ${competency.blurb}
Difficulty: ${data.difficulty}

Write 8 original MCQs that a working officer would actually get wrong if they were weak in this competency. Ground items in Indian administration: GFR/GeM, noting, citizen service, DM Act, RTI, Conduct Rules, DPI, scheme delivery, new criminal codes (BNS/BNSS/BSA) where relevant. No trick grammar questions. No party politics. No celebrity trivia.

Return ONLY JSON:
{
  "title": string,
  "questions": [
    {
      "stem": string,
      "options": [string, string, string, string],
      "correctIndex": 0 | 1 | 2 | 3,
      "explanation": string (2-3 sentences, teach the rule),
      "topicTag": string (short),
      "difficulty": "foundation" | "practitioner" | "advanced"
    }
  ]
}`;

    try {
      const res = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "grok-4.5",
          temperature: 0.4,
          max_tokens: 2400,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      if (!res.ok) {
        return { ok: false, error: `AI service returned ${res.status}. Try the curated diagnostic.` };
      }
      const body = (await res.json()) as {
        choices?: { message?: { content?: string } }[];
      };
      const text = body.choices?.[0]?.message?.content ?? "";
      const quiz = parseQuizPayload(text, data.competencyId);
      if (!quiz) {
        return {
          ok: false,
          error: "The generated quiz could not be read. Try again or use the curated set.",
        };
      }
      return { ok: true, quiz };
    } catch {
      return { ok: false, error: "Could not reach the AI service. Use the curated diagnostic." };
    }
  });
