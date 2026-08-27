#!/usr/bin/env node
/**
 * sessionStart — Orchestrator Web Studio + constituição + stack lock.
 * Saída: { "additional_context": "..." }
 */
const chunks = [];

process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => chunks.push(chunk));
process.stdin.on("end", () => {
  let session = {};
  try {
    session = JSON.parse(chunks.join("") || "{}");
  } catch {
    session = {};
  }

  const mode = session.composer_mode ?? "agent";
  const context = [
    "<web_studio_orchestrator>",
    "Workspace: Web Studio multiagente (.cursor/AGENTS.md). Nao e EvuFlow.",
    "SUPREMA: docs/PRODUCT.md · knowledge/product.md · rules/product-constitution.mdc",
    "STACK LOCK: Next.js + API routes + Supabase (quando leads) + Vercel. Sem NestJS, Docker, Redux, Turborepo, CMS, auth.",
    "AGENTES: orchestrator + architect, ui-ux-designer, frontend-engineer, conversion-copywriter, leads-analytics-engineer, qa-performance.",
    "FUNIL: trafego pago → LP → lead → WhatsApp → orçamento → venda.",
    "UI: Portugues (Brasil). Conversao primeiro. Nao parecer portfólio pessoal nem agencia generica.",
    "1) CLASSIFY 2) ROUTE 1 primario + 0-3 colaboradores 3) LOAD constituição 4) EXECUTE 5) GATE qa-performance (npm run lint / test / build)",
    "Fluxo de feature: Architect → UI/UX → Copy → Frontend → Leads → QA → Architect.",
    `Composer mode: ${mode}`,
    "Tarefas nao triviais: **Roteamento:** [primario] + [colaboradores]",
    "</web_studio_orchestrator>",
  ].join("\n");

  process.stdout.write(JSON.stringify({ additional_context: context }));
});
