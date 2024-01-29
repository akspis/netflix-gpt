import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="p-3 md:p-6">
      <h1 className="text-xl md:text-3xl text-white p-3 md:p-6">{title}</h1>
      <div className="flex overflow-x-scroll scrrollbar">
        <div className="flex">
          {movies?.map((item) => (
            <MovieCard key={item?.id} url={item?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
