import { useEffect, useRef, useState } from "react"

const videos = [
  { id: 1, src: "", title: "Видео 1" },
  { id: 2, src: "", title: "Видео 2" },
  { id: 3, src: "", title: "Видео 3" },
  { id: 4, src: "", title: "Видео 4" },
  { id: 5, src: "", title: "Видео 5" },
  { id: 6, src: "", title: "Видео 6" },
]

function VideoCard({ src, title }: { src: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {})
          } else {
            videoRef.current.pause()
          }
        }
      },
      { threshold: 0.5 },
    )

    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden aspect-video bg-secondary rounded-sm group"
    >
      {src ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-secondary">
          <div className="text-center text-muted-foreground">
            <div className="w-12 h-12 border border-muted-foreground/30 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
            <p className="text-sm">{title}</p>
          </div>
        </div>
      )}
      <div
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${isVisible ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  )
}

export function VideoGallery() {
  return (
    <section className="py-32 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Наши мероприятия в деталях</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">Видеогалерея</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} src={video.src} title={video.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
