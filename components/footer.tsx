"use client"
import { useState } from "react"
import Link from "next/link"
import { Input } from "@heroui/input"
import { Button } from "@heroui/button"
import { Logo } from "@/components/icons";

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
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error' | null, text: string }>({
    type: null,
    text: ''
  })

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setMessage({ type: 'error', text: 'Por favor ingresa tu email' })
      return
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: 'Email inválido' })
      return
    }

    setIsLoading(true)
    setMessage({ type: null, text: '' })

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: '¡Gracias por suscribirte!' })
        setEmail('')
      } else {
        setMessage({ type: 'error', text: data.error || 'Error al suscribirse' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error de conexión' })
    } finally {
      setIsLoading(false)
      // Limpiar mensaje después de 3 segundos
      setTimeout(() => {
        setMessage({ type: null, text: '' })
      }, 3000)
    }
  }

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Logo className="text-primary" />
              <span className="text-2xl font-bold tracking-tight">AWAKT</span>
            </Link>
            <p className="text-background/70 leading-relaxed mb-6 max-w-sm">
              Creatividad, cultura y crecimiento. Un espacio dedicado a despertar tu potencial artístico en armonía con
              la naturaleza.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onValueChange={setEmail}
                  size="sm"
                  variant="bordered"
                  disabled={isLoading}
                  classNames={{
                    inputWrapper: "bg-background/10 border-background/20 text-background",
                    input: "text-background placeholder:text-background/50",
                  }}
                  className="flex-1"
                />
                <Button 
                  type="submit"
                  color="primary" 
                  size="sm"
                  isLoading={isLoading}
                  disabled={isLoading}
                >
                  {isLoading ? 'Enviando...' : 'Suscribir'}
                </Button>
              </div>
              {message.type && (
                <p className={`text-sm ${
                  message.type === 'success' ? 'text-success' : 'text-danger'
                }`}>
                  {message.text}
                </p>
              )}
            </form>
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