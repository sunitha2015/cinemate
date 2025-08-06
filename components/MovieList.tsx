"use client";

import { useFetch } from "@/hooks/useFetch";
import MovieCard from "@/components/MovieCard";
import { SkeletonCard } from "./Skeletoncard";

type MovieListProps = {
  apiPath: string;
};

export default function MovieList({ apiPath }: MovieListProps) {
  const { data: movies = [], loading } = useFetch(apiPath);

  return (
    <section className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
          : movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
      </div>
    </section>
  );
}
