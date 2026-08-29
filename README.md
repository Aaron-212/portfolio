# Portfolio

Static portfolio and blog built with Astro and Tailwind CSS.

## Development

```sh
nub run dev
```

Run `nub run check` for type checks and `nub run build` for a production build.

## Cloudflare deployment

Cloudflare Workers Static Assets is the recommended deployment target. The
repository's `wrangler.jsonc` serves the static Astro output from `build/`, uses
the generated `404.html` for missing pages, and preserves Astro's trailing-slash
behavior.

Authenticate once with `wrangler login`, then deploy with:

```sh
mise exec -- nub run deploy:workers
```

To use Cloudflare Pages instead, connect the repository in the Cloudflare
dashboard with these build settings:

- Build command: `npm run build`
- Build output directory: `build`

For a Pages Direct Upload project, deploy from the command line with:

```sh
mise exec -- nub run deploy:pages
```
