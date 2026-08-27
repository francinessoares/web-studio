# Web Studio

Fundação do estúdio de Francine Soares para criação de sites de clientes. Projeto em Next.js, com a mesma stack e convenções do portfólio — sem copiar o conteúdo de marketing.

URL de produção (placeholder até o domínio próprio): https://web-studio.vercel.app

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **shadcn/ui** (Base UI, estilo `base-nova`)
- **Framer Motion**
- **Lucide** e **react-icons**
- **Vitest**
- **Resend** (preparado para formulário de contato)

## Como executar

Instale as dependências:

```bash
npm install
```

Copie as variáveis de ambiente:

```bash
copy .env.example .env.local
```

Suba o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação ficará em [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção
npm run start      # servidor de produção
npm run lint       # ESLint
npm test           # Vitest
npm run test:watch # Vitest em modo watch
```

## Estrutura

```text
src/app         rotas, layout e estilos globais
src/components  chrome do site, header, footer
src/sections    hero, serviços e contato da home
src/config      site e navegação
src/lib         utilitários, SEO e motion
src/data        conteúdo estático
src/hooks       hooks de cliente
```

## Convenções

- Copy da interface em português (Brasil)
- Espaçamento e tipografia customizados em `px` (sem `rem`)
- Tema escuro, acento violeta `#a855f7`, superfície `#07070a`
- `overflow-x: clip` em `html` e `body` (evita barra dupla de rolagem)

## Variáveis de ambiente

Veja `.env.example`. Em produção, defina `NEXT_PUBLIC_SITE_URL` com o domínio canônico.
