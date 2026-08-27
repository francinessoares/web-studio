# AGENTS — Web Studio

Registro dos agentes deste site comercial (parceria). Não é EvuFlow.

## Constituição (suprema)

Obrigatória para todos os agentes.

| Artefato | Path |
| --- | --- |
| Documento canônico | `docs/PRODUCT.md` |
| Knowledge | `.cursor/knowledge/product.md` |
| Funil | `.cursor/knowledge/funnel.md` |
| Rule | `.cursor/rules/product-constitution.mdc` |
| Stack lock | `.cursor/rules/stack.mdc` |

UI: **Português (Brasil)**. Conversão primeiro. Não parecer portfólio nem agência genérica.

## Como usar

1. Classificar a requisição (Orchestrator)
2. Ler `.cursor/agents/orchestrator/AGENT.md`
3. Carregar `docs/PRODUCT.md` + skills/knowledge do domínio
4. Atuar como **1 primário** + **0–3 colaboradores**
5. Aplicar `rules/*.mdc`
6. Gate: `qa-performance` + stack lock + constituição

## Agentes

| ID | Path | Domínio |
| --- | --- | --- |
| orchestrator | `agents/orchestrator/AGENT.md` | Roteamento |
| architect | `agents/architect/AGENT.md` | Pastas, padrões, deps, rotas |
| ui-ux-designer | `agents/ui-ux-designer/AGENT.md` | Visual editorial, grid, a11y |
| frontend-engineer | `agents/frontend-engineer/AGENT.md` | Next.js, RSC, componentes |
| conversion-copywriter | `agents/conversion-copywriter/AGENT.md` | Copy PT-BR, funil, preços |
| leads-analytics-engineer | `agents/leads-analytics-engineer/AGENT.md` | Form, API, UTMs, analytics |
| qa-performance | `agents/qa-performance/AGENT.md` | Qualidade, SEO, CWV |

## Skills (`.cursor/skills/`)

architecture · conversion-copy · leads-analytics · qa-performance · design-direction

## Knowledge (`.cursor/knowledge/`)

product · funnel · design-direction · architecture · leads

## Ativação automática

| Mecanismo | Arquivo | Efeito |
| --- | --- | --- |
| Rule alwaysApply | `rules/orchestrator.mdc` | Classifica e roteia toda mensagem |
| Rule alwaysApply | `rules/product-constitution.mdc` | Identidade, funil, anti-padrões |
| Rule alwaysApply | `rules/stack.mdc` | Stack permitida / proibida |
| Rule alwaysApply | `rules/definition-of-done.mdc` | lint + test + build |
| Rule alwaysApply | `rules/coding-style.mdc` | TS, RSC, px, PT-BR, reuso |
| Hook sessionStart | `hooks.json` → `hooks/orchestrator-session.mjs` | Lembrete ao abrir a conversa |

A rule é a fonte confiável; o hook é reforço.

Ver `.cursor/README.md` para o fluxo Architect → UI/UX → Copy → Frontend → Leads → QA → Architect.
