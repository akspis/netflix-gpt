import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG} alt="bg" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
