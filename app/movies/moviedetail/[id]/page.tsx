"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Image, Link, Skeleton } from "@heroui/react"; // Assuming Skeleton exists
import noImage from "@/public/No-Image-Placeholder.svg.png";

type Genre = {
  id: number;
  name: string;
};

type Movie = {
  poster_path?: string;
  title?: string;
  tagline?: string;
  overview?: string;
  genres?: Genre[];
  vote_average?: number;
  vote_count?: number;
  runtime?: number;
  budget?: number;
  revenue?: number;
  release_date?: string;
  imdb_id?: string;
};

export default function MovieDetailPage() {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const movieId = Array.isArray(params.id) ? params.id[0] : params.id;

  const [movie, setMovie] = useState<Movie>({});
  const Backup = noImage.src;
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : Backup;

  useEffect(() => {
    async function fetchMovieDetail() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        );
        const json = await response.json();
        setMovie(json);
      } catch (err) {
        console.error("Failed to fetch movie:", err);
      } finally {
        setLoading(false);
      }
    }

    if (movieId) fetchMovieDetail();
  }, [movieId]);

  if (loading) {
    return (
      <div className="max-w-6xl my-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-6">
          <Skeleton className="w-full h-[450px] rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-24 w-full" />
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, idx) => (
                <Skeleton key={idx} className="h-8 w-20 rounded" />
              ))}
            </div>
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl my-10">
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-3 lg:gap-6">
        <Image src={image} className="lg:max-w-sm items-center justify-center flex" />
        <div className="px-2 lg:px-4">
          <h1 className="text-2xl font-bold text-center lg:text-left lg:text-4xl">{movie.title}</h1>
          <span className="text-center lg:text-left text-sm px-2 flex">{movie.tagline}</span>
          <p className="my-4 text-medium text-justify">{movie.overview || "No overview available."}</p>

          {movie.genres?.length ? (
            <p className="my-7 flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <span
                  className="mr-2 border border-gray-200 dark:border-gray-600 p-2"
                  key={genre.id}
                >
                  {genre.name}
                </span>
              ))}
            </p>
          ) : null}

          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="ms-2 font-bold text-gray-900 dark:text-white">
              {movie.vote_average ?? "-"}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-gray-900 dark:text-white">
              {movie.vote_count ?? "-"} reviews
            </span>
          </div>

          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movie.runtime ?? "-"}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{movie.budget ?? "-"}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{movie.revenue ?? "-"}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movie.release_date ?? "-"}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <Link
              target="_blank"
              href={`https://www.imdb.com/title/${movie.imdb_id}`}
              rel="noreferrer"
            >
              {movie.imdb_id ?? "-"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
