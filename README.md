# Vortexa

Site institucional da **Vortexa** (repositório `web-studio`): parceria de **crescimento digital** — marketing, tráfego, gestão, sites, páginas de captura e automação.

O projeto é um **Next.js** único, com foco em conversão, performance, SEO e uma arquitetura simples, pronta para evoluir sem inventar histórico, clientes ou métricas.

A Vortexa une **estratégia, marketing e tecnologia** para profissionais e empresas terem presença digital clara e um jeito simples de contratar.

**Produção:** https://web-studio.vercel.app

---

## Sobre a Vortexa

Empresa nova. A proposta é parecer profissional sem fingir anos de mercado: marketing digital e engenharia de software no mesmo time, para o negócio crescer no digital.

O site converte tráfego em conversa (formulário e WhatsApp). O plano e o valor fecham na conversa — não há tabela inventada no ar.

### Serviços (no ar hoje)

- Marketing digital
- Gestão de redes sociais
- Tráfego pago (Meta Ads e Google Ads)
- Criação de sites
- Páginas de captura
- Automação e IA

---

## Stack

- **Next.js 16** — App Router
- **React 19**
- **TypeScript** — strict
- **Tailwind CSS v4**
- **Framer Motion** — motion
- **Lucide** — ícones
- **React Hook Form + Zod** — formulário de leads
- **Vitest** — testes
- **Resend** — e-mail do formulário (quando as envs existem)
- **Vercel** — deploy

---

## O que o site faz

- Landing institucional (uma página, seções por âncora)
- Serviços, processo, portfólio (EvuFlow), por que nós, sobre, planos e FAQ
- Formulário de contato (`POST /api/leads`) com validação, campo isca e limite de tentativas
- SEO: metadados, Open Graph, JSON-LD, sitemap e robots
- Design responsivo, skip-to-content e alvos de toque de 44px
- Analytics (GA4 / GTM / Pixel) só com IDs reais

---

## Como executar

### 1. Instale as dependências

```bash
npm install
```

### 2. Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

No Windows:

```bash
copy .env.example .env.local
```

Preencha o que for usar em `.env.local`. Sem `RESEND_API_KEY` e `CONTACT_TO_EMAIL`, o formulário responde 503 com orientação honesta — não finge que enviou.

### 3. Inicie o servidor

```bash
npm run dev
```

A aplicação fica em:

```text
http://localhost:3000
```

---

## Scripts

```bash
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção
npm run start      # servidor de produção
npm run lint       # ESLint
npm test           # testes
npm run test:watch # testes em modo watch
```

---

## Estrutura

```text
src/
├── app/           # rotas, layout, sitemap, robots, API
├── components/    # chrome, UI, SEO
├── sections/      # blocos da Home
├── config/        # site e navegação
├── lib/           # SEO, hash, analytics, motion
├── data/          # conteúdo estático
├── schemas/       # Zod dos leads
└── hooks/         # hooks de cliente
```

Constituição e design system: `docs/PRODUCT.md` · `docs/DESIGN_SYSTEM.md`.

---

## Convenções

- Interface em **português (Brasil)** — inglês só em código
- TypeScript **strict**
- Espaçamento e tipografia em **px** (sem `rem`)
- Fundo cream `#F5F3EE`, texto `#111111`, seções escuras `#0B0B0B`
- Destaque lima `#CFFF00` (~5% da UI) — lima como texto só em fundo escuro
- Mobile first, layout responsivo
- `overflow-x: clip` no documento
- Conteúdo em `src/data`, configuração em `src/config`, apresentação em `src/sections`
- Sem prova social fictícia (clientes, depoimentos, métricas, cases inventados)

---

## Variáveis de ambiente

Documentadas em `.env.example`.

```env
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Em produção, `NEXT_PUBLIC_SITE_URL` deve ser o domínio canônico. Sem isso, sitemap e Open Graph caem no placeholder da Vercel.

Opcionais: WhatsApp, e-mail, Instagram, LinkedIn, Resend, GTM/GA4/Pixel, verificação do Search Console.

---

## Deploy

O projeto sobe na **Vercel** a partir da branch `master`.

Antes de publicar:

- `NEXT_PUBLIC_SITE_URL` com o domínio final
- Resend (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`)
- WhatsApp e redes, se forem aparecer na UI
- IDs reais de analytics, se houver
- Enviar `https://seu-dominio/sitemap.xml` no Search Console

O npm 12 exige scripts de install autorizados. Já estão em `package.json` (`allowScripts`: esbuild, sharp, unrs-resolver).

---

## Como a Vortexa atua

### Projetos diretos

Presença, marketing, tráfego e site para o negócio do cliente — do alinhamento à publicação.

### No mesmo time

Quem anuncia e quem constrói o destino conversam. O anúncio não cai numa página que não converte.

### Sob medida

O desenho parte do contexto (clínica, consultoria, comércio). Não há pacote genérico fingindo servir para todo mundo.

---

## Objetivo

Aproximar marketing e tecnologia para o negócio crescer no digital: presença clara, captura de contato e um próximo passo óbvio.

Não é portfólio pessoal, não é app de academia, não é gerador de fichas.
