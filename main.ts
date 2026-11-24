// news-image-20261124 — copies the static entry image to the output directory.
// Node 22 stdlib only, no dependencies. Run with: node main.ts
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");

// rev2: output directory is created before copying so repeated runs stay idempotent.
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log("entry.png written to " + join(outDir, "entry.png"));
