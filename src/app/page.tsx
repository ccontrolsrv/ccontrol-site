import { Car, Users, Fingerprint, Calendar, BookOpen, FileText, Shield, Wifi, Clock, CreditCard, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Tecnologia de ponta para proteger seu condomínio com sistemas confiáveis e robustos.",
  },
  {
    icon: Wifi,
    title: "Conectividade Total",
    description: "Acesso via interface WEB de qualquer ponto com acesso à rede do condomínio.",
  },
  {
    icon: CreditCard,
    title: "Custo Benefício",
    description: "Desenvolvimento próprio proporcionando excelência a custo inferior concorrência.",
  },
  {
    icon: Clock,
    title: "Suporte Dedicado",
    description: "Equipe técnica especializada para atender suas necessidades.",
  },
];

const products = [
  {
    id: "veiculos",
    icon: Car,
    imageSrc: "/vehicles.jpg",
    title: "Controle de Acesso de Veículos",
    description: "Solução de software e rede ethernet para automação de leitura de tags passivos e acionamento de cancelas.",
    features: [
      "Compatível com qualquer leitor de tags (RS232/RS485)",
      "Acionamento de cancelas por contato seco",
      "Gestão de tags e veículos via WEB",
      "Interface de administração completa",
    ],
  },
  {
    id: "moradores",
    icon: Users,
    imageSrc: ["/people.jpg", "/people2.jpg"],
    title: "Controle de Moradores e Visitantes",
    description: "Sistema completo de controle de acesso com biometria e tokens para moradores e visitantes.",
    features: [
      "Acesso por biometria (face ou digital)",
      "Tokens em posse do morador",
      "Cadastro de visitantes com OCR",
      "Registro de entrada e saída",
    ],
  },
  {
    id: "reservas",
    icon: Calendar,
    imageSrc: ["/area1.jpg", "/area2.jpg"],
    title: "Reserva de Áreas e Serviços",
    description: "Sistema para reserva de quadras, churrasqueiras, salões de festas e requisição de serviços.",
    features: [
      "Reserva de áreas comuns",
      "Requisição de serviços diversos",
      "Agendamento facilitado",
      "Controle de disponibilidade",
    ],
  },
  {
    id: "reclamacoes",
    icon: BookOpen,
    imageSrc: "/reclame.png",
    title: "Livro de Reclamações Digital",
    description: "Sistema para registro de reclamações e sugestões com espaço privativo para resposta.",
    features: [
      "Envio de reclamações online",
      "Resposta privativa do administrador",
      " Sistema de sugestões",
      "Histórico completo",
    ],
  },
  {
    id: "comunicados",
    icon: FileText,
    imageSrc: "/documentos.jpg",
    title: "Comunicados e Documentos",
    description: "Central de informativos e documentos do condomínio.",
    features: [
      "Comunicados recentes",
      "Documentos de assembléias",
      "Arquivo organizado",
      "Acesso fácil e rápido",
    ],
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container relative z-10 px-4 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Automação Condominial
              <span className="text-primary block">Inteligente e Eficiente</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Companhia de engenharia de automação condominial com produtos de software e hardware 
              com desenvolvimento próprio, proporcionando excelência de funcionalidade e serviço a custo substancialmente inferior a concorrência.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/produtos">
                <Button size="lg">
                  Nossas Soluções
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contato">
                <Button size="lg" variant="outline">
                  Fale Conosco
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-white via-blue-50/30 to-white">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Por Que Escolher a condControl?</h2>
            <p className="mt-4 text-muted-foreground">
              Tecnologia de ponta com suporte dedicado para seu condomínio
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="bg-white shadow-lg shadow-blue-100/50 border border-blue-100">
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="produtos" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-blue-100/50 to-primary/10">
        <div className="container px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Nossas Soluções</h2>
            <p className="mt-4 text-muted-foreground">
              Sistemas completos para gestão condominial
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.id} className="group bg-gradient-to-br from-white via-white to-blue-50 hover:from-white hover:to-blue-100 transition-all duration-300 shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 hover:-translate-y-1 overflow-hidden border border-blue-100">
                <div className="relative h-40 w-full overflow-hidden bg-muted">
                  {Array.isArray(product.imageSrc) ? (
                    <div className="grid grid-cols-2 h-full relative">
                      {product.imageSrc.map((src, idx) => (
                        <Image
                          key={idx}
                          src={src}
                          alt={`${product.title} ${idx + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      ))}
                    </div>
                  ) : (
                    <Image
                      src={product.imageSrc}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <CardHeader>
                  <div className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">
              Pronto para modernizar seu condomínio?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Entre em contato conosco e conheça nossas soluções personalizadas.
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

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-blue-100/50 to-primary/10">
        <div className="container px-4">
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-white via-white to-blue-50 p-8 md:p-12 shadow-xl shadow-primary/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-1">
                <span className="text-sm font-bold uppercase tracking-wider text-primary-foreground">Quem Somos</span>
              </div>
              <div className="text-center mt-4">
                <h2 className="text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                  condControl
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Somos uma companhia de engenharia de automação condominial 
                  especializada no desenvolvimento de produtos de <strong className="text-foreground font-semibold">software</strong> e <strong className="text-foreground font-semibold">hardware</strong> próprios. 
                  Nossa missão é proporcionar <strong className="text-primary font-semibold">excelência</strong> de funcionalidade e serviço a custos substancialmente 
                  inferiores aos da concorrência, oferecendo <strong className="text-foreground font-semibold">soluções inovadoras</strong> para a gestão moderna de condomínios.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-sm text-muted-foreground">Desenvolvimento Próprio</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">NBD</div>
                    <div className="text-sm text-muted-foreground">Suporte Dedicado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">Barra da Tijuca</div>
                    <div className="text-sm text-muted-foreground">Cobertura na Barra da Tijuca</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}