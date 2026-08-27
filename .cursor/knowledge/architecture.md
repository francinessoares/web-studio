# Arquitetura

App Next.js 16 único (sem monorepo, sem Nest, sem Docker). Deploy Vercel.

## Pastas atuais (usar)

```
src/app            rotas, layout, sitemap, robots, API futura
src/components     chrome (layout/, skip-to-content)
src/sections       hero, serviços, contato da home
src/config         site.ts, navigation.ts
src/data           conteúdo estático (services.ts)
src/hooks          hooks de cliente
src/lib            seo, motion, utils
```

Não mass-migrar para `features/` agora.

## Pastas-alvo (criar só quando a feature exigir)

`src/features` · `src/schemas` · `src/services` · `src/types`

Primeiro uso: leads (schema Zod, API `/api/leads`, Resend). Supabase quando houver tabela e env.

## API

Somente `src/app/api/**/route.ts`. Validar no handler. Sem backend separado.

## Supabase

Ainda não há cliente. Quando leads existirem: server-side na API route, service role só no server, anon no client se precisar. Sem secrets no frontend.

## Quando criar arquivo

1. Dá para estender um existente? Estenda.
2. É seção da home? `src/sections/<nome>/`.
3. É chrome? `src/components/`.
4. É captura/API? aí sim `schemas` / `services` / `app/api`.

Deps novas: Architect + `package.json`. RHF e Zod instalados. Supabase JS ainda não.
