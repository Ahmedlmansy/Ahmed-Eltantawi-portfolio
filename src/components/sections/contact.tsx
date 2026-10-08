"use client";

import { useRef, useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import contact from "@/data/contact";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "@/components/motion/stagger-container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormStatus = { kind: "idle" | "success" | "error"; message: string };

const socialIcons: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const emailJsConfigured = Boolean(serviceId && templateId && publicKey);

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>({ kind: "idle", message: "" });
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!emailJsConfigured || !serviceId || !templateId || !publicKey) {
      setStatus({
        kind: "error",
        message: "The contact form is not configured yet. See the EmailJS setup in README.md.",
      });
      return;
    }
    if (!formRef.current || pending) return;

    setPending(true);
    setStatus({ kind: "idle", message: "" });

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
        limitRate: { id: "portfolio-contact-form", throttle: 10000 },
      });
      formRef.current.reset();
      setStatus({
        kind: "success",
        message: "Thanks for reaching out. Your message was sent successfully.",
      });
    } catch (error) {
      if (error instanceof emailjs.EmailJSResponseStatus) {
        console.error("[contact] EmailJS rejected the message:", { status: error.status });
      } else {
        console.error("[contact] An unexpected EmailJS error occurred.");
      }
      setStatus({
        kind: "error",
        message:
          "Your message could not be sent. Please try again or contact Ahmed directly by email.",
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact-section" className="w-full border-t border-hairline bg-section py-24">
      <Container className="max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <FadeIn className="flex flex-col items-start lg:col-span-5">
            <p className="mb-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
              {contact.eyebrow}
            </p>
            <h2 className="mb-4 font-display-hero text-[34px] font-bold tracking-tight text-ink sm:text-[40px]">
              {contact.heading}
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-ink-secondary">
              {contact.description}
            </p>

            <StaggerContainer className="mb-8 w-full space-y-3">
              <StaggerItem>
                <ContactChannel
                  href={contact.emailHref}
                  icon={Mail}
                  label={contact.emailLabel}
                  value={contact.email}
                />
              </StaggerItem>
              <StaggerItem>
                <ContactChannel
                  href={contact.whatsappHref}
                  icon={MessageCircle}
                  label={contact.whatsappLabel}
                  value={contact.whatsapp}
                  external
                />
              </StaggerItem>
            </StaggerContainer>

            <div className="mb-3 flex items-center gap-3">
              {contact.socialLinks.map(({ label, href }) => {
                const Icon = socialIcons[label];
                if (!Icon) return null;

                return (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Ahmed's ${label} profile`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-elevated text-ink-secondary shadow-xs transition-colors hover:border-primary-light hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
                  >
                    <Icon aria-hidden="true" size={19} />
                  </a>
                );
              })}
            </div>
            <p className="text-sm leading-relaxed text-ink-muted">{contact.responseNote}</p>
          </FadeIn>

          <FadeIn className="lg:col-span-7">
            <div className="rounded-3xl border border-hairline bg-elevated p-6 shadow-xs sm:p-8 lg:p-10">
              <h3 className="font-display-hero text-[22px] font-bold text-ink">
                Send a message
              </h3>
              <p className="mb-6 mt-2 text-sm leading-relaxed text-ink-secondary">
                Share a little about what you have in mind.
              </p>

              {!emailJsConfigured && (
                <p
                  role="status"
                  className="mb-5 rounded-xl border border-sand/50 bg-sand-light/50 p-4 text-sm leading-relaxed text-ink-secondary"
                >
                  Email delivery is not configured yet. Add the three EmailJS variables listed in
                  <code className="mx-1 rounded bg-elevated px-1.5 py-0.5 font-mono text-xs">
                    .env.local.example
                  </code>
                  to <code className="font-mono text-xs">.env.local</code>, then restart the
                  development server.
                </p>
              )}

              <form ref={formRef} onSubmit={handleSubmit}>
                <StaggerContainer className="space-y-4">
                  <StaggerItem>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Your name" htmlFor="contact-name">
                        <Input
                          id="contact-name"
                          name="from_name"
                          autoComplete="name"
                          placeholder="Your name"
                          maxLength={120}
                          required
                          disabled={pending || !emailJsConfigured}
                        />
                      </Field>
                      <Field label="Work email" htmlFor="contact-email">
                        <Input
                          id="contact-email"
                          name="reply_to"
                          type="email"
                          autoComplete="email"
                          placeholder="you@company.com"
                          maxLength={254}
                          required
                          disabled={pending || !emailJsConfigured}
                        />
                      </Field>
                    </div>
                  </StaggerItem>

                  <StaggerItem>
                    <Field label="Engagement type" htmlFor="contact-type">
                      <select
                        id="contact-type"
                        name="engagement_type"
                        defaultValue={contact.engagementTypes[0]?.value}
                        required
                        disabled={pending || !emailJsConfigured}
                        className="h-12 w-full rounded-xl border border-input bg-white px-4 text-sm text-ink focus-visible:border-primary focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-sage-light/50 disabled:opacity-50"
                      >
                        {contact.engagementTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </StaggerItem>

                  <StaggerItem>
                    <Field label="Project scope & timeline" htmlFor="contact-message">
                      <Textarea
                        id="contact-message"
                        name="message"
                        placeholder="Tell me about your goals, platforms, or timeline..."
                        rows={5}
                        maxLength={4000}
                        required
                        disabled={pending || !emailJsConfigured}
                      />
                    </Field>
                  </StaggerItem>

                  <StaggerItem>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={pending || !emailJsConfigured}
                      className="h-14 w-full rounded-xl text-sm"
                    >
                      <Send aria-hidden="true" size={18} />
                      {pending ? "Sending…" : "Send inquiry"}
                    </Button>
                  </StaggerItem>
                </StaggerContainer>

                <p
                  aria-live="polite"
                  role={status.kind === "error" ? "alert" : "status"}
                  className={`min-h-5 text-sm ${
                    status.kind === "success"
                      ? "text-primary"
                      : status.kind === "error"
                        ? "text-destructive"
                        : "text-ink-muted"
                  }`}
                >
                  {status.message}
                </p>
              </form>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="font-mono text-[11px] font-semibold uppercase tracking-wider text-ink-secondary"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function ContactChannel({
  href,
  icon: Icon,
  label,
  value,
  external = false,
}: {
  href: string;
  icon: LucideIcon;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-hairline bg-elevated p-4 shadow-xs transition-colors hover:border-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-light"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary-light bg-primary-surface text-primary">
        <Icon aria-hidden="true" size={21} />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-ink-muted">
          {label}
        </span>
        <span className="truncate font-headline-sm text-[15px] font-bold text-ink">{value}</span>
      </span>
      {external && <ArrowUpRight aria-hidden="true" size={17} className="text-ink-muted" />}
    </a>
  );
}
