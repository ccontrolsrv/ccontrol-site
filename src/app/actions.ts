"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { success: false, error: "Preencha todos os campos obrigatórios" };
  }

  try {
    console.log("Enviando email com Resend...");
    console.log("API Key:", process.env.RESEND_API_KEY ? "OK" : "MISSING");
    
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ccontrol.srv@gmail.com",
      replyTo: email,
      subject: `[Fale Conosco] ${subject}`,
      html: `
        <h2>Nova mensagem do site condControl</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || "Não informado"}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <hr>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return { success: false, error: "Erro ao enviar email. Tente novamente." };
  }
}