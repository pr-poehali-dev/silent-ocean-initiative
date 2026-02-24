import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Юбилей холдинга Агротек 30 лет",
    category: "Корпоратив",
    location: "Проведение и организация",
    year: "2025",
    images: [
      "https://cdn.poehali.dev/projects/19089321-baea-4afd-b17d-4ea2719a588d/bucket/9ddcbb27-c323-42f0-8201-a4c6bdf4a111.png",
      "https://cdn.poehali.dev/projects/19089321-baea-4afd-b17d-4ea2719a588d/bucket/61147eb5-b0bb-459c-a096-7ea822a5c275.png",
      "https://cdn.poehali.dev/projects/19089321-baea-4afd-b17d-4ea2719a588d/bucket/df838998-b9e0-4f54-a969-86f343ddc9b4.png",
      "https://cdn.poehali.dev/projects/19089321-baea-4afd-b17d-4ea2719a588d/bucket/7e9e32c1-bdb3-482f-88ac-395d0a80d8eb.png",
    ],
  },
  {
    id: 2,
    title: "Корпоративный форум",
    category: "Корпоратив",
    location: "Петропавловск-Камчатский",
    year: "2024",
    images: ["/images/hously-2.png"],
  },
  {
    id: 3,
    title: "Юбилей у подножия вулкана",
    category: "Частное торжество",
    location: "Камчатка, Авачинский вулкан",
    year: "2023",
    images: ["/images/hously-3.png"],
  },
  {
    id: 4,
    title: "АнтиКвиз в «Яранге»",
    category: "Деловое мероприятие",
    location: "Петропавловск-Камчатский, «Яранга»",
    year: "2024",
    images: ["/images/hously-4.png"],
  },
]

function ProjectCard({ project, revealed }: { project: typeof projects[0]; revealed: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hovered, setHovered] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (hovered && project.images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % project.images.length)
      }, 1000)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (!hovered) setCurrentIndex(0)
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [hovered, project.images.length])

  return (
    <article
      className="group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden aspect-[4/3] mb-6">
        {project.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              i === currentIndex ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
          />
        ))}
        {project.images.length > 1 && hovered && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {project.images.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                  i === currentIndex ? "bg-white" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        )}
        <div
          className="absolute inset-0 bg-primary origin-top z-20"
          style={{
            transform: revealed ? "scaleY(0)" : "scaleY(1)",
            transition: "transform 1.5s cubic-bezier(0.76, 0, 0.24, 1)",
          }}
        />
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-medium mb-2 group-hover:underline underline-offset-4">{project.title}</h3>
          <p className="text-muted-foreground text-sm">
            {project.category} · {project.location}
          </p>
        </div>
        <span className="text-muted-foreground/60 text-sm">{project.year}</span>
      </div>
    </article>
  )
}

export function Projects() {
  const [revealedImages, setRevealedImages] = useState<Set<number>>(new Set())
  const imageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = imageRefs.current.indexOf(entry.target as HTMLDivElement)
            if (index !== -1) {
              setRevealedImages((prev) => new Set(prev).add(projects[index].id))
            }
          }
        })
      },
      { threshold: 0.2 },
    )

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-32 md:py-29 bg-secondary/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши мероприятия</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Портфолио событий</h2>
          </div>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            Смотреть все события
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={project.id} ref={(el) => (imageRefs.current[index] = el)}>
              <ProjectCard project={project} revealed={revealedImages.has(project.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}