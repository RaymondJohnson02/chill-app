import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-slate-900 md:h-[500px]">
        {/* Gradient overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Background image */}
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdDZ_KsRoq36AkU05RQ0AwLH9WQ61MFZsL2lwY2VGgU8lb6BInqxbcBlXTmW0uySSKt5N2gC3m4u08bxDSl_6Ga68t_1YZGcdbn7RijlBiUStPwGOQnsYJrqizaOc5g5h6bhZfPHenq9gqVVzA856h2xJLicIipzxX9Opsjl9R96QVvr87RRQLMFywpSMdxr06rG81aSbZneiEhlx9GlgNaXTFEPy8OuEr6-4XgP2c2zL3-VjdvYwG1-jQdTUDCLg_ZKLnu5eMRzk"
          alt="Cinematic movie theater seating"
        />

        {/* Content */}
        <div className="relative z-20 flex h-full max-w-2xl flex-col justify-center px-8 md:px-16">
          <Badge className="mb-4 w-fit border-none bg-red-500/20 text-xs font-bold uppercase tracking-wider text-red-500">
            New Member Special
          </Badge>
          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            50% Off Your First Ticket
          </h2>
          <p className="mb-8 max-w-md text-lg leading-relaxed text-slate-200">
            Experience the magic of the big screen for less. Claim your discount
            and book your seats today.
          </p>
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="bg-red-500 px-8 py-6 text-base font-bold text-white transition-all hover:scale-105 hover:bg-red-600"
            >
              Claim Offer
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 bg-white/10 px-8 py-6 text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              View Movies
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
