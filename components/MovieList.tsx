"use client";

import { useFetch } from "@/hooks/useFetch";
import MovieCard from "@/components/MovieCard";

type MovieListProps = {
  apiPath: string;
};

export default function MovieList({ apiPath }: MovieListProps) {
  const { data: movies = [] } = useFetch(apiPath);

  return (
    <section className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
}
