import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Do not reboot. The ghost is mid-update and it has been since 2019.";
const OUTPUT_FILE = "/output/entry.txt";

const chars = [...LINE].length;
if (chars < 1 || chars > 120) {
  throw new Error(`entry line must be 1-120 characters, got ${chars}`);
}
if (!LINE.trim()) {
  throw new Error("entry line must not be whitespace-only");
}
if (Buffer.byteLength(LINE, "utf8") > 120) {
  throw new Error("entry line must be at most 120 bytes");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_FILE, LINE, "utf8");
console.log(`wrote ${chars} characters to ${OUTPUT_FILE}`);
