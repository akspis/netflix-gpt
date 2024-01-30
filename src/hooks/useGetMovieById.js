import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { movieVideo } from "../redux/moviesSlice";

const useGetMovieById = (movieId) => {
  const dispatch = useDispatch();
  const getMovieByTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results?.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[0] : json?.results[0];
    dispatch(movieVideo(trailer));
  };

  useEffect(() => {
    getMovieByTrailer();
  }, [movieId]);
};
export default useGetMovieById;
