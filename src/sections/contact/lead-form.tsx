"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { fieldControlClass, Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";
import { trackEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { leadSchema } from "@/schemas/lead";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  const form = useForm({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      businessType: "",
      service: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    setStatus("idle");
    trackEvent({ event: "form_submit", label: values.service });

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          landingPage: window.location.pathname,
          source: new URLSearchParams(window.location.search).get("utm_source") ?? undefined,
          medium: new URLSearchParams(window.location.search).get("utm_medium") ?? undefined,
          campaign: new URLSearchParams(window.location.search).get("utm_campaign") ?? undefined,
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        setStatus("error");
        setServerMessage(
          payload?.message ??
            "Não foi possível enviar agora. Tente de novo ou escreva para o e-mail da página.",
        );
        return;
      }

      trackEvent({ event: "lead", label: values.service });
      setStatus("ok");
      setServerMessage(
        payload?.message ?? "Recebemos seu pedido. Retornamos em breve.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setServerMessage(
        "Não foi possível enviar agora. Tente de novo ou escreva para o e-mail da página.",
      );
    }
  });

  const selectInvalid = Boolean(form.formState.errors.service);

  return (
    <form
      className="grid gap-[16px]"
      onSubmit={onSubmit}
      onFocusCapture={() => trackEvent({ event: "form_start" })}
      noValidate
    >
      <label className="text-body-sm grid gap-[8px] font-medium">
        Nome
        <Input
          {...form.register("name")}
          tone="dark"
          autoComplete="name"
          invalid={Boolean(form.formState.errors.name)}
        />
        {form.formState.errors.name ? (
          <span className="text-body-sm text-destructive">
            {form.formState.errors.name.message}
          </span>
        ) : null}
      </label>

      <label className="text-body-sm grid gap-[8px] font-medium">
        WhatsApp
        <Input
          {...form.register("phone")}
          tone="dark"
          inputMode="tel"
          autoComplete="tel"
          invalid={Boolean(form.formState.errors.phone)}
        />
        {form.formState.errors.phone ? (
          <span className="text-body-sm text-destructive">
            {form.formState.errors.phone.message}
          </span>
        ) : null}
      </label>

      <label className="text-body-sm grid gap-[8px] font-medium">
        Tipo de negócio
        <Input
          {...form.register("businessType")}
          tone="dark"
          placeholder="Ex.: clínica, consultoria, comércio"
          invalid={Boolean(form.formState.errors.businessType)}
        />
        {form.formState.errors.businessType ? (
          <span className="text-body-sm text-destructive">
            {form.formState.errors.businessType.message}
          </span>
        ) : null}
      </label>

      <label className="text-body-sm grid gap-[8px] font-medium">
        Serviço
        <select
          {...form.register("service")}
          aria-invalid={selectInvalid || undefined}
          className={cn(
            fieldControlClass("dark"),
            "h-[48px]",
            selectInvalid ? "border-destructive" : "border-border-dark",
          )}
        >
          <option value="" disabled>
            Selecione
          </option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        {form.formState.errors.service ? (
          <span className="text-body-sm text-destructive">
            {form.formState.errors.service.message}
          </span>
        ) : null}
      </label>

      <label className="text-body-sm grid gap-[8px] font-medium">
        Mensagem (opcional)
        <Textarea {...form.register("message")} tone="dark" />
      </label>

      <label className="sr-only" aria-hidden="true">
        Site
        <input
          {...form.register("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>

      <Button
        type="submit"
        variant="dark-primary"
        className="w-full sm:w-auto"
        disabled={form.formState.isSubmitting}
      >
        {form.formState.isSubmitting ? "Enviando…" : "Quero falar com um especialista"}
      </Button>

      {status === "ok" ? (
        <p className="text-body-sm text-success" role="status">
          {serverMessage}
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-body-sm text-destructive" role="alert">
          {serverMessage}
        </p>
      ) : null}
    </form>
  );
}
