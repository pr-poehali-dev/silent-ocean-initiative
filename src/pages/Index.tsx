import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { Philosophy } from "../components/Philosophy"
import { LaraAbout } from "../components/LaraAbout"
import { Projects } from "../components/Projects"
import { VideoGallery } from "../components/VideoGallery"
import { Expertise } from "../components/Expertise"
import { FAQ } from "../components/FAQ"
import { CallToAction } from "../components/CallToAction"
import { Footer } from "../components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <LaraAbout />
      <Projects />
      <VideoGallery />
      <Expertise />
      <FAQ />
      <CallToAction />
      <Footer />
    </main>
  )
}