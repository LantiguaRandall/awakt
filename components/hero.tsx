import { Button } from "@heroui/button";
import { ArrowRight, Play } from "lucide-react";
import { Image } from "@heroui/image";


export function Hero() {
  return (
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
  );
}
