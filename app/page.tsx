import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { Button, ButtonGroup } from "@heroui/button";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { InstaGramIcon } from "@/components/icons";
import { button as buttonStyles } from "@heroui/theme";
import { Palette, TreePine, Users, Sparkles, Mountain, Heart } from "lucide-react"
import { Card, CardBody } from "@heroui/card"


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

export default function Home() {
  return (
    <>
      <section className="flex flex-col justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-left justify-center">
          <span className={title()}>Bienvenidos a &nbsp;</span>
          <span className={title({ color: "awakt" })}>AWAKT&nbsp;</span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            Nos especializamos en ofrecer espacios donde las personas pueden explorar su creatividad mientras disfrutan de un entorno natural.
          </div>
          <div className="flex gap-3 items-center justify-center">
            <Button
              className="awakt-bg text-white shadow-lg"
              radius="full"
              href={siteConfig.links.docs}
            >
              Conocer mas
            </Button>
          </div>
        </div>
        {/* <img src="././logo-sin-letras.png/?" className="img-fluid" /> */}
      </section>
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
    </>

  );
}
