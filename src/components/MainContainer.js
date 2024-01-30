import React from "react";
import VideoTitle from "./VideoTitle";
import useGetMovies from "../hooks/useGetMovies";
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopMovies from "../hooks/useTopMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const MainContainer = () => {
  useGetMovies();
  usePopularMovies();
  useTopMovies();
  useUpcomingMovies();
  const movies = useSelector((store) => store?.movie?.movieLists);
  if (!movies) return;
  const movie = movies[0];

  const { original_title, overview, id } = movie;
  return (
    <div className="h-screen bg-gradient-to-r from-black w-screen">
      <VideoTitle title={original_title} overview={overview} movieId={id} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
