import { Header } from "@/components/header"
import { HeroBanner } from "@/components/hero-banner"
import { NowShowingCarousel } from "@/components/now-showing-carousel"
import { ComingSoonCard } from "@/components/coming-soon-card"
import { Footer } from "@/components/footer"

const comingSoonMovies = [
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwqdxKVF4dXW1H6t0ylU8m1-Jp3OAueNo1VJ8G3KLPPV5QTcuzR_YdKbOroDkgoZ3jRsLPZZm1xoOG-uOho-uF_9Nsz4R6_mlW0-G0BN0O7bq3NGmbrCxeJkIWRCaHoVoyOMMy3NRv3k55XcJxcXgiYa7QPyRZz7uCbXRcSR1PuthCjws02gzT5C7glIQcyZlFXqzDgFDTwJRiIPvTIPlAH2ZMXP81jkQccudxyFDaM8YG1IDqaTxLx-1eTyAZ3R5DPxULdZQGlrU",
    title: "Neon City Dreams",
    genre: "Animation, Music",
    releaseDate: "June 15, 2024",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCS65u-FNv4grLmM8x099_nadNUd6Cw2iJMve8TlJJQzzxHgKy77zGZ-lp50F2uM6eUCLoRj3IcfzVL7Gt24aNPrtDxiSMEFtd3A2OX2bV2GVzxZDoFd9dLAyVaEdeIH8uQ0EztkKp3454oookHLh5DrDfKNsCPVVLu_6SiwYvoOz14Qn9yhCeZxyhPBeoisLfklDnUW26v76v9EtF7oreg0HPuIniw-iR5hQLC17hlSGC2-RBjMmWZ_tcjd_EU7v2IJr-9T-9UAJo",
    title: "The Last Dynasty",
    genre: "History, Epic",
    releaseDate: "June 22, 2024",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf8H4uY04APn7jsKfdarxsWGiP_6Thaz1ZZ49hXoyoT0Ux4kxKPchWV3f1dIGBLuA2AZ7TkAxBHjtXjPWmUzM62YOitL3E4_Zt4LnwvYyTu2JSFQgLGAspEDafX07f967b8Qf2XxW0B5XxSgm2650NxoWOqltiXU-XmK_oGkO4uQQ_c_EK7tycYyiwebokLw5neWcE3CvoNbgdSCta4o0OOUqICgr5TQi6eXs1AM23zz7oZJkw9LYXGM_CvbfNZ2VuiuSWPRHkypg",
    title: "Infinite Void",
    genre: "Sci-Fi, Thriller",
    releaseDate: "July 05, 2024",
  },
]

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1">
        <HeroBanner />
        <NowShowingCarousel />

        {/* Coming Soon */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-2xl font-bold tracking-tight">Coming Soon</h3>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {comingSoonMovies.map((movie) => (
              <ComingSoonCard key={movie.title} {...movie} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
