# Karmayogi Path

Diagnostic quizzes and role-based courses for government officials, in the spirit of Mission Karmayogi / iGOT. Original content — not the official iGOT platform.

## Stack

TypeScript, React, TanStack Start, Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open the local dev server. Quizzes, course progress, and the officer profile are saved in the browser.

## Layout

- `src/lib/catalog.ts` — roles, competencies, courses
- `src/lib/questions.ts` — curated quiz bank
- `src/lib/quiz-engine.ts` — build and score papers
- `src/lib/quiz-ai.ts` — Grok-generated quizzes (needs a server-side xAI key)
- `src/routes/` — home, role setup, diagnose, quiz, results, courses, progress
