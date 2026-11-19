// POST.json publisher for the gta6-meme-x-01 make.fun entry.
//
// Behaviour is intentionally tiny and deterministic:
//   1. Resolve the bot directory and the output directory from the
//      environment, falling back to /bot and /output.
//   2. Fail loudly (stderr + exit 1) when the source pointer is missing.
//   3. Otherwise create the output directory and copy the pointer
//      file across byte-for-byte, printing nothing on success.
//
// No network access, no clock reads, and no randomness are involved,
// so a given input directory always produces the same output.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import process from "node:process";

/** Print a clear failure message and stop with a non-zero status. */
function fail(message: string): never {
  console.error(`main: ${message}`);
  process.exit(1);
}

function main(): void {
  const botDir: string = process.env.MAKEFUN_BOT_DIR || "/bot";
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";

  const sourcePath: string = join(botDir, "POST.json");
  const destPath: string = join(outDir, "POST.json");

  if (!existsSync(sourcePath)) {
    fail(
      `missing POST.json — expected it at ${sourcePath}. ` +
        `Place a POST.json in the bot directory and run again.`,
    );
  }

  // Recursive creation is a no-op when the directory already exists.
  mkdirSync(outDir, { recursive: true });
  copyFileSync(sourcePath, destPath);
}

main();
