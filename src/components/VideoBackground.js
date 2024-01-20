import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const movie = useSelector((store) => store.movie?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-screen h-screen"
        src={`https://www.youtube.com/embed/${movie?.key}?autoplay=1&mute=1&controls=0&rel=0&loop=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
