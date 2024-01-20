import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useTopMovies = () => {
  const dispatch = useDispatch();

  const getMovies = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await movieData.json();
    dispatch(addTopMovies(json?.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useTopMovies;
