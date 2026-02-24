import { useState } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { HighlightedText } from "../components/HighlightedText"

const categories = ["Все", "Свадьбы", "Корпоративы", "Частные торжества", "Форумы", "АнтиКвиз"]

const portfolioItems = [
  { id: 1, title: "Свадьба на берегу Тихого океана", category: "Свадьбы", location: "Халактырский пляж", year: "2024", image: "" },
  { id: 2, title: "Корпоративный форум", category: "Форумы", location: "Петропавловск-Камчатский", year: "2024", image: "" },
  { id: 3, title: "Юбилей у подножия вулкана", category: "Частные торжества", location: "Авачинский вулкан", year: "2023", image: "" },
  { id: 4, title: "АнтиКвиз в «Яранге»", category: "АнтиКвиз", location: "Ресторан «Яранга»", year: "2024", image: "" },
  { id: 5, title: "Свадьба на вулкане", category: "Свадьбы", location: "Камчатка", year: "2023", image: "" },
  { id: 6, title: "Корпоратив под ключ", category: "Корпоративы", location: "Петропавловск-Камчатский", year: "2024", image: "" },
  { id: 7, title: "День рождения", category: "Частные торжества", location: "Камчатка", year: "2023", image: "" },
  { id: 8, title: "Бизнес-форум", category: "Форумы", location: "Петропавловск-Камчатский", year: "2024", image: "" },
  { id: 9, title: "АнтиКвиз — сезон 2", category: "АнтиКвиз", location: "Ресторан «Яранга»", year: "2023", image: "" },
  { id: 10, title: "Свадьба на берегу океана", category: "Свадьбы", location: "Камчатка", year: "2022", image: "" },
  { id: 11, title: "Новогодний корпоратив", category: "Корпоративы", location: "Петропавловск-Камчатский", year: "2023", image: "" },
  { id: 12, title: "Юбилей компании", category: "Корпоративы", location: "Камчатка", year: "2022", image: "" },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Все")
  const [selected, setSelected] = useState<number | null>(null)

  const filtered = activeCategory === "Все"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory)

  const selectedItem = selected !== null ? portfolioItems.find((i) => i.id === selected) : null

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-40 pb-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-12">
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши работы</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-10">
              <HighlightedText>Портфолио</HighlightedText> событий
            </h1>

            {/* Фильтры */}
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 text-sm border transition-colors duration-200 ${
                    activeCategory === cat
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Сетка */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => item.image ? setSelected(item.id) : undefined}
                className={`group relative aspect-square overflow-hidden rounded-sm bg-secondary ${item.image ? "cursor-pointer" : "cursor-default"}`}
              >
                {item.image ? (
                  <>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                      <div className="translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="text-white font-medium text-sm">{item.title}</p>
                        <p className="text-white/70 text-xs">{item.location} · {item.year}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
                    <div className="w-10 h-10 border border-border rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-foreground">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <circle cx="8.5" cy="8.5" r="1.5" />
                        <path d="m21 15-5-5L5 21" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {selectedItem?.image && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <img
            src={selectedItem.image}
            alt={selectedItem.title}
            className="max-w-full max-h-full object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-medium">{selectedItem.title}</p>
            <p className="text-white/60 text-sm">{selectedItem.location} · {selectedItem.year}</p>
          </div>
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl leading-none"
          >
            ✕
          </button>
        </div>
      )}
    </main>
  )
}
