# keithmerrill.com

Personal site for Keith Merrill — senior software engineer working in 3D
graphics, GPUs, games, and Apple platforms.

Built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and
react-three-fiber. The home page hero renders a procedural L-System, a nod to
the undergraduate thesis listed under Projects.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Layout

| Path                      | Purpose                                              |
| ------------------------- | ---------------------------------------------------- |
| `app/`                    | Routes, root layout, global styles, metadata files    |
| `app/opengraph-image.tsx` | Social share card, generated at build time by `next/og` |
| `components/`             | `Nav`, `ProjectCard`, and the L-System hero           |
| `data/projects.ts`        | Project entries rendered by `/projects`               |
| `lib/lsystem.ts`          | L-System grammar and geometry generation              |

## Deployment

Hosted on Vercel and served at [keithmerrill.com](https://keithmerrill.com).
Pushes to `main` deploy to production; every other branch and pull request gets
its own preview URL. DNS is managed at the registrar (GoDaddy) and points at
Vercel.

Every route prerenders as static content, so the site can also be served from
any static host if that ever becomes useful — see the Next.js
[static export](https://nextjs.org/docs/app/guides/static-exports) guide.
