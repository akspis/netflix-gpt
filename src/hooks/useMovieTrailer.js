import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { trailerVideo } from "../redux/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movie.trailerVideo);

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
    dispatch(trailerVideo(trailer));
  };
  useEffect(() => {
    !trailer && getMovieByTrailer();
  }, []);
};
export default useMovieTrailer;
