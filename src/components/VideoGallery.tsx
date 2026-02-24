const videos = [
  { id: 1, driveId: "12Bu1Fn5fmoEH0ANLG8jnb2oQHifVWIdK", title: "Видео 1" },
  { id: 2, driveId: "", title: "Видео 2" },
  { id: 3, driveId: "", title: "Видео 3" },
  { id: 4, driveId: "", title: "Видео 4" },
  { id: 5, driveId: "", title: "Видео 5" },
  { id: 6, driveId: "", title: "Видео 6" },
]

function VideoCard({ driveId, title }: { driveId: string; title: string }) {
  return (
    <div className="relative overflow-hidden aspect-video bg-secondary rounded-sm group">
      {driveId ? (
        <iframe
          src={`https://drive.google.com/file/d/${driveId}/preview`}
          className="w-full h-full"
          allow="autoplay"
          allowFullScreen
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
            <VideoCard key={video.id} driveId={video.driveId} title={video.title} />
          ))}
        </div>
      </div>
    </section>
  )
}
