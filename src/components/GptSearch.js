import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG } from "../utils/constants";
import GptMovieList from "./GptMovieList";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG} alt="bg" />
      </div>
      <GptSearchBar />
      <GptMovieList />
    </div>
  );
};

export default GptSearch;
