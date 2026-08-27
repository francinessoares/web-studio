---
name: architecture
description: Organizes Next.js folders, API routes, Supabase boundaries, and dependency checks for the Web Studio commercial site. Use when changing structure, routes, creating files, adding packages, or when the user mentions architecture, folders, Supabase, or overengineering.
---

# Architecture

**LOAD:** `docs/PRODUCT.md` · `.cursor/knowledge/architecture.md` · `.cursor/rules/stack.mdc`

## Antes de criar arquivo

1. Procurar reuso em `src/sections/`, `src/components/`, `src/lib/`, `src/data/`, `src/config/`
2. Seção da home → `src/sections/<nome>/`
3. Chrome → `src/components/`
4. Lead/API → criar `src/schemas/`, `src/services/`, `src/app/api/` (primeiro uso de `features/` se o domínio crescer)
5. **Não** mass-renomear `sections`/`data` agora

## Deps

Ler `package.json`. RHF, Zod e `@supabase/supabase-js` **não** estão instalados. Só instalar ao implementar leads, com aprovação.

Proibido: NestJS, Docker, Redux, Turborepo, CMS, auth, backend separado.

## Mudança grande

Analisar → impacto → propor recorte mínimo → implementar. API só em `src/app/api/**/route.ts`.
