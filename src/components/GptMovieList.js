import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const GptMovieList = () => {
  const { gptmovieName, gptMovieList } = useSelector((store) => store.gpt);

  return (
    gptmovieName && (
      <div className="bg-black opacity-90 p-8 mt-16 m-4">
        {gptmovieName?.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={gptMovieList[index]} />
        ))}
      </div>
    )
  );
};

export default GptMovieList;
