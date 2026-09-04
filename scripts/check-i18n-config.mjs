import { readFile } from "node:fs/promises";
import { baseLocale, locales } from "../i18n.config.ts";

const projectSettings = JSON.parse(await readFile(new URL("../project.inlang/settings.json", import.meta.url), "utf8"));
const errors = [];

if (projectSettings.baseLocale !== baseLocale) {
  errors.push(`base locale differs: app=${baseLocale}, inlang=${projectSettings.baseLocale}`);
}

if (JSON.stringify(projectSettings.locales) !== JSON.stringify(locales)) {
  errors.push(`locales differ: app=${JSON.stringify(locales)}, inlang=${JSON.stringify(projectSettings.locales)}`);
}

if (errors.length > 0) {
  console.error(`i18n configuration is out of sync:\n- ${errors.join("\n- ")}`);
  process.exitCode = 1;
} else {
  console.log(`i18n configuration is synchronized: ${locales.join(", ")}`);
}
