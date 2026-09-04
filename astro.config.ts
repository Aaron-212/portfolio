import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import icon from "astro-icon";
import mermaid from "astro-mermaid";
import { defineConfig } from "astro/config";
import { baseLocale, locales } from "./i18n.config";

export default defineConfig({
  site: "https://aaron212.com",
  output: "static",
  outDir: "./build",
  publicDir: "./static",
  i18n: {
    defaultLocale: baseLocale,
    locales,
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    mdx(),
    mermaid({
      autoTheme: true
    }),
    sitemap({
      filter: (page) => !new URL(page).pathname.endsWith("/404/")
    }),
    icon()
  ],
  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        emitTsDeclarations: false,
        strategy: ["url", "globalVariable", "baseLocale"],
        trailingSlash: "always"
      }),
      tailwindcss()
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
