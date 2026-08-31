# Repository Guidelines

## Project Structure & Module Organization

This is a static Astro portfolio built with TypeScript, Tailwind CSS, and MDX.

- `src/pages/` contains file-based Astro pages. Nested directories map to URLs (for example, `src/pages/blog/[slug].astro`).
- `src/components/` and `src/lib/components/` hold reusable Astro UI components; `src/content/` contains Markdown/MDX blog posts.
- `static/` is for public, unprocessed assets. Global styles live in `src/app.css`.

## Build, Test, and Development Commands

The project targets `node@26` and uses `aube@2.2.0` (see `mise.toml`). Always execute `aube`, `aubr` (for package scripts written in package.json) and `aubx` (for tooling) through `mise` using the form `mise exec -- aube ...`; install dependencies with `mise exec -- aube install`.

- `mise exec -- aubr dev` starts the Astro development server.
- `mise exec -- aubr check` runs Astro's type checks.
- `mise exec -- aubr lint` checks Prettier formatting and ESLint rules.
- `mise exec -- aubr format` applies Prettier formatting across the repository.
- `mise exec -- aubr build` produces the static production site in `build/`.
- `mise exec -- aubr preview` serves the production build locally.

Run `mise exec -- aubr check`, `mise exec -- aubr lint`, and `mise exec -- aubr build` before opening a pull request. There is no dedicated automated test suite yet; add focused tests when introducing logic that needs regression coverage.

## Coding Style & Naming Conventions

Use TypeScript for non-trivial logic and Astro components for UI. Follow Prettier’s existing formatting (two-space indentation, single quotes, and trailing commas where generated). Let Tailwind classes be ordered by the Prettier Tailwind plugin; do not hand-sort them.

Prefer Flexbox layouts when possible. Follow these Tailwind UI conventions:

- Use `text-5xl font-medium lg:text-6xl` for large titles.
- Use `text-lg font-light text-slate-700 dark:text-slate-300 lg:text-xl` for subtitles.
- Use Tailwind CSS Typography’s `prose` class for large blocks of text.

Name components in PascalCase (`PostLayout.astro`), use Astro route files (`index.astro`, `[slug].astro`), and name utility modules in lowercase (`index.ts`). Keep post filenames URL-safe and lowercase, such as `hello.md`; include frontmatter with at least `title` and `date`.

## Commit & Pull Request Guidelines

Recent history uses short, imperative, lowercase subjects such as `fix import`, `deploy test`, and `Migrate to Astro.js`. Keep commits narrowly scoped and describe the user-visible change.

Pull requests should summarize the change, link relevant issues when available, and include screenshots for visual changes. Confirm the validation commands above pass and avoid committing generated output (`build/` or `.astro/`).
