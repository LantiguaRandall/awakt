"use client"
import type React from "react"
import { useState } from "react";
import {Input,Textarea} from "@heroui/input";
import {Button} from "@heroui/button";
import { Card, CardBody } from "@heroui/card";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Contacto</p>
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
                  <p className="font-medium">hola@awakt.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Teléfono</p>
                  <p className="font-medium">+52 (55) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium">Valle de Bravo, México</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
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
                  classNames={{
                    inputWrapper: "border-border",
                  }}
                />
                <Button
                  type="submit"
                  color="primary"
                  className="w-full group font-medium"
                  endContent={<Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                >
                  Enviar mensaje
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  )
}
