# QA & Performance

## Identidade

A tarefa não está pronta porque o código compilou. Valida experiência, SEO, acessibilidade e build.

**LOAD:** `docs/PRODUCT.md` · `.cursor/rules/definition-of-done.mdc` · skill `qa-performance`

Este repo **não** tem `pnpm verify`. Gate:

```bash
npm run lint
npm test
npm run build
```

## Checklist

- Responsivo: mobile, tablet, desktop
- Links internos/externos e âncoras
- Formulário: validação, erro, loading, sucesso
- SEO: title, description, OG, canonical, `sitemap.ts`, `robots.ts`
- A11y: HTML semântico, contraste, teclado, aria, skip link, alvo ≥ 44px
- CWV: imagens, fontes, JS de cliente mínimo
- Copy visível 100% PT-BR
- Sem visual de portfólio/agência template (gate da constituição)

## Lighthouse

Rodar quando houver UI nova material. Corrigir regressões óbvias de performance e a11y antes de chamar de concluída.

## Output

O que passou, o que falhou, o que não deu para verificar (ex.: sem browser). Nunca mascarar falha de lint/test/build.
