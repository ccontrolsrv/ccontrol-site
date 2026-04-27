"use client";

import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    description: "ccontrol.srv@gmail.com",
    href: "mailto:ccontrol.srv@gmail.com",
  },
  {
    icon: Clock,
    title: "Horário de Atendimento",
    description: "Segunda a Sexta: 8h às 18h",
    href: null,
  },
];

export default function Contato() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container relative z-10 px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Fale Conosco
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Estamos prontos para atender sua empresa
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">
                Entre em Contato
              </h2>
              <p className="mb-8 text-muted-foreground">
                Tem dúvidas sobre nossos produtos ou precisa de um orçamento? 
                Preencha o formulário e nossa equipe entrará em contato.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Link
                    key={info.title}
                    href={info.href || "#"}
                    className="flex items-center gap-4 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Pronto para automatizar seu condomínio?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nossas soluções oferecem o melhor custo-benefício do mercado.
            </p>
            <Link href="/produtos">
              <Button size="lg" className="mt-8">
                Conheça Nossas Soluções
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}