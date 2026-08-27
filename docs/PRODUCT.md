# Constituição do produto — Web Studio

Documento supremo. Em conflito com outras regras (exceto segurança/LGPD), este arquivo prevalece.

Site comercial de uma **parceria** de crescimento digital: marketing, tráfego, gestão, sites, landing pages e automação. Não é EvuFlow. Não é portfólio pessoal. Não é agência genérica.

## Missão

Ajudar negócios a crescer no digital — presença, atração, leads e conversão. O site converte tráfego pago em conversa. Empresa **nova**: parecer profissional sem fingir histórico.

Sensação desejada: **“Nova, mas sabe exatamente o que está fazendo.”**

## Para quem

Profissionais autônomos, pequenos negócios e empresas que precisam de presença digital clara, com preço aproximado e um jeito simples de contratar.

## Funil principal

Tráfego pago → landing page → lead (formulário) → WhatsApp → orçamento → venda.

A página deve responder, sem rodeio:

1. O que fazemos
2. Para quem
3. Qual problema resolvemos
4. Qual o preço aproximado
5. Como contratar

## Identidade

Editorial + premium + digital (**Manrope**, lime `#CFFF00` em 5% da UI). Comercial, focada em conversão. Design System: `docs/DESIGN_SYSTEM.md`.

- Tipografia forte, muito espaço negativo, grid definido
- Poucas decorações, motion sutil
- Mobile first, performance e SEO desde o primeiro dia

## O que isto NÃO é

- Portfólio pessoal de desenvolvedor (stack no hero, GitHub, “sobre mim”)
- Agência de marketing genérica (jargão vazio, stock de aperto de mão, “somos apaixonados”)
- Template SaaS (excesso de cards, glass, gradientes, cores aleatórias)

Vender **benefício e resultado**, nunca a stack.

## Serviços

Marketing digital, gestão de redes, tráfego pago, sites, landing pages, gestão de presença, automação e IA. Sem tabela de preço inventada no ar: o plano fecha na conversa.

## Honestidade (obrigatória)

Empresa no começo. **Proibido** inventar clientes, logos, depoimentos, métricas, anos de mercado, cases ou certificações. Portfólio vazio usa copy transparente. Sobre espera foto e nome reais.

## Estrutura canônica da página

Hero → Problema → Solução → Serviços → Como funciona → Primeiros projetos → Por que nós → Sobre → Planos → FAQ → Formulário → CTA final

CTAs: Quero crescer / Quero falar com um especialista / WhatsApp.

## Captura de lead

Formulário: nome, WhatsApp, tipo de negócio, serviço, mensagem opcional. Validar no client e em `POST /api/leads`. Envio por Resend quando as envs existirem. UTMs na query. GA4/GTM/Pixel só com IDs reais.

## Linguagem

Toda a UI em **português (Brasil)**. Tom direto, comercial, confiável. Sem inglês para o visitante. Sem tom de portfólio (“eu fiz”, “minha stack”).

## Stack (lock)

Permitido: Next.js, TypeScript, Tailwind, shadcn quando ajudar, Lucide, Framer Motion, rotas de API do Next.js, Supabase/PostgreSQL, GA4, GTM, Meta Pixel, Vercel.

Formulários: React Hook Form + Zod (leads). Supabase quando a persistência estiver configurada.

Proibido: NestJS, backend separado, Docker, Redux, microfrontends, Turborepo, CMS complexo, autenticação, libs sem necessidade.

Detalhe: `.cursor/knowledge/architecture.md` · `.cursor/rules/stack.mdc`

## Princípios de execução

- Conversão primeiro
- Componentes reutilizáveis; código simples; sem abstração prematura
- Não criar arquivo se dá para estender o existente
- Não mudar a stack sem aprovação
- Avaliar complexidade antes de implementar
- Espaçamento e tipografia em **px** (sem `rem`)

## Gate antes de ship

- Intuitiva para um leigo?
- Responde o que / para quem / como ajuda / como contratar?
- Parece profissional e honesta (sem prova social falsa)?
- Copy 100% PT-BR?
- Mobile / tablet / desktop?
- SEO, metadados, OG, sitemap, robots?
- Formulário com validação e estado de erro/sucesso?
- `npm run lint` · `npm test` · `npm run build` verdes?

Se qualquer item for não → revisar. Compilar não é concluir.
