"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Car, Users, Calendar, BookOpen, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Quem somos", href: "/#sobre", icon: Users },
  {
    name: "Produtos e soluções",
    href: "/produtos",
    icon: Car,
    children: [
      { name: "Controle de acesso de veículos", href: "/produtos#veiculos", icon: Car },
      { name: "Controle de moradores e visitantes", href: "/produtos#moradores", icon: Users },
      { name: "Reserva de áreas e serviços", href: "/produtos#reservas", icon: Calendar },
      { name: "Livro de reclamações digital", href: "/produtos#reclamacoes", icon: BookOpen },
      { name: "Comunicados e documentos", href: "/produtos#comunicados", icon: FileText },
    ],
  },
  { name: "Fale conosco", href: "/contato", icon: Mail },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Car className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">condControl</span>
        </Link>

        <nav className="hidden md:flex md:gap-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </button>
          <SheetContent side="right">
            <SheetTitle>Menu</SheetTitle>
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary",
                      pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="ml-7 mt-2 flex flex-col gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}