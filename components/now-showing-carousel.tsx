"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { MovieCard } from "@/components/movie-card"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

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
]

export function NowShowingCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (!el) return
    const cardWidth = el.querySelector<HTMLElement>(":scope > div")?.offsetWidth ?? 200
    const gap = 24 // gap-6 = 1.5rem = 24px
    const scrollAmount = (cardWidth + gap) * 2
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-bold tracking-tight">Now Showing</h3>
        <div className="flex items-center gap-2">
          {/* Arrow buttons */}
          <Button
            variant="outline"
            size="icon"
            className="size-9 rounded-full"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Scroll left"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-9 rounded-full"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Scroll right"
          >
            <ChevronRight className="size-5" />
          </Button>

          <a
            className="ml-2 flex items-center gap-1 text-sm font-semibold text-red-500 hover:underline"
            href="#"
          >
            View All <ArrowRight className="size-4" />
          </a>
        </div>
      </div>

      {/* Scrollable carousel */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-6 overflow-x-auto scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {movies.map((movie) => (
          <div key={movie.title} className="w-[calc((100%-96px)/5)] flex-shrink-0 min-w-[160px]">
            <MovieCard {...movie} />
          </div>
        ))}
      </div>
    </section>
  )
}
