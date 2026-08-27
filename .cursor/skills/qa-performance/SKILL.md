---
name: qa-performance
description: Gates Web Studio work with lint, tests, build, responsive checks, SEO, accessibility, and Core Web Vitals. Use before calling a task done, on UI changes, or when the user mentions QA, Lighthouse, SEO, a11y, or verify.
---

# QA e performance

Este repo não tem `pnpm verify`. Gate:

```bash
npm run lint
npm test
npm run build
```

Compilar ≠ concluir. Não mascarar falha.

## Checklist

- Mobile / tablet / desktop
- Links e âncoras
- Form: validação, loading, erro, sucesso
- Metadata, OG, canonical, `src/app/sitemap.ts`, `src/app/robots.ts`
- HTML semântico, contraste, teclado, aria, skip link
- Imagens (`next/image`), fontes, JS client mínimo
- Copy visível em PT-BR
- Constituição: não parece portfólio/agência template

Lighthouse em UI material. Relatar o que não foi possível verificar.
