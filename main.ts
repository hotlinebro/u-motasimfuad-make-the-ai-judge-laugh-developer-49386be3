// Make the AI Judge Laugh: Developer Excuses — one-line entry writer.
// Writes a single funny developer excuse (one line, <= 200 chars)
// to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I reviewed 533 lines on a phone screen, remembered 151, and prod is now running the other 382 from memory.";

// Self-check gate: the sealed scorer only accepts UTF-8 text of 1-200
// characters, not only whitespace, on a single line. Refuse to write
// anything that would fail the gate instead of shipping a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only whitespace");
}
if (/[\r\n]/.test(ENTRY)) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
