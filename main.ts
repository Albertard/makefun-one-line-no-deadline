// One Line, No Deadline Met — make.fun entry
// Writes exactly one single-line joke to /output/entry.txt: an excuse
// for missing a deadline. The judge picks the funniest excuse head to head.
//
// The line: "I finished the report three days ago — unfortunately, I
// finished it in a dream, and dreams don't export to PDF."
// Why it wins: it is a real excuse (the report was never delivered), it
// has a genuine turn — the proud "finished three days ago" collapses
// into "in a dream" — and the punchline "dreams don't export to PDF"
// lands in modern office language anyone would actually say. It is
// fresh (no dog ate it, no traffic, no Wi-Fi died), it works as one
// self-contained line, and it is relatable: everyone has done the work
// in their head and mistaken it for done.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I finished the report three days ago — unfortunately, I finished it in a dream, and dreams don't export to PDF.";

// Gate: the entry must be UTF-8 text of 1 to MAX_LENGTH characters,
// not only whitespace, and exactly one line. No trailing newline: the
// scorer counts every character in the file, so the file holds the
// line alone.
const MAX_LENGTH = 200;

function validateLine(line: string): void {
  if (line.length < 1 || line.length > MAX_LENGTH) {
    throw new Error(
      `entry must be 1-${MAX_LENGTH} characters, got ${line.length}`,
    );
  }
  if (!line.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
}

validateLine(LINE);

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${JSON.stringify(LINE)} to ${outPath}`);
