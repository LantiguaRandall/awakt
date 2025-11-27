import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import {Button, ButtonGroup} from "@heroui/button";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { InstaGramIcon } from "@/components/icons";

export default function Home() {
  return (
   <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./banner.png')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Creatividad · Naturaleza · Arte
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 text-balance">
            Bienvenidos a <span className="text-primary">AWAKT</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Nos especializamos en ofrecer espacios donde las personas pueden explorar su creatividad mientras disfrutan
            de un entorno natural. Un lugar donde el arte y la naturaleza se fusionan para despertar tu potencial
            creativo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button  className="group">
              Conocer más
             
            </Button>
            <Button variant="bordered" className="group bg-transparent">
              
              Ver video
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
