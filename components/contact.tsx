"use client"
import type React from "react"
import { useState } from "react";
import {Input,Textarea} from "@heroui/input";
import {Button} from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, MessageCircleHeart  } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ 
    type: null, 
    message: '' 
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '¡Mensaje enviado exitosamente! Te contactaremos pronto.' 
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || 'Error al enviar el mensaje. Intenta de nuevo.' 
        })
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Error de conexión. Por favor intenta de nuevo.' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contacto" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-success font-medium tracking-widest uppercase text-sm mb-4">Contacto</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Pregúntanos lo que quieras</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              ¿Eres una empresa o marca que busca servicios creativos, una agencia que busca escalar, una mente
              creativa, un estratega, un coach... o simplemente alguien inspirado por lo que estamos construyendo?
              Conectemos.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:awakt.rd@gmail.com" className="font-medium hover:text-primary transition-colors">
                    awakt.rd@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <a href="tel:+18297995316" className="font-medium hover:text-primary transition-colors">
                    +1 (829) 799-5316
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium">Santiago, República Dominicana</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://instagram.com/awakt.rd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 text-overlay bg-success rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com/awakt.rd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 text-overlay bg-success rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=18297995316"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 text-overlay bg-success rounded-full flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircleHeart  className="h-5 w-5" />
              </a>
            </div>
          </div>

          <Card className="bg-card border border-border" shadow="sm">
            <CardBody className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Nombre"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onValueChange={(value) => setFormData({ ...formData, name: value })}
                  variant="bordered"
                  isRequired
                  classNames={{
                    inputWrapper: "border-border",
                  }}
                />
                <Input
                  label="Email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onValueChange={(value) => setFormData({ ...formData, email: value })}
                  variant="bordered"
                  isRequired
                  classNames={{
                    inputWrapper: "border-border",
                  }}
                />
                <Textarea
                  label="Mensaje"
                  placeholder="Cuéntanos sobre tu proyecto o pregunta..."
                  minRows={5}
                  value={formData.message}
                  onValueChange={(value) => setFormData({ ...formData, message: value })}
                  variant="bordered"
                  isRequired
                  classNames={{
                    inputWrapper: "border-border",
                  }}
                />
                
                {status.type && (
                  <div className={`p-4 rounded-lg ${
                    status.type === 'success' 
                      ? 'bg-success/10 text-success' 
                      : 'bg-danger/10 text-danger'
                  }`}>
                    {status.message}
                  </div>
                )}

                <Button
                  type="submit"
                  color="success"
                  isLoading={isLoading}
                  disabled={isLoading}
                  className="w-full group font-medium text-background"
                  endContent={!isLoading && <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                >
                  {isLoading ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  )
}