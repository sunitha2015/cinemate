"use client"
import { Suspense } from "react";
import SearchMoviesPage from "@/components/SearchMoviesPage"; 

export default function search() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchMoviesPage apiPath={"search/movie"} />
    </Suspense>
  );
}
