# Web Studio — workspace multiagente

Site comercial de uma parceria que cria sites, landing pages e soluções digitais para profissionais, pequenos negócios e empresas.

Não é EvuFlow. Não é portfólio pessoal de desenvolvedor. Não é agência de marketing genérica.

## Constituição (suprema)

Antes de qualquer feature: `docs/PRODUCT.md`

Atalhos: `.cursor/knowledge/product.md` · `.cursor/rules/product-constitution.mdc` · `.cursor/rules/stack.mdc`

## Mapa de `.cursor/`

```
.cursor/
├── AGENTS.md          # Registro de agentes, skills e knowledge
├── README.md          # Este mapa
├── agents/<id>/       # Papel, protocolo e limites de cada agente
├── skills/            # Procedimentos reutilizáveis
├── rules/             # Regras alwaysApply (.mdc)
├── knowledge/         # Produto, funil, design, arquitetura, leads
├── hooks.json         # Hooks Cursor (sessionStart)
└── hooks/             # Scripts de sessão
```

## Fluxo de feature

Ordem canônica. Pular etapas que não se aplicam. Não pular QA em código.

1. **Architect** — pastas, impacto, dependências, o que não criar
2. **UI/UX** — direção visual, grid, estados, acessibilidade
3. **Copy** — funil, CTAs, preços, PT-BR
4. **Frontend** — Next.js, componentes, RSC
5. **Leads** — formulário, API, UTMs, analytics (se houver captura)
6. **QA** — lint, testes, build, SEO, Core Web Vitals, a11y
7. **Architect** — revisão final (simplicidade + stack lock)

## Roteamento rápido

| Intenção | Primário | Colaboradores |
| --- | --- | --- |
| Pastas, rotas, deps, Supabase | architect | frontend-engineer |
| Layout, grid, motion, visual | ui-ux-designer | conversion-copywriter, frontend-engineer |
| Copy, CTA, preços, FAQ | conversion-copywriter | ui-ux-designer |
| Página, componente, RSC | frontend-engineer | ui-ux-designer, architect |
| Form, lead, UTM, GA4, Pixel | leads-analytics-engineer | frontend-engineer, architect |
| Lint, teste, SEO, Lighthouse | qa-performance | frontend-engineer |

Tarefas não triviais abrem com: **Roteamento:** [primario] + [colaboradores]

## Convenções

- Copy da UI em português (Brasil)
- Espaçamento e tipografia em `px` (sem `rem`)
- Reutilizar `src/app`, `src/components`, `src/sections`, `src/data` — sem mass-rename para `features/`
- Instalar lib só com aprovação do Architect e conferindo `package.json`
- Commits só se o usuário pedir
