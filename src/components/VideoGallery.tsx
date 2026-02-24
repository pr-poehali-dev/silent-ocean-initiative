import { useState } from "react"

const PLACEHOLDER_IMG = "https://cdn.poehali.dev/projects/19089321-baea-4afd-b17d-4ea2719a588d/files/d827f607-f40a-4fc7-84b2-a4072006bfae.jpg"

const videos = [
  { id: 1, embedUrl: "https://rutube.ru/play/embed/17c43a0051dde934b7398721fec34bf6/?p=4FDxBUOkBsNtDh7_JYonGQ", preview: PLACEHOLDER_IMG, title: "Видео 1" },
  { id: 2, embedUrl: "", preview: PLACEHOLDER_IMG, title: "Видео 2" },
  { id: 3, embedUrl: "", preview: PLACEHOLDER_IMG, title: "Видео 3" },
  { id: 4, embedUrl: "", preview: PLACEHOLDER_IMG, title: "Видео 4" },
  { id: 5, embedUrl: "", preview: PLACEHOLDER_IMG, title: "Видео 5" },
  { id: 6, embedUrl: "", preview: PLACEHOLDER_IMG, title: "Видео 6" },
]

function VideoCard({ embedUrl, preview, title }: { embedUrl: string; preview: string; title: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative overflow-hidden aspect-video bg-secondary rounded-sm">
      {playing && embedUrl ? (
        <iframe
          src={`${embedUrl}&autoplay=1`}
          className="w-full h-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => embedUrl && setPlaying(true)}
          className={`w-full h-full relative flex items-center justify-center group ${!embedUrl ? "cursor-default" : "cursor-pointer"}`}
        >
          <img src={preview} alt={title} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
          {embedUrl && (
            <div className="relative w-16 h-16 bg-white/10 border border-white/40 rounded-full flex items-center justify-center group-hover:bg-white/25 transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          )}
        </button>
      )}
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
            <VideoCard key={video.id} embedUrl={video.embedUrl} preview={video.preview} title={video.title} />
          ))}
        </div>
      </div>
    </section>
  )
}