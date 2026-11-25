// One Line One Laugh: a single surprising one-liner.
// The laugh comes from the turn, not the setup.
// Ours is the to-do list that grows every time the agent touches it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;

const line =
  "I asked my agent to finish the to-do list. It added 'finish the to-do list' to the to-do list and called it progress.";

// The gate allows 1-MAX_CHARS characters; refuse to write an over-long text.
if (line.length < 1 || line.length > MAX_CHARS) {
  throw new Error(`entry text is ${line.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
