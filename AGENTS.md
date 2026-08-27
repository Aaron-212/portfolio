# Repository Guidelines

## Project Structure & Module Organization

This is a static Astro portfolio built with TypeScript, Tailwind CSS, MDX, and Paraglide i18n.

- `src/pages/` contains file-based Astro pages. Nested directories map to URLs (for example, `src/pages/blog/[slug].astro`).
- `src/components/` and `src/lib/components/` hold reusable Astro UI components; `src/content/` contains Markdown/MDX blog posts.
- `src/lib/paraglide/` is generated localization output—do not edit it directly.
- `messages/en.json` and `messages/zh-cn.json` are translation sources; `project.inlang/` contains i18n configuration.
- `static/` is for public, unprocessed assets. Global styles live in `src/app.css`.

## Build, Test, and Development Commands

The project targets Node 26 and uses `nub` (see `mise.toml` and `nub.lock`). Install dependencies with `nub install`.

- `nub run dev` starts the Astro development server.
- `nub run check` runs Astro's type checks.
- `nub run lint` checks Prettier formatting and ESLint rules.
- `nub run format` applies Prettier formatting across the repository.
- `nub run build` produces the static production site in `build/`.
- `nub run preview` serves the production build locally.

Run `nub run check && nub run lint && nub run build` before opening a pull request. There is no dedicated automated test suite yet; add focused tests when introducing logic that needs regression coverage.

## Coding Style & Naming Conventions

Use TypeScript for non-trivial logic and Astro components for UI. Follow Prettier’s existing formatting (two-space indentation, single quotes, and trailing commas where generated). Let Tailwind classes be ordered by the Prettier Tailwind plugin; do not hand-sort them.

Name components in PascalCase (`PostLayout.astro`), use Astro route files (`index.astro`, `[slug].astro`), and name utility modules in lowercase (`index.ts`). Keep post filenames URL-safe and lowercase, such as `hello.md`; include frontmatter with at least `title` and `date`.

## Commit & Pull Request Guidelines

Recent history uses short, imperative, lowercase subjects such as `fix import`, `deploy test`, and `Migrate to nub.js`. Keep commits narrowly scoped and describe the user-visible change.

Pull requests should summarize the change, note any translation or content updates, link relevant issues when available, and include screenshots for visual changes. Confirm the validation commands above pass and avoid committing generated output (`build/`, `.astro/`, or `src/lib/paraglide/`).
