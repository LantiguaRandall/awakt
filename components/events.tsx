import { Button } from "@heroui/button"
import {Card, CardBody, CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "Tarde de Pintura Awakt",
    date: "15 de febrero, 2026",
    time: "3:00 PM - 6:00 PM",
    location: "Jardín Botánico, Santiago",
    image: "/event1.jpg",
    description: "No necesitas experiencia, solo ganas de crear, elige qué pintar: tote bag, cuadro, florero o cofre",
  }
]

export function Events() {
  const handleWhatsAppReservation = (event: typeof events[0]) => {
    const phoneNumber = "18297995316" // Reemplaza con tu número (código país + número sin espacios ni signos)
    const message = `¡Hola! Me gustaría reservar un lugar para el evento:

${event.title}
Fecha: ${event.date}
Hora: ${event.time}
Lugar: ${event.location}


¿Hay disponibilidad?`
    
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="eventos" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Próximos Eventos</p>
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Únete a nuestras experiencias</h2>
          </div>
          <Button
            variant="bordered"
            className="mt-6 md:mt-0 group border-foreground/20"
            endContent={<ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />}
          >
            Ver todos los eventos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              className="group bg-card border border-border hover:border-primary/50 transition-all duration-300"
              shadow="sm"
            >
              <CardBody className="p-0 overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full aspect-[3/2] object-cover group-hover:scale-105 transition-transform duration-500"
                  radius="none"
                />
              </CardBody>
              <CardFooter className="flex-col items-start p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors text-foreground">
                  {event.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
                <div className="space-y-2 text-sm text-muted-foreground w-full">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <Button 
                  variant="bordered" 
                  className="w-full mt-6 border-foreground/20"
                  onClick={() => handleWhatsAppReservation(event)}
                >
                  Reservar lugar
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}