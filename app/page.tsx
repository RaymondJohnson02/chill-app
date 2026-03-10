import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { NowShowingCarousel } from "@/components/now-showing-carousel"
import { ComingSoonCarousel } from "@/components/coming-soon-carousel"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1">
        <HeroBanner />
        <NowShowingCarousel />
        <ComingSoonCarousel />
      </main>

      <Footer />
    </div>
  )
}
