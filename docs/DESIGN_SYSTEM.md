# Design System — Web Studio

Fonte de verdade no código: `src/app/globals.css` (`:root` + `@theme`). Componentes: `src/components/ui/`.

Posicionamento: editorial + premium + digital + tecnológica. Empresa nova de crescimento digital. Sem prova social fictícia (clientes, logos, depoimentos, métricas).

## Cores

Proporção: **70%** off-white / neutros · **25%** pretos · **5%** lime.

Lime não domina. Uso: CTAs, indicadores, hover, underlines, chips. Texto sobre lime: sempre `#0B0B0B`. Lime como texto só em fundo escuro (contraste). Em fundo claro, texto é preto (`#111111`) — nunca lima.

| Token | Hex | Uso |
| --- | --- | --- |
| `--background` | `#F5F3EE` | Seção clara |
| `--foreground` | `#111111` | Texto |
| `--surface` | `#FFFFFF` | Cards, inputs |
| `--surface-dark` | `#151515` | Card escuro |
| `--dark` | `#0B0B0B` | Seção escura |
| `--primary` | `#CFFF00` | CTA, acento |
| `--primary-hover` | `#B8E600` | Hover do CTA |
| `--primary-foreground` | `#0B0B0B` | Texto no lime |
| `--secondary` | `#E8E6DF` | Superfície de apoio |
| `--muted` | `#77766F` | Texto secundário |
| `--border` | `#D9D7D0` | Bordas claras |
| `--border-dark` | `#303030` | Bordas escuras |
| `--success` | `#22C55E` | Estado ok |
| `--warning` | `#F59E0B` | Alerta |
| `--destructive` | `#EF4444` | Erro |
| `--info` | `#3B82F6` | Informação |

Escala lime: `--lime-50` … `--lime-900`. Neutros: `--neutral-50` … `--neutral-950`.

Não usar `bg-[#CFFF00]`. Preferir `bg-primary`.

## Tipografia

**Manrope** (`next/font/google`, `--font-manrope`). Tamanhos em **px**.

| Papel | Desktop | Mobile | Line-height | Peso |
| --- | --- | --- | --- | --- |
| H1 | 72px | 44px | 0.95–1.05 | 700 |
| H2 | 52px | 36px | 1.05–1.15 | 700 |
| H3 | 32px | 26px | 1.15 | 700 |
| H4 | 24px | 24px | 1.2 | 600 |
| Body large | 18px | 18px | 1.6 | 400 |
| Body | 16px | 16px | 1.6 | 400 |
| Body small | 14px | 14px | 1.5 | 400 |
| Caption | 12px | 12px | 1.4 | 400–500 |

## Layout

- Container: `--layout-max` **1280px**
- Gutter: 20px mobile / 32px tablet+
- Grid editorial: 4 / 8 / 12 colunas (`.editorial-grid`)
- Espaçamento: múltiplos de 4px
- Seção clara: `bg-background` · Seção escura: `bg-dark`

## Radius e sombra

- 8px pequenos · 10px inputs/botões · 16px cards · 20px maiores
- Sombras: `--shadow-sm` e `--shadow-md` na maior parte; `--shadow-lg` raro

## Componentes (`src/components/ui/`)

Button · Card (`light` / `dark` / `highlight`) · Input · Textarea · Badge · Container · Section · Heading · Link · Divider · Reveal

Ícones: Lucide. Motion: Framer (`src/lib/motion.ts`), 200ms, `prefers-reduced-motion`.

## Preview

`/design-system` — `noindex`. Sem navbar/footer do site.

## Evitar

SaaS genérico, glass, gradiente demais, neon, cards em toda seção, HEX solto, lime em fundos grandes, emojis como ícone.
