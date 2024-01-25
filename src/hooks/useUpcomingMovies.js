import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovie = useSelector((store) => store.movie.upcomingMovie);

  const getMovies = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await movieData.json();
    dispatch(addUpcomingMovies(json?.results));
  };
  useEffect(() => {
    !upcomingMovie && getMovies();
  }, []);
};

export default useUpcomingMovies;
