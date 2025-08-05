import MovieList from "@/components/MovieList";

export default function HomePage() {
  return <MovieList apiPath="movie/now_playing" />;
}
