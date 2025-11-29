"use client";
import { title, subtitle } from "@/components/primitives";
import { Card, CardBody } from "@heroui/card";
import {
  Palette,
  TreePine,
  Users,
  Sparkles,
  Mountain,
  Heart,
} from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Talleres de Arte",
    description:
      "Talleres de pintura, escultura y arte en medio de la naturaleza.",
  },
  {
    icon: TreePine,
    title: "Espacios Naturales",
    description:
      "Áreas verdes diseñadas para inspirar y conectar con el entorno.",
  },
  {
    icon: Users,
    title: "Comunidad Creativa",
    description:
      "Red de personas creativas que comparten experiencias y conocimientos.",
  },
  {
    icon: Sparkles,
    title: "Eventos Únicos",
    description:
      "Exposiciones, festivales y encuentros artísticos durante todo el año.",
  },
  {
    icon: Mountain,
    title: "Retiros Creativos",
    description:
      "Talleres inmersivos para desconectar y reconectar con tu creatividad.",
  },
  {
    icon: Heart,
    title: "Bienestar Integral",
    description: "Meditación y actividades que nutren cuerpo y mente.",
  },
];

export function Features() {
  return (
    <section id="caracteristicas" className="py-20 md:py-32 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={title()}>Lo que nos hace </span>
          <span className={title({ color: "awakt" })}>únicos</span>
          <div className={subtitle({ class: "mt-4" })}>
            Descubre todo lo que AWAKT tiene para ofrecerte en un espacio donde
            la creatividad florece naturalmente.
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
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
