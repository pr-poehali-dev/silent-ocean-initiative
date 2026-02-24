import { useState } from "react"
import { HighlightedText } from "./HighlightedText"

const photos: string[] = []

const bullets = [
  "В моём арсенале мероприятия всех форматов!",
  "10 лет посещаю международные форумы в event-индустрии, изучая новые тенденции. Первая ведущая, кто полетел за пределы края, чтобы стать профессионалом!",
  "Организовываю любые мероприятия под ключ, зная всех артистов, ди-джеев, ведущих.",
  "Смело могу говорить, что являюсь РОДОНАЧАЛЬНИКОМ АнтиКвиза и «Угадай Мелодию» в Камчатском крае! Первый АнтиКвиз был проведён в 2020 году.",
]

export function LaraAbout() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section className="py-32 md:py-29 border-t border-border/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">О нас</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">
            Лара Даманская, <HighlightedText>кто она?</HighlightedText>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left — text */}
          <div className="space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Более 13 лет являюсь организатором, ведущей, сценаристом, постановщиком и актрисой
              Камчатского края. Арт-директор ресторана «Яранга» в прошлом.
            </p>

            <ul className="space-y-5">
              {bullets.map((text, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-muted-foreground/50 text-sm font-medium mt-1">0{i + 1}</span>
                  <p className="text-muted-foreground leading-relaxed">{text}</p>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground leading-relaxed pt-2">
              Несколько лет мы вели АнтиКвизы в формате корпоративов и в «Яранге» — теперь выходим
              в другой, более привычный для всех формат.
            </p>

            <p className="text-foreground font-medium">С уважением, Лара Даманская</p>
            <p className="text-muted-foreground text-sm">@laradamanskay</p>
          </div>

          {/* Right — photo grid */}
          {photos.length > 0 && (
            <div className="grid grid-cols-2 gap-3">
              {photos.map((src, i) => (
                <div
                  key={i}
                  onClick={() => setSelected(i)}
                  className="aspect-square overflow-hidden rounded-sm cursor-pointer bg-secondary"
                >
                  <img
                    src={src}
                    alt={`Фото ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <img
            src={photos[selected]}
            alt={`Фото ${selected + 1}`}
            className="max-w-full max-h-full object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl leading-none"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  )
}
