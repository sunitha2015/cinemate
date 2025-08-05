"use client"
import { Suspense } from "react";
import SearchMoviesPage from "@/components/SearchMoviesPage"; // or wherever it's located

export default function search() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchMoviesPage apiPath={"movie/search"} />
    </Suspense>
  );
}
