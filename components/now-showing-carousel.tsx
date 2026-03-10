"use client"

import { MovieCard } from "@/components/movie-card"
import { ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

const movies = [
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuc0O0_U_W_C8m391OTIShvgw99XY33uH2USDfM9RhN65LKqVkz6MtZ9yK3WUUV1j5YOG_DO7qdWjFmskNyCyL0UWQgJxmJ4gEFnKMzsmNOc8rB4rt76imJU8dzVWTKU_1Y0ElnKZdgNQiQt59hb8BWBq5KSK5Pcf7hJXsIPP9dFHNOaW1k-BuvV5p7OA_D1JbVErJ3mKm2rFnVznwVDhqgcmQG0E_tgyd60Mtn4tKshQ--N6GkjoE8QAla7q2VyudbFrsGD5ToIA",
    title: "Beyond the Horizon",
    genre: "Action, Sci-Fi",
    duration: "2h 15m",
    badge: "4K",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRzP73xrpktd-c5Ri5cDpGm8LxeKmyEtUrhhrQgreR7AeTCjI7aeJLVPOqP9EhWe5e5-Dr78VMbcYuQyMtUTSPI-mfP6bOD-oWx5wzFAq28tnW7hgVwAzcXTMB9GLO-VgkrGMwYBkA4tbblIc87EG7gu3NmiF10S_IbReLjqTxdEp6jmmyZQBF5Aa8AlQCJg2fjxF296Xah9mYsE4vz9Oq7ONQlXu5P1u9P5C6zA3SaBFA2dp3qGq_ipbL8-byNHgdoJGIljbxtkg",
    title: "Shadows in the Mist",
    genre: "Mystery, Thriller",
    duration: "1h 45m",
    badge: "IMAX",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCofOtj5Jt05DFFMUw5RBQA_EOy2P0FSfEO_FRQqIRwS7OaRTGUbTsIe7SdiU7NXBcwSxAJE_aj_kGrRgu_il9onGSD_FDzZ58KISG0L_8pLXAU9gVFUxt2ZWntGyHK8hW_PZERYpWTKiECC0FjmeFRV5zIR730m7Oa3iZwohPaPVpLjvhtA5w8eyV0M1VdpejQpBok4um9P6gFt2lBvAWYhk_pPFf5I8g3K9ja0yTGumnwc__51ytiMBTlJvN_0VVrfJVQ3XhnW8c",
    title: "Eternal Echoes",
    genre: "Drama, Romance",
    duration: "2h 05m",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgtEL-qGizgoYsyK4cgApegsHuxkWqk0pTiBGiwBNo2SJrFpFns-Se7ehZfaTcAZAhqXJKoh3vSzHxvgwQ1WciXqt7Vz_dmacDyCUAkW4aPJMOHSgXV9pWyKF7a0xI8wjiboptJi6jp32_pi_QwLx8j6tPISfIqDbGsFl0RGkY3wQKEn_dt42SePM05-TSAPx4ruXCbpvK5-VrQWKtIMHyfI8elMJRVEuNjGW6MZCOqbvMc0JU7XrRxDyF5fGqtLONoWqHyWKDzCk",
    title: "Peak of Everest",
    genre: "Adventure",
    duration: "1h 58m",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCf8H4uY04APn7jsKfdarxsWGiP_6Thaz1ZZ49hXoyoT0Ux4kxKPchWV3f1dIGBLuA2AZ7TkAxBHjtXjPWmUzM62YOitL3E4_Zt4LnwvYyTu2JSFQgLGAspEDafX07f967b8Qf2XxW0B5XxSgm2650NxoWOqltiXU-XmK_oGkO4uQQ_c_EK7tycYyiwebokLw5neWcE3CvoNbgdSCta4o0OOUqICgr5TQi6eXs1AM23zz7oZJkw9LYXGM_CvbfNZ2VuiuSWPRHkypg",
    title: "Whisper of Spirits",
    genre: "Fantasy, Horror",
    duration: "2h 20m",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRzP73xrpktd-c5Ri5cDpGm8LxeKmyEtUrhhrQgreR7AeTCjI7aeJLVPOqP9EhWe5e5-Dr78VMbcYuQyMtUTSPI-mfP6bOD-oWx5wzFAq28tnW7hgVwAzcXTMB9GLO-VgkrGMwYBkA4tbblIc87EG7gu3NmiF10S_IbReLjqTxdEp6jmmyZQBF5Aa8AlQCJg2fjxF296Xah9mYsE4vz9Oq7ONQlXu5P1u9P5C6zA3SaBFA2dp3qGq_ipbL8-byNHgdoJGIljbxtkg",
    title: "Midnight Express",
    genre: "Crime, Drama",
    duration: "2h 10m",
    badge: "Dolby",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBuc0O0_U_W_C8m391OTIShvgw99XY33uH2USDfM9RhN65LKqVkz6MtZ9yK3WUUV1j5YOG_DO7qdWjFmskNyCyL0UWQgJxmJ4gEFnKMzsmNOc8rB4rt76imJU8dzVWTKU_1Y0ElnKZdgNQiQt59hb8BWBq5KSK5Pcf7hJXsIPP9dFHNOaW1k-BuvV5p7OA_D1JbVErJ3mKm2rFnVznwVDhqgcmQG0E_tgyd60Mtn4tKshQ--N6GkjoE8QAla7q2VyudbFrsGD5ToIA",
    title: "Solar Flare",
    genre: "Sci-Fi, Action",
    duration: "2h 30m",
    badge: "IMAX",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCofOtj5Jt05DFFMUw5RBQA_EOy2P0FSfEO_FRQqIRwS7OaRTGUbTsIe7SdiU7NXBcwSxAJE_aj_kGrRgu_il9onGSD_FDzZ58KISG0L_8pLXAU9gVFUxt2ZWntGyHK8hW_PZERYpWTKiECC0FjmeFRV5zIR730m7Oa3iZwohPaPVpLjvhtA5w8eyV0M1VdpejQpBok4um9P6gFt2lBvAWYhk_pPFf5I8g3K9ja0yTGumnwc__51ytiMBTlJvN_0VVrfJVQ3XhnW8c",
    title: "The Last Waltz",
    genre: "Musical, Drama",
    duration: "1h 50m",
  },
]

export function NowShowingCarousel() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-bold tracking-tight">Now Showing</h3>
        <a
          className="flex items-center gap-1 text-sm font-semibold text-red-500 hover:underline"
          href="#"
        >
          View All <ArrowRight className="size-4" />
        </a>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {movies.map((movie, index) => (
            <CarouselItem
              key={`${movie.title}-${index}`}
              className="basis-1/2 pl-4 md:basis-1/3 lg:basis-1/5"
            >
              <MovieCard {...movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 size-10 border-red-500/20 bg-background/80 text-red-500 shadow-lg backdrop-blur-sm hover:bg-red-500 hover:text-white" />
        <CarouselNext className="-right-4 size-10 border-red-500/20 bg-background/80 text-red-500 shadow-lg backdrop-blur-sm hover:bg-red-500 hover:text-white" />
      </Carousel>
    </section>
  )
}
