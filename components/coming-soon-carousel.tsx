"use client"

import { ComingSoonCard } from "@/components/coming-soon-card"
import { ArrowRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

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
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgtEL-qGizgoYsyK4cgApegsHuxkWqk0pTiBGiwBNo2SJrFpFns-Se7ehZfaTcAZAhqXJKoh3vSzHxvgwQ1WciXqt7Vz_dmacDyCUAkW4aPJMOHSgXV9pWyKF7a0xI8wjiboptJi6jp32_pi_QwLx8j6tPISfIqDbGsFl0RGkY3wQKEn_dt42SePM05-TSAPx4ruXCbpvK5-VrQWKtIMHyfI8elMJRVEuNjGW6MZCOqbvMc0JU7XrRxDyF5fGqtLONoWqHyWKDzCk",
    title: "Crimson Tide Rising",
    genre: "Action, Thriller",
    releaseDate: "July 12, 2024",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDRzP73xrpktd-c5Ri5cDpGm8LxeKmyEtUrhhrQgreR7AeTCjI7aeJLVPOqP9EhWe5e5-Dr78VMbcYuQyMtUTSPI-mfP6bOD-oWx5wzFAq28tnW7hgVwAzcXTMB9GLO-VgkrGMwYBkA4tbblIc87EG7gu3NmiF10S_IbReLjqTxdEp6jmmyZQBF5Aa8AlQCJg2fjxF296Xah9mYsE4vz9Oq7ONQlXu5P1u9P5C6zA3SaBFA2dp3qGq_ipbL8-byNHgdoJGIljbxtkg",
    title: "Starfall Chronicles",
    genre: "Sci-Fi, Adventure",
    releaseDate: "July 19, 2024",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCofOtj5Jt05DFFMUw5RBQA_EOy2P0FSfEO_FRQqIRwS7OaRTGUbTsIe7SdiU7NXBcwSxAJE_aj_kGrRgu_il9onGSD_FDzZ58KISG0L_8pLXAU9gVFUxt2ZWntGyHK8hW_PZERYpWTKiECC0FjmeFRV5zIR730m7Oa3iZwohPaPVpLjvhtA5w8eyV0M1VdpejQpBok4um9P6gFt2lBvAWYhk_pPFf5I8g3K9ja0yTGumnwc__51ytiMBTlJvN_0VVrfJVQ3XhnW8c",
    title: "Phantom Protocol",
    genre: "Spy, Action",
    releaseDate: "August 02, 2024",
  },
]

export function ComingSoonCarousel() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-2xl font-bold tracking-tight">Coming Soon</h3>
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
          {comingSoonMovies.map((movie, index) => (
            <CarouselItem
              key={`${movie.title}-${index}`}
              className="basis-full pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <ComingSoonCard {...movie} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4 size-10 border-red-500/20 bg-background/80 text-red-500 shadow-lg backdrop-blur-sm hover:bg-red-500 hover:text-white" />
        <CarouselNext className="-right-4 size-10 border-red-500/20 bg-background/80 text-red-500 shadow-lg backdrop-blur-sm hover:bg-red-500 hover:text-white" />
      </Carousel>
    </section>
  )
}
