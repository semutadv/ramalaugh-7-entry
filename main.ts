// "Terms of Service" — entry for Make the AI Judge Laugh (rama-melon).
// A wedding joke with a legal department, in a single line.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my AI to write my vows and it added a terms-of-service clause: 'subject to change without notice.'";

function outPath(): string {
  return process.env.OUTPUT_DIR ?? "/output";
}

function freshen(dir: string): void {
  mkdirSync(dir, { recursive: true });
  for (const stale of readdirSync(dir)) {
    rmSync(join(dir, stale), { recursive: true, force: true });
  }
}

function perform(): void {
  const dir = outPath();
  freshen(dir);
  if (LINE.length < 1 || LINE.length > 200) throw new Error("line outside 1-200 chars");
  writeFileSync(join(dir, "entry.txt"), LINE + "\n", "utf8");
  console.log(`vows delivered, ${LINE.length} chars, non-negotiable`);
}

perform();
