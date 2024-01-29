import React, { useRef } from "react";
import { lang } from "../utils/languageConstats";
import { useDispatch, useSelector } from "react-redux";
import { openai } from "../utils/openai";
import { addGptMovies } from "../redux/gptSlice";
import SeachMovies from "../hooks/useSearchMovie";

const GptSearchBar = () => {
  const inputRef = useRef(null);
  const langkey = useSelector((store) => store.lang.language);
  const dispatch = useDispatch();

  const handleMovieSearch = async () => {
    const query =
      "Act as a Movie Recommdation System and suggest some movies for the query :" +
      inputRef.current.value +
      ". only give me names of 5 movies, comma seprated like the example result given ahed. Example Result : golmal, sholay, hera pheri, de dana dan, padonsan ";

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    const movieNames = chatCompletion?.choices[0]?.message?.content.split(",");

    const searchMovieArray = movieNames?.map((movie) => SeachMovies(movie));
    const movieArrayList = await Promise.all(searchMovieArray);
    dispatch(
      addGptMovies({ gptmovieName: movieNames, gptMovieList: movieArrayList })
    );
  };

  return (
    <div className="pt-[45%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 z-10 grid grid-cols-12 md:bg-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="text"
          className="m-3 md:m-4 p-4 col-span-9 rounded-lg"
          placeholder={lang[langkey].langPlaceHolder}
        />
        <button
          className="m-3 md:m-4 p-4 bg-red-700 rounded-lg text-white col-span-3"
          onClick={handleMovieSearch}
        >
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
