# Repository Guidelines

## Project Structure & Module Organization

This is a static SvelteKit portfolio built with Vite, TypeScript, Tailwind CSS, mdsvex, and Paraglide i18n.

- `src/routes/` contains file-based pages and route load functions. Nested directories map to URLs (for example, `src/routes/blog/[slug]/`).
- `src/lib/components/` holds reusable Svelte UI components; `src/lib/posts/` contains Markdown/SVX blog posts and post-loading logic.
- `src/lib/paraglide/` is generated localization output—do not edit it directly.
- `messages/en.json` and `messages/zh-cn.json` are translation sources; `project.inlang/` contains i18n configuration.
- `static/` is for public, unprocessed assets. Global styles live in `src/app.css`.

## Build, Test, and Development Commands

The project targets Node 26 and uses `nub` (see `mise.toml` and `nub.lock`). Install dependencies with `nub install`.

- `nub run dev` starts the Vite development server.
- `nub run check` syncs SvelteKit types and runs `svelte-check`.
- `nub run lint` checks Prettier formatting and ESLint rules.
- `nub run format` applies Prettier formatting across the repository.
- `nub run build` produces the static production site in `build/`.
- `nub run preview` serves the production build locally.

Run `nub run check && nub run lint && nub run build` before opening a pull request. There is no dedicated automated test suite yet; add focused tests when introducing logic that needs regression coverage.

## Coding Style & Naming Conventions

Use TypeScript for non-trivial logic and Svelte 5 components for UI. Follow Prettier’s existing formatting (two-space indentation, single quotes, and trailing commas where generated). Let Tailwind classes be ordered by the Prettier Tailwind plugin; do not hand-sort them.

Name components in PascalCase (`PostLayout.svelte`), route files with SvelteKit conventions (`+page.svelte`, `+page.ts`), and utility modules in lowercase (`index.ts`). Keep post filenames URL-safe and lowercase, such as `hello.md`; include frontmatter with at least `title` and `date`.

## Commit & Pull Request Guidelines

Recent history uses short, imperative, lowercase subjects such as `fix import`, `deploy test`, and `Migrate to nub.js`. Keep commits narrowly scoped and describe the user-visible change.

Pull requests should summarize the change, note any translation or content updates, link relevant issues when available, and include screenshots for visual changes. Confirm the validation commands above pass and avoid committing generated output (`build/`, `.svelte-kit/`, or `src/lib/paraglide/`).
