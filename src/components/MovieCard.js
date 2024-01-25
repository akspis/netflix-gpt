import React from "react";
import { CDN_IMG } from "../utils/constants";
import "../styles/index.css";

const MovieCard = ({ url }) => {
  if (!url) return null;
  return (
    <div className={`w-52 p-4 card`}>
      <img src={CDN_IMG + url} />
    </div>
  );
};

export default MovieCard;
