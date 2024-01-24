import React from "react";
import { lang } from "../utils/languageConstats";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey = useSelector((store) => store.lang.language);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 z-10 grid grid-cols-12 bg-black">
        <input
          type="text"
          className="m-4 p-4 col-span-9"
          placeholder={lang[langkey].langPlaceHolder}
        />
        <button className="p-4 m-4 bg-red-700 rounded-lg text-white col-span-3">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
