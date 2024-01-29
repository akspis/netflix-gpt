import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" bg absolute md:top-[35%] top-[85%] left-8 md:left-20 text-white">
      <h1 className="font-bold text-2xl md:text-6xl">{title}</h1>
      <p className="hidden md:block w-1/3 py-6">{overview}</p>
      <div className="py-2">
        <button className="bg-white py-2 md:py-4 px-5 md:px-10 rounded-lg text-black text-lg md:text-xl font-bold hover:bg-opacity-80">
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
