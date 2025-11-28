"use client";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Palette, TreePine, Users, Sparkles, Mountain, Heart, Check, ChevronLeft, ChevronRight, Quote, ArrowRight, Play } from "lucide-react"
import { Card, CardBody } from "@heroui/card"
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Avatar } from "@heroui/avatar";
import { useState } from 'react';


const features = [
  {
    icon: Palette,
    title: "Talleres de Arte",
    description: "Talleres de pintura, escultura y arte en medio de la naturaleza.",
  },
  {
    icon: TreePine,
    title: "Espacios Naturales",
    description: "Áreas verdes diseñadas para inspirar y conectar con el entorno.",
  },
  {
    icon: Users,
    title: "Comunidad Creativa",
    description: "Red de personas creativas que comparten experiencias y conocimientos.",
  },
  {
    icon: Sparkles,
    title: "Eventos Únicos",
    description: "Exposiciones, festivales y encuentros artísticos durante todo el año.",
  },
  {
    icon: Mountain,
    title: "Retiros Creativos",
    description: "Talleres inmersivos para desconectar y reconectar con tu creatividad.",
  },
  {
    icon: Heart,
    title: "Bienestar Integral",
    description: "Meditación y actividades que nutren cuerpo y mente.",
  },
]

const highlights = [
  "Más de 2 años de experiencia",
  "Comunidad de +500 personas apacionadas por el arte",
  "Actividades para todas las edades",
]

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

export default function Home() {
  const [current, setCurrent] = useState(0)
  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <>
      {/* hero */}
      <section id="inicio" className="relative  flex items-center overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 pb-28 w-full">
          <div className="grid lg:grid-cols-2 gap-2 lg:gap-2 items-center">
            {/* Content Column */}
            <div className="relative z-10 order-2 lg:order-1">
              <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
                Creatividad · Naturaleza · Arte
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-balance">
                Bienvenidos a <span className="text-success">AWAKT</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                Nos especializamos en ofrecer espacios donde las personas pueden explorar su creatividad mientras
                disfrutan de un entorno natural. Un lugar donde el arte y la naturaleza se fusionan para despertar tu
                potencial creativo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  color="success"
                  size="lg"
                  radius="full"
                  className="group font-medium text-background"
                  endContent={<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
                >
                  Conocer más
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  radius="full"
                  className="group font-medium border-success/20 text-success"
                  startContent={<Play className="h-4 w-4" />}
                >
                  Ver video
                </Button>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              {/* Decorative background element */}
              <div className="absolute -top-8 -right-8 w-full h-full bg-primary/10 rounded-3xl" />

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-primary/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary text-xl font-bold">+</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Artistas creativos</p>
                  </div>
                </div>
              </div>

              {/* Main image - offset positioning */}
              <div className="relative">
                <Image
                  src="././logo-sin-letras.png"
                  alt="Espacio creativo AWAKT"
                  className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-2xl"
                  radius="lg"
                />



                {/* Secondary floating element */}
                <div className="absolute -top-4 -left-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  Nuevo espacio 2025
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>
      {/* Caracteristicas */}
      <section id="caracteristicas" className="py-20 md:py-32 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className={title()}>Lo que nos hace </span>
            <span className={title({ color: "awakt" })}>únicos</span>
            <div className={subtitle({ class: "mt-4" })}>
              Descubre todo lo que AWAKT tiene para ofrecerte en un espacio donde la creatividad florece naturalmente.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group bg-card border border-border hover:border-success/50 transition-all duration-300"
                shadow="none"
                isPressable
              >
                <CardBody className="p-8">
                  <div className="w-14 h-14 bg-success/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-success/20 transition-colors">
                    <feature.icon className="h-7 w-7 text-success" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Sobre nosotros */}
      <section id="nosotros" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="././about.jpeg/?"
                  alt="Artista pintando en AWAKT"
                  className="object-cover w-full h-full"
                  radius="lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/30 rounded-lg -z-10" />
            </div>

            <div>
              <span className={title()}>
                Dedicados a la Creatividad, Cultura y Crecimiento
              </span>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                AWAKT es un centro creativo donde marcas y personas vienen a definir quiénes son, afinar su visión y
                trazar lo que viene después. Ayudamos a las marcas a encontrar su voz a través de la narrativa y el
                branding.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Y ayudamos a los creativos a encontrar la suya, porque cuando la vida y el trabajo se mueven en sincronía,
                las mejores ideas no solo suceden, fluyen. Por eso creamos AWAKT, una nueva forma de pausar, reiniciar y
                encender el pensamiento que alimenta no solo carreras, sino formas completas de ser.
              </p>

              <ul className="space-y-3">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Chip
                      size="sm"
                      variant="flat"
                      color="success-700"
                      startContent={<Check className="h-3 w-3" />}
                      className="px-0 bg-primary/10"
                    >
                      <span className="sr-only">Característica:</span>
                    </Chip>
                    <span className="text-foreground font-medium text-success-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonios  */}
      <section id="testimonios" className="py-20 md:py-32  text-content-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 text-content-1">
            <span className={title({ color: "primary" })}>Lo que dicen nuestra </span>
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
                    onClick={prev}
                    className="border-foreground/30 text-foreground hover:bg-foreground/10"
                    aria-label="Testimonio anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    isIconOnly
                    variant="bordered"
                    onClick={next}
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
    </>

  );
}
