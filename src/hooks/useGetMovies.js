import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useGetMovies = () => {
  const dispatch = useDispatch();

  const movies = useSelector((store) => store.movie.movieLists);

  const getMovies = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await movieData.json();
    dispatch(addMovies(json?.results));
  };
  useEffect(() => {
    !movies && getMovies();
  }, []);
};

export default useGetMovies;
