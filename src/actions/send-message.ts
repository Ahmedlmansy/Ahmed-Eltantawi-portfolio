"use server";

export type SendState = { ok: boolean; message: string };

export async function sendMessage(_prev: SendState, formData: FormData): Promise<SendState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) return { ok: false, message: "Please fill in all fields." };
  if (!/^\S+@\S+\.\S+$/.test(email)) return { ok: false, message: "Please enter a valid email." };

  // TODO: connect an email provider here (Resend, Nodemailer, ...). Target: process.env.CONTACT_TO_EMAIL
  console.log("[contact]", { name, email, message });
  return { ok: true, message: "Thanks! Your message was received." };
}
