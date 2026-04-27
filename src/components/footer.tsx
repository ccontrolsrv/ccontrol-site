import Link from "next/link";
import { Car, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Car className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight">condControl</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Companhia de engenharia de automação condominial com produtos de software e hardware com desenvolvimento próprio.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Contato</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                ccontrol.srv@gmail.com
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Horário</h3>
            <p className="text-sm text-muted-foreground">
              Segunda a Sexta: 8h às 18h
            </p>
            <p className="text-sm text-muted-foreground">
              Sábado: 9h às 13h
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} condControl. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}