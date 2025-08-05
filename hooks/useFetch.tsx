import { useState, useEffect } from "react";

export const useFetch = (apiPath: string, queryTerm="") => {
    const [data, setData] = useState([]);
    // const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
    // console.log(process.env.NEXT_PUBLIC_TMDB_API_KEY);

    const urlnew = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${queryTerm}`
    console.log(urlnew);
    useEffect(() => {
        async function fetchMovies(){
          const response = await fetch(urlnew);
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [urlnew])

  return { data }
}