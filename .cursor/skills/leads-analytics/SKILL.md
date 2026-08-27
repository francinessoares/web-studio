---
name: leads-analytics
description: Designs lead capture, Zod validation, Supabase leads table, UTM attribution, and funnel events (GA4, GTM, Meta Pixel). Use when building forms, API routes, WhatsApp tracking, analytics, or when the user mentions lead, UTM, Pixel, or formulário.
---

# Leads e analytics

**LOAD:** `.cursor/knowledge/leads.md` · `.cursor/rules/stack.mdc`

Ainda sem RHF/Zod/Supabase no `package.json`. Não implementar sem Architect + install aprovado.

## Form

nome · WhatsApp · tipo de negócio · serviço · mensagem opcional

## Persistência

Tabela `leads`: id, name, phone, business_type, service, message, source, campaign, medium, landing_page, created_at + UTMs.

Validar frontend **e** `src/app/api/` route. Minimizar PII.

## Eventos

`page_view` · `form_start` · `form_submit` · `lead` · `whatsapp_click` · `cta_click`

GA4 / GTM / Meta Pixel. Sem secrets no client.
