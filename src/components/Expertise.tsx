import { useEffect, useRef, useState } from "react"
import { Heart, Building2, PartyPopper, Mic, Users, Briefcase } from "lucide-react"
import { HighlightedText } from "./HighlightedText"

const expertiseAreas = [
  {
    title: "Свадьбы",
    description: "Организуем свадьбы мечты — от камерных церемоний до масштабных торжеств. Продумаем каждую деталь вашего особенного дня.",
    icon: Heart,
  },
  {
    title: "Корпоративные события",
    description:
      "Тимбилдинги, конференции, гала-ужины и новогодние вечеринки. Создаём мероприятия, которые укрепляют команду и впечатляют партнёров.",
    icon: Building2,
  },
  {
    title: "Частные торжества",
    description:
      "Дни рождения, юбилеи, выпускные и тематические вечеринки. Превращаем ваши идеи в незабываемый праздник.",
    icon: PartyPopper,
  },
  {
    title: "Деловые мероприятия",
    description:
      "Презентации, пресс-конференции, запуск продуктов и бизнес-завтраки. Профессиональная организация с вниманием к имиджу.",
    icon: Mic,
  },
  {
    title: "Корпоративы без ограничений",
    description:
      "Организация корпоративных мероприятий любого масштаба — без ограничений по количеству гостей. Тимбилдинги, гала-вечера, праздники для всей компании под ключ.",
    icon: Users,
  },
  {
    title: "Бизнес-форумы",
    description:
      "Организация и проведение бизнес-форумов: пространство, программа, спикеры, техническое обеспечение. Создаём площадку, где рождаются идеи и партнёрства.",
    icon: Briefcase,
  },
  {
    title: "Свадьбы на краю света",
    description:
      "Проведение и организация свадеб на вулкане или берегу Тихого океана. Уникальные локации Камчатки как фон для самого важного дня в вашей жизни.",
    icon: Heart,
  },
]

export function Expertise() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"))
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.2 },
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-20">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши услуги</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-8xl">
            <HighlightedText>Форматы</HighlightedText>, которые
            <br />
            вдохновляют
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Более 500 успешных мероприятий. Мы знаем, как сделать каждое событие особенным — от концепции до последнего танца.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative pl-8 border-l border-border transition-all duration-700 ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`transition-all duration-1000 ${
                    visibleItems.includes(index) ? "animate-draw-stroke" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  <Icon className="w-10 h-10 mb-4 text-foreground" strokeWidth={1.25} />
                </div>
                <h3 className="text-xl font-medium mb-4">{area.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{area.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}