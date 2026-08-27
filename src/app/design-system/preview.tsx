"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check, Minus } from "lucide-react";

import {
  Badge,
  Button,
  Card,
  Container,
  Divider,
  Heading,
  Input,
  Link,
  Reveal,
  Section,
  Textarea,
} from "@/components/ui";
import { hoverScale, useMotionPrefs } from "@/lib/motion";

const corePalette = [
  { name: "Fundo", token: "background", hex: "#F5F3EE", className: "bg-background border-border" },
  { name: "Texto", token: "foreground", hex: "#111111", className: "bg-foreground text-background" },
  { name: "Superfície", token: "surface", hex: "#FFFFFF", className: "bg-surface border-border" },
  { name: "Superfície escura", token: "surface-dark", hex: "#151515", className: "bg-surface-dark text-dark-foreground" },
  { name: "Escuro", token: "dark", hex: "#0B0B0B", className: "bg-dark text-dark-foreground" },
  { name: "Primário", token: "primary", hex: "#CFFF00", className: "bg-primary text-primary-foreground" },
  { name: "Primário hover", token: "primary-hover", hex: "#B8E600", className: "bg-primary-hover text-primary-foreground" },
  { name: "Secundário", token: "secondary", hex: "#E8E6DF", className: "bg-secondary text-foreground" },
  { name: "Apoio", token: "muted", hex: "#77766F", className: "bg-muted text-background" },
  { name: "Borda", token: "border", hex: "#D9D7D0", className: "bg-border text-foreground" },
] as const;

const limeScale = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] as const;

const limeHex: Record<(typeof limeScale)[number], string> = {
  "50": "#F8FFE0",
  "100": "#F0FFC2",
  "200": "#E5FF85",
  "300": "#D9FF47",
  "400": "#CFFF00",
  "500": "#B8E600",
  "600": "#9FCC00",
  "700": "#7EA300",
  "800": "#5D7800",
  "900": "#3D4F00",
};

const limeBg: Record<(typeof limeScale)[number], string> = {
  "50": "bg-lime-50 text-foreground",
  "100": "bg-lime-100 text-foreground",
  "200": "bg-lime-200 text-foreground",
  "300": "bg-lime-300 text-primary-foreground",
  "400": "bg-lime-400 text-primary-foreground",
  "500": "bg-lime-500 text-primary-foreground",
  "600": "bg-lime-600 text-primary-foreground",
  "700": "bg-lime-700 text-dark-foreground",
  "800": "bg-lime-800 text-dark-foreground",
  "900": "bg-lime-900 text-dark-foreground",
};

const states = [
  { name: "Sucesso", hex: "#22C55E", className: "bg-success text-dark-foreground" },
  { name: "Atenção", hex: "#F59E0B", className: "bg-warning text-primary-foreground" },
  { name: "Erro", hex: "#EF4444", className: "bg-destructive text-dark-foreground" },
  { name: "Info", hex: "#3B82F6", className: "bg-info text-dark-foreground" },
] as const;

function Swatch({
  name,
  hex,
  className,
}: {
  name: string;
  hex: string;
  className: string;
}) {
  return (
    <div className="min-w-0">
      <div className={`flex h-[88px] items-end rounded-[8px] border p-[12px] ${className}`}>
        <span className="text-caption font-medium">{hex}</span>
      </div>
      <p className="mt-[8px] text-caption text-muted">{name}</p>
    </div>
  );
}

export function DesignSystemPreview() {
  const { reducedMotion } = useMotionPrefs();

  return (
    <main id="main-content">
      <Section tone="light" className="border-border border-b py-[48px] sm:py-[64px]">
        <Container>
          <p className="font-eyebrow text-muted">Fundação visual</p>
          <Heading level={1} className="mt-[16px] max-w-[14ch]">
            Design System
          </Heading>
          <p className="text-body-lg mt-[20px] max-w-[52ch] text-muted">
            Identidade editorial, premium e tecnológica. Lime em 5% da interface —
            CTAs, destaques e detalhes. Sem prova social fictícia.
          </p>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <Reveal>
            <Heading level={2}>Paleta</Heading>
            <p className="text-body mt-[12px] max-w-[48ch] text-muted">
              70% off-white, 25% pretos, 5% lime. Tokens via CSS variables — nunca HEX solto no componente.
            </p>
            <div className="editorial-grid mt-[40px]">
              {corePalette.map((color) => (
                <div key={color.token} className="col-span-2 sm:col-span-2 lg:col-span-2">
                  <Swatch name={color.name} hex={color.hex} className={color.className} />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-[64px]">
            <Heading level={3}>Escala lime</Heading>
            <div className="mt-[24px] grid grid-cols-2 gap-[12px] sm:grid-cols-5">
              {limeScale.map((step) => (
                <Swatch
                  key={step}
                  name={`lime-${step}`}
                  hex={limeHex[step]}
                  className={limeBg[step]}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <Reveal>
            <Heading level={2}>Tipografia</Heading>
            <p className="text-body mt-[12px] max-w-[46ch] text-muted">
              Manrope. Títulos grandes, tracking negativo, bastante ar. Lime no texto só sobre fundo escuro.
            </p>
            <div className="mt-[48px] grid gap-[32px]">
              <div>
                <p className="text-caption text-muted">H1 · 72 / 44</p>
                <Heading level={1} className="mt-[8px]">
                  Seu negócio no digital.
                </Heading>
              </div>
              <div>
                <p className="text-caption text-muted">H2 · 52 / 36</p>
                <Heading level={2} className="mt-[8px]">
                  Do posicionamento à conversão
                </Heading>
              </div>
              <div>
                <p className="text-caption text-muted">H3 · 32 / 26</p>
                <Heading level={3} className="mt-[8px]">
                  Estratégia, execução e tecnologia
                </Heading>
              </div>
              <div>
                <p className="text-caption text-muted">H4 · 24</p>
                <Heading level={4} className="mt-[8px]">
                  Presença digital com método
                </Heading>
              </div>
              <p className="text-body-lg max-w-[52ch]">
                Body large 18px. A marca transmite premium, moderna e confiável — sem visual de template.
              </p>
              <p className="text-body max-w-[52ch] text-muted">
                Body 16px. Texto de apoio e descrições. Caption 12px para labels e metadados.
              </p>
              <p className="text-body-sm max-w-[52ch] text-muted">
                Body small 14px. Complementos, notas e estados de formulário.
              </p>
              <p className="text-caption text-muted">Caption · 12px · uppercase opcional</p>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <Reveal>
            <Heading level={2}>Botões</Heading>
            <div className="mt-[32px] flex flex-wrap items-center gap-[16px]">
              <Button>Primário</Button>
              <Button variant="secondary">Secundário</Button>
              <Button disabled>Desativado</Button>
              <Button size="sm">Compacto</Button>
            </div>
            <p className="text-body-sm mt-[16px] text-muted">
              Altura 48px, radius 10px, hover / active / focus visível. Texto no lime é sempre #0B0B0B.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <Reveal>
            <Heading level={2}>Botões no escuro</Heading>
            <div className="mt-[32px] flex flex-wrap items-center gap-[16px]">
              <Button variant="dark-primary">Primário no escuro</Button>
              <Button variant="dark-secondary">Secundário no escuro</Button>
              <Button variant="dark-primary" disabled>
                Desativado
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <Reveal>
            <Heading level={2}>Cards</Heading>
            <p className="text-body mt-[12px] max-w-[48ch] text-muted">
              Editoriais, borda sutil, padding generoso. Não virar grade automática de seções.
            </p>
            <div className="editorial-grid mt-[40px]">
              <Card className="col-span-4 lg:col-span-4">
                <p className="font-eyebrow text-muted">Claro</p>
                <Heading level={4} className="mt-[12px]">
                  Card claro
                </Heading>
                <p className="text-body mt-[12px] text-muted">
                  Superfície branca, borda #D9D7D0, hover discreto.
                </p>
              </Card>
              <Card variant="dark" className="col-span-4 lg:col-span-5">
                <p className="font-eyebrow !text-neutral-400">Escuro</p>
                <Heading level={4} className="mt-[12px]">
                  Card escuro
                </Heading>
                <p className="text-body mt-[12px] text-neutral-400">
                  Ritmo visual em seções escuras. Lime só no detalhe.
                </p>
              </Card>
              <Card variant="highlight" className="col-span-4 lg:col-span-3">
                <Badge>Destaque</Badge>
                <Heading level={4} className="mt-[16px]">
                  Card destaque
                </Heading>
                <p className="text-body mt-[12px] text-muted">
                  Borda lime. Uso raro, pontual.
                </p>
              </Card>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="light" className="pt-0">
        <Container>
          <Reveal>
            <Heading level={2}>Campos</Heading>
            <div className="mt-[32px] grid max-w-[560px] gap-[16px]">
              <label className="grid gap-[8px] text-body-sm font-medium">
                Padrão
                <Input placeholder="Nome" autoComplete="name" />
              </label>
              <label className="grid gap-[8px] text-body-sm font-medium">
                Foco / hover
                <Input placeholder="E-mail" type="email" />
              </label>
              <label className="grid gap-[8px] text-body-sm font-medium">
                Erro
                <Input placeholder="Telefone" invalid aria-describedby="input-error" />
                <span id="input-error" className="text-body-sm text-destructive">
                  Informe um telefone válido.
                </span>
              </label>
              <label className="grid gap-[8px] text-body-sm font-medium text-muted">
                Desativado
                <Input placeholder="Indisponível" disabled />
              </label>
              <label className="grid gap-[8px] text-body-sm font-medium">
                Mensagem
                <Textarea placeholder="Como podemos ajudar?" />
              </label>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="light" className="pt-0">
        <Container>
          <Reveal>
            <Heading level={2}>Badges, links e divisores</Heading>
            <div className="mt-[24px] flex flex-wrap items-center gap-[12px]">
              <Badge>Lime</Badge>
              <Badge variant="neutral">Neutro</Badge>
              <Badge variant="dark">Escuro</Badge>
              <Link href="/design-system">
                Link em fundo claro
                <ArrowUpRight className="ml-[4px] size-[16px]" aria-hidden />
              </Link>
            </div>
            <Divider className="my-[32px]" />
            <p className="text-body-sm text-muted">Divisor light</p>
          </Reveal>
        </Container>
      </Section>

      <Section tone="dark">
        <Container>
          <Reveal>
            <Heading level={2}>Estados</Heading>
            <p className="text-body mt-[12px] max-w-[44ch] text-neutral-400">
              Success, warning, error e info. Não substituem o lime de marca.
            </p>
            <div className="mt-[32px] grid grid-cols-2 gap-[12px] sm:grid-cols-4">
              {states.map((state) => (
                <Swatch key={state.name} name={state.name} hex={state.hex} className={state.className} />
              ))}
            </div>
            <div className="mt-[32px] flex flex-wrap gap-[16px] text-body-sm">
              <span className="inline-flex items-center gap-[8px] text-success">
                <Check className="size-[16px]" aria-hidden />
                Enviado
              </span>
              <span className="inline-flex items-center gap-[8px] text-warning">Atenção</span>
              <span className="inline-flex items-center gap-[8px] text-destructive">Erro</span>
              <span className="inline-flex items-center gap-[8px] text-info">Informação</span>
            </div>
            <Divider tone="dark" className="my-[32px]" />
            <Link href="/design-system" tone="dark">
              Link em fundo escuro (lime)
            </Link>
          </Reveal>
        </Container>
      </Section>

      <Section tone="light">
        <Container>
          <Reveal variant="reveal">
            <Heading level={2}>Grid editorial</Heading>
            <p className="text-body mt-[12px] max-w-[48ch] text-muted">
              12 / 8 / 4 colunas. Layouts assimétricos — nem toda seção precisa da mesma estrutura.
            </p>
            <div className="editorial-grid mt-[40px]">
              <div className="col-span-4 min-h-[120px] rounded-[16px] border border-border bg-surface p-[24px] lg:col-span-7">
                <p className="font-eyebrow text-muted">7 colunas</p>
                <p className="text-body mt-[12px]">Bloco principal</p>
              </div>
              <div className="col-span-4 min-h-[120px] rounded-[16px] bg-dark p-[24px] text-dark-foreground lg:col-span-5">
                <p className="font-eyebrow !text-neutral-400">5 colunas</p>
                <p className="mt-[12px] text-[32px] leading-[1] font-bold tracking-[-1px] text-primary">
                  05
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="light" className="pt-0">
        <Container>
          <Reveal variant="fade">
            <Heading level={2}>Movimento</Heading>
            <p className="text-body mt-[12px] max-w-[48ch] text-muted">
              Fade, slide, reveal e hover. 200ms. Respeita prefers-reduced-motion.
            </p>
            <div className="mt-[32px] flex flex-wrap gap-[16px]">
              <motion.div
                className="rounded-[10px] border border-border bg-surface px-[24px] py-[16px]"
                {...(reducedMotion ? {} : hoverScale)}
              >
                Escala no hover
              </motion.div>
              <span className="inline-flex items-center gap-[8px] text-body-sm text-muted">
                <Minus className="size-[16px]" aria-hidden />
                Sem bounce, sem neon
              </span>
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section tone="dark" className="py-[80px] lg:py-[120px]">
        <Container>
          <p className="font-eyebrow !text-neutral-400">Seção escura</p>
          <Heading level={2} className="mt-[16px] max-w-[16ch]">
            Ritmo claro e escuro
          </Heading>
          <p className="text-body-lg mt-[20px] max-w-[46ch] text-neutral-400">
            Alternar #F5F3EE e #0B0B0B cria o pulso da página. Lime só no CTA e no número.
          </p>
          <Button variant="dark-primary" className="mt-[32px]">
            CTA no escuro
          </Button>
        </Container>
      </Section>
    </main>
  );
}
