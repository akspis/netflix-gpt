import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovie = useSelector((store) => store.movie.popularMovie);

  const getMovies = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await movieData.json();
    dispatch(addPopularMovies(json?.results));
  };
  useEffect(() => {
    !popularMovie && getMovies();
  }, []);
};

export default usePopularMovies;
