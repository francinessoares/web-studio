# Leads e analytics

Formulário em produção: `src/sections/contact/lead-form.tsx` + `POST /api/leads`.

## Campos

nome · WhatsApp · tipo de negócio · serviço · mensagem opcional · origem/UTM da query

## Persistência

Hoje: Resend, se `RESEND_API_KEY` e `CONTACT_TO_EMAIL` existirem. Sem isso, a API responde 503 com orientação para WhatsApp — **não finge que salvou**.

Supabase entra quando a tabela `leads` e as envs existirem.

## Eventos

`page_view` · `form_start` · `form_submit` · `lead` · `whatsapp_click` · `cta_click`

GA4 / GTM / Pixel só com IDs reais em `NEXT_PUBLIC_*`.
