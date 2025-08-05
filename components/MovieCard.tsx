"use client"
import { Card, CardBody, Spacer, Image, Button } from "@heroui/react";
import noImage from "@/public/No-Image-Placeholder.svg.png"

interface Movie {
  id: number;
  title: string;
  original_title: string;
  vote_average: number;
  poster_path: string;
  overview: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const {id, original_title,overview,poster_path} = movie;
const Backup = "/No-Image-Placeholder.svg.png";
    const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup ;

  return (
    <>
     <Card className="sm:transition-none xs:transition-none" >
      <CardBody className="px-3 pb-1">
        <Image
          alt="Card image"
          className="aspect-video w-full object-cover object-top h-[420px] "
          src={image}
          removeWrapper
          radius="lg"
        />
        <Spacer y={2} />
        <div className="flex flex-col gap-2 px-2">
          <p className="text-large font-medium">{original_title}</p>
          <p className="text-small text-default-400">
  {overview?.split(" ").slice(0, 20).join(" ") + (overview?.split(" ").length > 20 ? "..." : "")}
          </p>
          <Button as="a" href={`/movies/moviedetail/${id}`} variant="light">More Info</Button>
        </div>
      </CardBody>
      </Card>

    </>
  )
}

export default MovieCard