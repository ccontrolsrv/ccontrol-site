import Image from "next/image";
import { Car, Users, Calendar, BookOpen, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const products = [
  {
    id: "veiculos",
    icon: Car,
    title: "Controle de Acesso de Veículos",
    shortDescription: "Automação de leitura de tags passivos e acionamento de cancelas de veículos.",
    fullDescription: "Solução de software e rede ethernet para automação de leitura de tags passivos e acionamento de cancelas de veículos. A solução é compatível com qualquer leitor de tags que envia a leitura do tag por interface serial (RS232 / RS485) e qualquer cancela acionada por contato seco. O sistema permite a gestão de tags e veículos pela administração através de uma interface WEB de qualquer ponto com acesso a rede do condomínio.",
    features: [
      "Compatível com qualquer leitor de tags (RS232/RS485)",
      "Acionamento de cancelas por contato seco",
      "Gestão de tags e veículos via WEB",
      "Interface de administração completa",
      "Registro de entradas e saídas",
    ],
    image: "/vehicles.jpg",
  },
  {
    id: "moradores",
    icon: Users,
    title: "Controle de Moradores e Visitantes",
    shortDescription: "Controle de acesso com biometria e tokens para moradores e visitantes.",
    fullDescription: "O acesso de moradores é feito através de biometria (face ou digital) ou token em posse do morador, liberando a porta/cancela/roleta caso o morador esteja corretamente cadastrado. O sistema permite o cadastro e gestão dos moradores através de interface WEB de qualquer ponto com acesso a rede do condomínio. O acesso de visitantes é feito por cadastro digital de documento oficial com foto através de leitura automática (OCR) do documento e emissão de um token em papel que deve ser lido para liberação da saída. O sistema é acessível via interface WEB e permite o acesso ao condomínio com períodos estipulados (mantém o cadastro durante periodo programável) e mantém registro de horário de entrada e saída de cada visitante.",
    features: [
      "Acesso por biometria (face ou digital)",
      "Tokens em posse do morador",
      "Cadastro de visitantes com OCR",
      "Registro de entrada e saída",
      "Períodos de acesso programáveis",
    ],
    image: "/people.jpg",
  },
  {
    id: "reservas",
    icon: Calendar,
    title: "Reserva de Áreas e Serviços",
    shortDescription: "Sistema para reserva de áreas comuns e requisição de serviços.",
    fullDescription: "Sistema acessível via interface WEB que permite reservar o uso de quadras, churrasqueiras, salões de festas, etc... e requisitar serviços diversos do condomínio (mensageiro, faxina, etc...). Facilitando a vida dos moradores e a gestão dos espaços comuns.",
    features: [
      "Reserva de quadras e churrasqueiras",
      "Reserva de salões de festa",
      "Requisição de serviços",
      "Controle de disponibilidade",
      "Confirmação automática",
    ],
    image: "/area1.jpg",
  },
  {
    id: "reclamacoes",
    icon: BookOpen,
    title: "Livro de Reclamações Digital",
    shortDescription: "Sistema para registro de reclamações e sugestões.",
    fullDescription: "Sistema acessível via interface WEB que permite deixar reclamação ou sugestão com espaço provado para recepção da resposta pelo administrador do condomínio. Garantindoprivacy e eficiência na comunicação entre moradores e administração.",
    features: [
      "Envio de reclamações online",
      "Sistema de sugestões",
      "Resposta privativa do administrator",
      "Histórico completo",
      "Notificações de resposta",
    ],
    image: "/reclame.png",
  },
  {
    id: "comunicados",
    icon: FileText,
    title: "Comunicados e Documentos",
    shortDescription: "Central de informativos e documentos do condomínio.",
    fullDescription: "Sistema acessível via interface WEB que contém os informativos e documentos (como de assembléias) recentes do condomínio. Mantendo todos os moradores informados de forma organizada e acessível.",
    features: [
      "Comunicados recentes",
      "Documentos de assembléias",
      "Arquivo organizado",
      "Busca facilitada",
      "Download de documentos",
    ],
    image: "/documentos.jpg",
  },
];

export default function Produtos() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container relative z-10 px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Produtos e Soluções
          </h1>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Sistemas completos para gestão condominial moderna
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid gap-12">
            {products.map((product, index) => (
              <Card key={product.id} id={product.id} className="overflow-hidden">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="relative aspect-video lg:aspect-auto lg:min-h-[300px]">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent lg:hidden" />
                  </div>
                  <CardHeader className="lg:flex lg:justify-center lg:flex-col lg:px-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                    <CardDescription className="text-base">
                      {product.fullDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="lg:col-span-2 lg:px-8 lg:pb-8">
                    <h4 className="mb-4 text-sm font-semibold">Características:</h4>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Interessado em nossas soluções?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Entre em contato para entender melhor como podemos ajudar seu condomínio.
            </p>
            <Link href="/contato">
              <Button size="lg" className="mt-8">
                Fale Conosco
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}