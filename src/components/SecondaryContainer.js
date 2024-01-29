import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movie);
  if (!movies) return;

  return (
    <div className="bg-black p-5 md:p-10 relative z-10  w-screen">
      <div className="mt-0 md:-mt-64">
        <MovieList title={"Now Playing"} movies={movies.movieLists} />
        <MovieList title={"Popular"} movies={movies.popularMovie} />
        <MovieList title={"Top Rated"} movies={movies.topRatedMovie} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
