"use client";
import { useActionState } from "react";
import contact from "@/data/contact";
import { sendMessage, type SendState } from "@/actions/send-message";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const initial: SendState = { ok: false, message: "" };

export function ContactSection() {
  const [state, action, pending] = useActionState(sendMessage, initial);
  return (
    <section id="contact" className="border-t border-hairline bg-section py-24">
      <Container>
        <SectionHeading eyebrow="Contact" title={contact.heading ?? "Let's talk"} description={contact.description} />
        <form action={action} className="grid max-w-xl gap-4">
          <Input name="name" placeholder="Your name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Textarea name="message" placeholder="Message" required />
          <div className="flex items-center gap-4">
            <Button type="submit" disabled={pending}>{pending ? "Sending…" : "Send message"}</Button>
            {state.message && <p className={state.ok ? "text-sm text-sage-dark" : "text-sm text-destructive"}>{state.message}</p>}
          </div>
        </form>
      </Container>
    </section>
  );
}
