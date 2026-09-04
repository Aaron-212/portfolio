import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import icon from "astro-icon";
import mermaid from "astro-mermaid";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aaron212.com",
  output: "static",
  outDir: "./build",
  publicDir: "./static",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-cn"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    mdx(),
    mermaid({
      autoTheme: true
    }),
    sitemap(),
    icon()
  ],
  vite: {
    plugins: [
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        emitTsDeclarations: false,
        strategy: ["url", "globalVariable", "baseLocale"],
        urlPatterns: [
          {
            pattern: "/:path(.*)?",
            localized: [
              ["en", "/:path(.*)?"],
              ["zh-cn", "/zh-cn/:path(.*)?"]
            ]
          }
        ]
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
