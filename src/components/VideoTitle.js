import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" bg absolute top-[35%] left-20 text-white">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="w-1/3 py-6">{overview}</p>
      <div>
        <button className="bg-white py-4 px-10 rounded-lg text-black text-xl font-bold hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 py-4 px-10 rounded-lg mx-2 text-xl font-bold">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
