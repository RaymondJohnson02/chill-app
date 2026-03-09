import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

interface MovieCardProps {
  imageSrc?: string
  title?: string
  genre?: string
  duration?: string
  badge?: string
}

export function MovieCard({
  imageSrc = "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  title = "Batman : The Dark Knight",
  genre = "Action, Crime",
  duration = "2h 32m",
  badge,
}: MovieCardProps) {
  return (
    <div className="group/movie-card cursor-pointer">
      <div className="relative mb-3 aspect-[2/3] w-full overflow-hidden rounded-xl bg-muted">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover/movie-card:scale-110"
        />
        {badge && (
          <div className="absolute right-3 top-3 rounded bg-black/60 px-2 py-1 text-[10px] font-bold text-white backdrop-blur-md">
            {badge}
          </div>
        )}
      </div>
      <h4 className="line-clamp-1 font-bold transition-colors group-hover/movie-card:text-red-500">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground">
        {genre} • {duration}
      </p>
    </div>
  )
}
