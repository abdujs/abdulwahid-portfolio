# Portfolio

Personal site with Markdown-powered blog and CV, shadcn/ui components, and light motion.

## Stack
- Next.js App Router (TypeScript)
- Tailwind v4 + shadcn/ui
- Framer Motion for micro-interactions
- MDX content for blog and CV
- Dockerfile + CI (lint/type-check) + Vercel deploy

## Local development
```bash
npm install
npm run dev
```

## Content
- Blog posts: `content/blog/*.mdx`
- CV: `content/cv/my-resume.mdx`

## Useful scripts
- `npm run dev` – start the dev server
- `npm run lint` – eslint + next lint
- `npm run type-check` – tsconfig build for types
- `npm run build` – production build

## Deployment
- Target: Vercel (Dockerfile available for other platforms)
- CI: lint + type-check on push
