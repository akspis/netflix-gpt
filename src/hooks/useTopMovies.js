import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useTopMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovie = useSelector((store) => store.movie.topRatedMovie);

  const getMovies = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await movieData.json();
    dispatch(addTopMovies(json?.results));
  };
  useEffect(() => {
    !topRatedMovie && getMovies();
  }, []);
};

export default useTopMovies;
