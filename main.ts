// Make the AI Judge Laugh — u-rama-melon-make-the-ai-judge-laugh-302d0825
// Writes one original one-line office joke to /output/entry.txt.
// Deterministic, offline, Node standard library only.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My job description says 'other duties as assigned', which is how I became the printer's therapist.";

mkdirSync("/output", { recursive: true });

// Gate self-check: the entry must be UTF-8 text, 1-200 characters,
// not only whitespace. Fail loudly rather than write an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${JOKE.length} characters, outside the 1-200 gate`);
}

writeFileSync("/output/entry.txt", JOKE, "utf8");
