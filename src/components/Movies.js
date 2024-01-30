import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetMovieById from "../hooks/useGetMovieById";
import { useSelector } from "react-redux";
import { BACK_ICON } from "../utils/constants";

const Movies = () => {
  const param = useParams();
  const navigate = useNavigate();
  const movie = useSelector((store) => store?.movie?.mainVideo);
  useGetMovieById(param?.id);

  return (
    <div className="w-screen h-screen">
      <div
        className="absolute left-5 top-5 md:left-28 md:top-28"
        onClick={() => navigate("/browse")}
      >
        <img
          src={BACK_ICON}
          alt="back"
          className="w-10 h-10 md:w-20 md:h-20 "
        />
        <p className="hidden md:block font-bold text-white md:px-8">Back</p>
      </div>

      <iframe
        className="w-screen h-screen md:h-screen"
        src={`https://www.youtube.com/embed/${movie?.key}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&loop=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Movies;
