import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG } from "../utils/constants";
import GptMovieList from "./GptMovieList";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BG} alt="bg" className="h-screen object-cover md:w-screen" />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieList />
      </div>
    </>
  );
};

export default GptSearch;
