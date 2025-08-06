'use client';

import { useFetch } from "@/hooks/useFetch";
import MovieCard from "@/components/MovieCard";
import { useSearchParams } from "next/navigation";
import { SkeletonCard } from "./Skeletoncard";
type MovieListProps = {
  apiPath: string;
};
export default function SearchMoviesPage({ apiPath }: MovieListProps) {
  const searchParams = useSearchParams();
  const queryTerm = searchParams.get("q") || "";

  const { data: movies = [], loading } = useFetch(apiPath, queryTerm);

  return (
    <section className="p-4">
      {movies.length === 0 ? (
        <p className="text-center text-gray-500 text-3xl">
          No results found for "{queryTerm}"
        </p>
      ) : (
        <div>
          <p className="text-center text-gray-500 text-3xl my-6">
            Results for "{queryTerm}"
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {loading
                      ? Array.from({ length: 6 }).map((_, index) => <SkeletonCard key={index} />)
                      : movies.map((movie, index) => <MovieCard key={index} movie={movie} />)}
          </div>
        </div>
      )}
    </section>
  );
}
