"use client";
import { title, subtitle } from "@/components/primitives";
import { Check} from "lucide-react";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";

const highlights = [
  "Más de 2 años de experiencia",
  "Comunidad de +500 personas apacionadas por el arte",
  "Actividades para todas las edades",
]



export function About() {
    return (
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
              <span className={title({color: "awakt"})}>
                Dedicados 
              </span>
              <span className={title()}> a la Creatividad, Cultura y Crecimiento</span>
              
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
                      color="success"
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
     );
}