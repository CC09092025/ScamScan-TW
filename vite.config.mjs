import { readdirSync, statSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { defineConfig } from "vite";

const root = resolve(".");
const skip = new Set(["node_modules", "dist", "public", "docs", ".git"]);

// Every folder containing an index.html becomes its own page in the build.
function findPages(dir, pages = {}) {
  for (const name of readdirSync(dir)) {
    if (skip.has(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) findPages(full, pages);
    else if (name === "index.html") {
      const key = relative(root, full)
        .replace(/[\\/]/g, "-")
        .replace(/\.html$/, "");
      pages[key] = full;
    }
  }
  return pages;
}

export default defineConfig({
  build: { rollupOptions: { input: findPages(root) } },
});
