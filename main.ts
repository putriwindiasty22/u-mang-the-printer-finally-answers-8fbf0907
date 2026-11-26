// The Printer Finally Answers — entry for make.fun bounty
// u-mang-the-printer-finally-answers-8fbf0907
//
// Writes the office printer's comeback, one line, to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Eleven years, 214,003 sheets fed, and nobody once asked how I feel — so Error 41 is my feelings, and the thumping is why I keep them to myself.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
