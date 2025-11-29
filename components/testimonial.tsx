"use client";
import { Button } from "@heroui/button";
import { title} from "@/components/primitives";
import { ChevronLeft, ChevronRight, Quote} from "lucide-react"
import { Card, CardBody } from "@heroui/card"
import { useState } from 'react';


const testimonials = [
  {
    id: 1,
    name: "Amarfi Martinez",
    role: " @odoredicafferd",
    content:
      "Gracias por hacernos parte, nosotros felices siempre de recibirles. ¡Esperando verles nuevamente por acá!",
  },
  {
    id: 2,
    name: "Maria Teresa Campos Boitel",
    role: "@marytcampos",
    content:
      "Nos encantó la experiencia!! 100% recomendado ❤️❤️",
  },
  {
    id: 3,
    name: "Luisa Inmaculada Fernández",
    role: " @inmaculada6413",
    content:
      "Bendiciones que dios siga iluminando y llenando cada detalle que as de crear, eres especial",
  },

]

export function Testimonial() {
    const [current, setCurrent] = useState(0)
    const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
    const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    
  return (
      <section id="testimonios" className="py-20 md:py-32  text-content-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-content-1">
            <span className={title()}>Lo que dice nuestra </span>
            <span className={title({ color: "awakt" })}>gente</span>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-primary-50 backdrop-blur-sm border-none" shadow="none">
              <CardBody className="p-8 md:p-12 relative">
                <Quote className="h-12 w-12 opacity-100 absolute top-8 left-8 text-success-500" />

                <div className="text-center pt-8">
                  <p className="text-xl md:text-2xl leading-relaxed mb-8 italic text-foreground">
                    "{testimonials[current].content}"
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    {/* <Avatar
                      src="{testimonials[current].image}"
                      alt={testimonials[current].name}
                      size="lg"
                      isBordered
                      className="border-primary-foreground/30"
                    /> */}
                    <div className="text-left">
                      <p className="font-semibold text-lg text-foreground ">{testimonials[current].name}</p>
                      <p className="opacity-100 text-success-700 text-center">{testimonials[current].role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center gap-4 mt-8">
                  <Button
                    isIconOnly
                    variant="bordered"
                    onPress={prev}
                    className="border-foreground/30 text-foreground hover:bg-foreground/10"
                    aria-label="Testimonio anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    isIconOnly
                    variant="bordered"
                    onPress={next}
                    className="border-foreground/30 text-foreground hover:bg-foreground/10"
                    aria-label="Siguiente testimonio"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </CardBody>
            </Card>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === current ? "bg-foreground w-6" : "bg-foreground/40"
                    }`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
     );
}
