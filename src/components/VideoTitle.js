import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  const handleMovies = () => {
    console.log("first");
    navigate(`/browse/${movieId}`);
  };
  return (
    <div className="absolute md:top-[35%] top-[85%] left-8 md:left-20 text-white">
      <h1 className="font-bold text-2xl md:text-6xl">{title}</h1>
      <p className="hidden md:block w-1/3 py-6">{overview}</p>
      <div className="py-2">
        <button
          className="bg-white z-50 py-2 md:py-4 px-5 md:px-10 rounded-lg text-black text-lg md:text-xl font-bold hover:bg-opacity-80"
          onClick={handleMovies}
        >
          Play
        </button>
        <button className="inline-block bg-gray-500 py-2 md:py-4 px-5 md:px-10 rounded-lg mx-2 text-xl font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
