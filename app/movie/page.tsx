"use client"

import { Header } from "@/components/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { Heart, Star, CalendarDays, MapPin, Film } from "lucide-react"

const cast = [
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeEGRMjaQtxltQLrinA8ePTF2kyqpj6X-YEBNxWoYXMFBXa8TJniyWyz18YXpoRxqwV9OReLJmHU_iXqK0rUvLX1ao6Sp-7UhIPOHzwsxooRNaYEJkqJioVkodo7eeG4FKwJeeUgN38kq3uURABU4IvZiNCNrX1Mr9W203_NiTfqfTzwfyGHLEkoTPSLuyP-e81EgPcUBsVXTTjxHxDt2NAnk1zTsvCqA8XHRpMq8mvUl97YOYHtiS-bLD9b6mruU-VwwaqXN2n6Q",
    name: "Leonardo D.",
    role: "Dom Cobb",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC58_gLHeR1Gnht_C82_Fzx-yrzhpfyuY6W_Qjcls7qOmUNNqOnwcEORPIkfzVJDpAKrLLTsjA_yVEzOu7ZaD8mzvgPBJXryoMOU-gwhCsis7VleTcoTO-mZieJr-febut6my2hPmcQmZcWDIChish67uGJyfI_KnwxiwwZxXAHjsd7Y1oMIFBu7RF1eibRuOy7teiS-gXmtpXbwcExUVTS7PGSHxrYzrHpRpduzeKIRaMKpW1rzatP6F9jfEwfZdqKrbvHA8QioQw",
    name: "Elliot Page",
    role: "Ariadne",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD0bHjHpP5sg1eGw6QFBIeH0edqqVG8VS7uK47JJTLErgQRtt--kEzPRjLxeQzZKVjHdhCM-0TyoBpGDc-g1vvAQ6G6kFcgkz7__WWXYFt0X8GV3kEpqdEO3kvB8f2lZDkibvVQ9KGBdUlw8MjnsbbahScgCyZZdYKexb5OcONGaRIjXtoPlXU4KzosjW6SHwXBY5AzNJVvyftbAFejoz8EJm61A-4ufbJqbqSf_6eBb9NcdlDHqubwSHdesNmTFjy1TvVf4ownIHM",
    name: "Tom Hardy",
    role: "Eames",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFI6vHpkgtg9VhUHz9pK3HbFzMKqUgheY6ZDO5doGZWHC1kLkl_4Gfl-KI6PRF9t_MYKmw4BbA5eV5ywagQGIi3C5gmddofXYfzguimsX1rjgOWKAR0A3MQg-p3EU5QmIia37eEmvBgUBYxi2XwE-wLRizUY5PHva5S8FGpdUyxj-z3LLFJcqpQz1Pb7tm48Yqp5SrbxRnSQrdg2WLVCMNbB-QMohKEY8mqOqGFVxZK6U2zYZuYoxfWEruqCJ_RY203y18LrYVIVI",
    name: "Marion C.",
    role: "Mal",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAK_Eg2c43yMn1cc6P9W_GvXCS2ytlv6fM9nCyBSp76ouxa2kxUJCz48TbLaWvOF16vWCYmBtwgzWbEEXn8E5rvf5Tkg_rycS__PWHp34-Fn5_yR1RvgJXtOIkuNogEUpea9S3u8ybg7lLOjEfPm1Ii-4-IYVZXn6AC9IedNgjoimp5e6mOYA_75TkuELzLUE6-IXV-cecjpVb6JeAC3KOtXyx1T7JDCcRhTAZwiM3hIV2TjRd5mTRO_IfnX7t3B4SVwN-2XsyxSCs",
    name: "C. Nolan",
    role: "Director",
  },
]

const similarMovies = [
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCl2GwW2Wq4tfjTAIqW5Y_ePGvTAUCVBaz-sDe1yFTvKGRzcuJHLL1hytf5z4Mp5QRC4ngc3BlbWR2MceZzb7nhOBa0DpIKvquYhTbUvl8AkHiGd0O-y69MNIwTDPClv5dorntHDizVgv1dF1PJo4bwtkJ9jdrfzJ1w04EI4NUrQpBCAbpZMJ05LdN9UUkiH5D4PXxOFS6BTZ30sBzhzFe9vHVkqxMP6IVjUI32b2UhoWfqKYxSXyD5nVqBA9Kiijj9BddG9F58x3M",
    title: "Interstellar",
    genre: "Sci-Fi",
    year: "2014",
    rating: "8.7",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhIaDcvUTYhUA5JRyNG2H7zLVzh0u111sRNf91VxuX0haM6I2PUmM5RI4B_p9_vAe5LCFITMlSPfW8h2_vN3DhY9s3hofvRWMEduVVP9NGwO2-PaIjH3tpCfAHIULOY1sV8KL1vi6hLp5JbE_jdNY-fr1vq1-LbPhh_Elu_CLbCNUNRJQEDIhGFEzywUV3OFIb8IEIrYMNKO9r7pI_R11h3SInq43OkQ90OrrfDvrJNrFQhjF5lPlSRx7ity3pCElyAej7jkV1XoQ",
    title: "Tenet",
    genre: "Action",
    year: "2020",
    rating: "7.3",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeSnhSIxae0UKlVXlGr5SRPPL9ACfbPUxetjN80U1e62TEdigM2SU83WE6kPyaiLi1wTahQ5YtjcgG0jQGRyNHyx4W8BRKqjDidnPh2lvpdG-y_XpS6Ga4O4rCVmSm9K4RTVeF3IGx2208GeQQ_7MDpG0fGT0FkcFhM00vmBarZNgbrAqhPJo8yun8p2dobok59YRlnP5uZkk8r-5d3ZsiuKpD4FM5TmzEbEHNC5FB2g1qS8YJl8a4CRguGSWHglCc66-5n8RWTco",
    title: "Memento",
    genre: "Mystery",
    year: "2000",
    rating: "8.4",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_oKlREBCTiwEc_0idS8j50gQ4r8kgAUGLtpn1NTW9rtY6Z1tWYzK8oLfGRbmNEYhYkg0xxv7oQ_7h6fT4KI91Qu_HDGUAGz9Uj4nrcua4ra4M_rbbglab6L3AGAjtt-uU2S9zVUICPZSIIhF3XRT1AS7jdKZLKX-EaG1H2EeV2E24Tbz_4WRVF5BaBYKDeDds6QbaPjxd3wVWDF4v1vic3IllHsK2on0ZO9dUxbgdQYOvUYvgTlSwdctz6YKlZ3B4UQVdT22VLXw",
    title: "Dunkirk",
    genre: "War",
    year: "2017",
    rating: "7.8",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7OydbBqQ1VUx1qFUwce8_59U3Tx6KAccEEL2vsyxwZr33zoBhBXUx9vrMYosuSKYqfHWKElJG8Js6ZSkU9HKad-IIqJaxGJaMcj4ctACZCusljQBK80TIQE0-wJ1DFsDuNiJyk4Hlirt9VQcuUKhCUWACYe5nKa5zJyeFpnbQyVMIJdxAonI0IWUtuy_j0fB6m6ZEcbenEV1uohpwL6xMiYgH1TNlZVB5CuNLHsVQNjgka89hpuuoM94l-eR-wNamfAJLZGrKXzA",
    title: "The Prestige",
    genre: "Drama",
    year: "2006",
    rating: "8.5",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCl2GwW2Wq4tfjTAIqW5Y_ePGvTAUCVBaz-sDe1yFTvKGRzcuJHLL1hytf5z4Mp5QRC4ngc3BlbWR2MceZzb7nhOBa0DpIKvquYhTbUvl8AkHiGd0O-y69MNIwTDPClv5dorntHDizVgv1dF1PJo4bwtkJ9jdrfzJ1w04EI4NUrQpBCAbpZMJ05LdN9UUkiH5D4PXxOFS6BTZ30sBzhzFe9vHVkqxMP6IVjUI32b2UhoWfqKYxSXyD5nVqBA9Kiijj9BddG9F58x3M",
    title: "The Dark Knight",
    genre: "Action",
    year: "2008",
    rating: "9.0",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAhIaDcvUTYhUA5JRyNG2H7zLVzh0u111sRNf91VxuX0haM6I2PUmM5RI4B_p9_vAe5LCFITMlSPfW8h2_vN3DhY9s3hofvRWMEduVVP9NGwO2-PaIjH3tpCfAHIULOY1sV8KL1vi6hLp5JbE_jdNY-fr1vq1-LbPhh_Elu_CLbCNUNRJQEDIhGFEzywUV3OFIb8IEIrYMNKO9r7pI_R11h3SInq43OkQ90OrrfDvrJNrFQhjF5lPlSRx7ity3pCElyAej7jkV1XoQ",
    title: "Shutter Island",
    genre: "Thriller",
    year: "2010",
    rating: "8.2",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeSnhSIxae0UKlVXlGr5SRPPL9ACfbPUxetjN80U1e62TEdigM2SU83WE6kPyaiLi1wTahQ5YtjcgG0jQGRyNHyx4W8BRKqjDidnPh2lvpdG-y_XpS6Ga4O4rCVmSm9K4RTVeF3IGx2208GeQQ_7MDpG0fGT0FkcFhM00vmBarZNgbrAqhPJo8yun8p2dobok59YRlnP5uZkk8r-5d3ZsiuKpD4FM5TmzEbEHNC5FB2g1qS8YJl8a4CRguGSWHglCc66-5n8RWTco",
    title: "Fight Club",
    genre: "Drama",
    year: "1999",
    rating: "8.8",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_oKlREBCTiwEc_0idS8j50gQ4r8kgAUGLtpn1NTW9rtY6Z1tWYzK8oLfGRbmNEYhYkg0xxv7oQ_7h6fT4KI91Qu_HDGUAGz9Uj4nrcua4ra4M_rbbglab6L3AGAjtt-uU2S9zVUICPZSIIhF3XRT1AS7jdKZLKX-EaG1H2EeV2E24Tbz_4WRVF5BaBYKDeDds6QbaPjxd3wVWDF4v1vic3IllHsK2on0ZO9dUxbgdQYOvUYvgTlSwdctz6YKlZ3B4UQVdT22VLXw",
    title: "The Matrix",
    genre: "Sci-Fi",
    year: "1999",
    rating: "8.7",
  },
  {
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC7OydbBqQ1VUx1qFUwce8_59U3Tx6KAccEEL2vsyxwZr33zoBhBXUx9vrMYosuSKYqfHWKElJG8Js6ZSkU9HKad-IIqJaxGJaMcj4ctACZCusljQBK80TIQE0-wJ1DFsDuNiJyk4Hlirt9VQcuUKhCUWACYe5nKa5zJyeFpnbQyVMIJdxAonI0IWUtuy_j0fB6m6ZEcbenEV1uohpwL6xMiYgH1TNlZVB5CuNLHsVQNjgka89hpuuoM94l-eR-wNamfAJLZGrKXzA",
    title: "Blade Runner 2049",
    genre: "Sci-Fi",
    year: "2017",
    rating: "8.0",
  },
]

export default function MovieDetailPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden">
      <Header />

      <main className="flex-1">
        {/* ── Hero ── */}
        <div className="relative h-[40vh] w-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAElh1-zSTYTUViMrq-vmsEOKpHeOl1a5yWSS5CAl4n33JLDWIK2dCiNiVsBOIDZplI1S6NmYDPJksmU8QCTAMP1BrWGwGyr5_ddgFGMuBHV5gfCMysYQbOdKwtCYq5Y5RqOSBNHdsfz7fX6XwxqwQocuzznUEhNj1Eu91MV_X4maja7F03ocB7E4pDAg7Mhad69ZlzrnNAfkkVtGVVcXzNPSDFRGgR2BImtYsQlkkR-KQFMKHF6U-u9EmIX1PpvleX2sfW57RCf0g')`,
            }}
          />
          <div className="relative z-20 flex h-full items-end px-6 pb-8 md:px-20">
            <div className="flex flex-col gap-4 md:flex-row md:items-end">
              <div className="hidden md:block w-40 flex-shrink-0 overflow-hidden rounded-xl border-4 border-white shadow-2xl shadow-red-500/20">
                <img
                  className="aspect-[2/3] w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHj67RL59XMqSW2kQ94pfy6t1TzclX4PJw7TrUTOOfeIcXsXwvMxdOuHUxW4uh_N2uoqT3gtTb7F75lVj9oDAfWHQq5oWfYgPNwLIMDclD-s0pniZp8A1oHdUY7J04Ex8UhrwFayP6XeJBRbbd2mexVwvNVL5gHwHt3DMzhu45h6GHD7ohOtxnPLlbqbHwnnJkGAro4oqzWeaOxVNnk98wc8j9DHBrrpaLbMwn_NywnN1nfd5a4WnX-LQsW242NGn5NNMqrg-PGCI"
                  alt="Inception poster"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  <Badge className="border-none bg-red-500 text-xs font-bold uppercase tracking-wider text-white">
                    Trending
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs font-bold uppercase tracking-wider"
                  >
                    IMAX
                  </Badge>
                </div>
                <h2 className="text-4xl font-black leading-tight md:text-6xl">
                  Inception
                </h2>
                <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-muted-foreground">
                  <span className="flex items-center gap-1 text-red-500">
                    <Star className="size-4 fill-red-500" />
                    <span className="font-bold text-foreground">8.8/10</span>
                  </span>
                  <span>•</span>
                  <span>Sci‑Fi / Action</span>
                  <span>•</span>
                  <span>2h 28m</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

            {/* LEFT: details */}
            <div className="space-y-10 lg:col-span-2">

              {/* mobile CTA */}
              <div className="flex items-center gap-4 lg:hidden">
                <Button className="flex-1 bg-red-500 py-6 text-base font-bold text-white hover:bg-red-600">
                  Book Tickets
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-14 rounded-xl text-red-500"
                >
                  <Heart className="size-5" />
                </Button>
              </div>

              {/* Synopsis */}
              <section>
                <h3 className="mb-4 text-2xl font-bold">Synopsis</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  A thief who steals corporate secrets through the use of
                  dream-sharing technology is given the inverse task of planting
                  an idea into the mind of a C.E.O. Dom Cobb is a skilled thief,
                  the absolute best in the dangerous art of extraction, stealing
                  valuable secrets from deep within the subconscious during the
                  dream state, when the mind is at its most vulnerable.
                </p>
              </section>

              {/* Cast & Crew */}
              <section>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Cast &amp; Crew</h3>
                  <button className="text-sm font-semibold text-red-500 hover:underline">
                    See All
                  </button>
                </div>
                <div
                  className="flex gap-6 overflow-x-auto pb-4"
                  style={{ scrollbarWidth: "none" }}
                >
                  {cast.map((person) => (
                    <div
                      key={person.name}
                      className="flex shrink-0 flex-col items-center gap-3"
                    >
                      <div className="size-20 overflow-hidden rounded-full ring-2 ring-red-500/10 ring-offset-2">
                        <img
                          className="h-full w-full object-cover"
                          src={person.imageSrc}
                          alt={person.name}
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold">{person.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {person.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* RIGHT: booking card */}
            <div className="hidden lg:block">
              <Card className="sticky top-24 gap-0 rounded-2xl border-red-500/5 p-8 shadow-xl shadow-red-500/5">
                <CardContent className="flex flex-col gap-6 p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Starting from
                      </p>
                      <p className="text-3xl font-black">$12.50</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="size-11 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600"
                    >
                      <Heart className="size-5" />
                    </Button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
                      <CalendarDays className="size-5 shrink-0 text-red-500" />
                      <div>
                        <p className="text-xs text-muted-foreground">Date</p>
                        <p className="text-sm font-bold">Sat, 24 May 2024</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
                      <MapPin className="size-5 shrink-0 text-red-500" />
                      <div>
                        <p className="text-xs text-muted-foreground">Cinema</p>
                        <p className="text-sm font-bold">AMC Century City 15</p>
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-red-500 py-6 text-base font-bold text-white shadow-lg shadow-red-500/30 hover:bg-red-600 active:scale-95">
                    Book Now
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Free cancellation up to 2 hours before
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* ── Similar Movies Carousel ── */}
        <section className="bg-red-500/5 px-6 py-16 md:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 flex items-center justify-between">
              <h3 className="text-2xl font-bold">You May Also Like</h3>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {similarMovies.map((movie, index) => (
                  <CarouselItem
                    key={`${movie.title}-${index}`}
                    className="basis-1/2 pl-4 md:basis-1/3 lg:basis-1/5"
                  >
                    <div className="group flex cursor-pointer flex-col gap-2">
                      <div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-muted">
                        <img
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                          src={movie.imageSrc}
                          alt={movie.title}
                        />
                        {/* Rating overlay */}
                        <div className="absolute top-2 right-2 flex items-center gap-1 rounded-lg bg-black/60 px-2 py-1 backdrop-blur-sm">
                          <Star className="size-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs font-bold text-white">
                            {movie.rating}
                          </span>
                        </div>
                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      </div>
                      <p className="truncate font-bold transition-colors group-hover:text-red-500">
                        {movie.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {movie.genre} • {movie.year}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 size-10 border-red-500/20 bg-background/80 text-red-500 shadow-lg backdrop-blur-sm hover:bg-red-500 hover:text-white" />
              <CarouselNext className="-right-4 size-10 border-red-500/20 bg-background/80 text-red-500 shadow-lg backdrop-blur-sm hover:bg-red-500 hover:text-white" />
            </Carousel>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-900 px-6 py-12 text-slate-400 md:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-3 text-white">
            <Film className="size-5 text-red-500" />
            <span className="text-xl font-bold">CinemaGo</span>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <a className="transition-colors hover:text-red-500" href="/">
              Movies
            </a>
            <a className="transition-colors hover:text-red-500" href="#">
              Cinemas
            </a>
            <a className="transition-colors hover:text-red-500" href="#">
              Offers
            </a>
            <a className="transition-colors hover:text-red-500" href="#">
              Support
            </a>
          </div>
          <p className="text-xs">© 2024 CinemaGo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
