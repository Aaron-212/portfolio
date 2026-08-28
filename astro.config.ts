import mdx from "@astrojs/mdx";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ar212.com",
  output: "static",
  outDir: "./build",
  publicDir: "./static",
  integrations: [mdx(), icon()],
  vite: {
    plugins: [
      tailwindcss(),
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/lib/paraglide",
        strategy: ["preferredLanguage", "baseLocale"]
      })
    ]
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "light-plus",
        dark: "dark-plus"
      }
    }
  }
});
