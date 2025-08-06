import { useState, useEffect } from "react";

export const useFetch = (apiPath: string, queryTerm = "") => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${queryTerm}`;
    setLoading(true);

    async function fetchMovies() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results || []);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setData([]); // fallback to empty data
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [apiPath, queryTerm]); // safe dependencies

  return { data, loading };
};
