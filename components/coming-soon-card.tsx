import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

interface ComingSoonCardProps {
  imageSrc: string
  title: string
  genre: string
  releaseDate: string
}

export function ComingSoonCard({
  imageSrc,
  title,
  genre,
  releaseDate,
}: ComingSoonCardProps) {
  return (
    <Card className="flex-row gap-4 overflow-hidden p-4 shadow-sm transition-shadow hover:shadow-md">
      <div className="h-36 w-24 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          className="h-full w-full object-cover"
          src={imageSrc}
          alt={title}
        />
      </div>
      <CardContent className="flex flex-col justify-center p-0">
        <span className="mb-1 text-xs font-bold text-red-500">
          {releaseDate}
        </span>
        <h4 className="mb-1 text-lg font-bold leading-tight">{title}</h4>
        <p className="mb-3 text-sm text-muted-foreground">{genre}</p>
        <Button variant="secondary" size="sm" className="w-fit text-xs font-bold">
          Remind Me
        </Button>
      </CardContent>
    </Card>
  )
}
