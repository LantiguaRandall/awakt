import Link from "next/link"
import { Input } from "@heroui/input"
import { Button } from "@heroui/button"
import {  Logo } from "@/components/icons";

const footerLinks = {
  servicios: [
    { name: "Talleres de Arte", href: "#" },
    { name: "Retiros Creativos", href: "#" },
    { name: "Eventos Corporativos", href: "#" },
    { name: "Espacios para Alquiler", href: "#" },
  ],
  empresa: [
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Equipo", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Prensa", href: "#" },
  ],
  soporte: [
    { name: "FAQ", href: "#" },
    { name: "Contacto", href: "#contacto" },
    { name: "Privacidad", href: "#" },
    { name: "Términos", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Logo className=" text-primary" />
              <span className="text-2xl font-bold tracking-tight">AWAKT</span>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Creatividad, cultura y crecimiento. Un espacio dedicado a despertar tu potencial artístico en armonía con
              la naturaleza.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Tu email"
                size="sm"
                variant="bordered"
                classNames={{
                  inputWrapper: "bg-background/10 border-background/20 text-background",
                  input: "text-background placeholder:text-background/50",
                }}
                className="flex-1"
              />
              <Button color="primary" size="sm">
                Suscribir
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">© 2025 AWAKT. Todos los derechos reservados.</p>
          <p className="text-background/50 text-sm">Creatividad · Naturaleza · Arte</p>
        </div>
      </div>
    </footer>
  )
}
