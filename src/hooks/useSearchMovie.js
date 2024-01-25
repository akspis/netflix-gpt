import { API_OPTIONS } from "../utils/constants";

const SeachMovies = async (movie) => {
  const data = await fetch(
    "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US",
    API_OPTIONS
  );
  const json = await data.json();
  return json.results;
};

export default SeachMovies;
