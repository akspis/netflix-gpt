export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const AVATAR_URL =
  "https://occ-0-6169-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e";

export const BG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const MOVIE_API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTA0ODQ2OTM3ZDExYjU1YTgwNzU3MGFmOWE2Mjg1OSIsInN1YiI6IjY1YWE0NGYxZTI2N2RlMDEzOGEzMDkyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kOGU2jdznF8Lptar2PX6NKkMMkpvi_l2fbAtuo5ekFQ";

export const API_KEY = "2904846937d11b55a807570af9a62859";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + MOVIE_API_TOKEN, //REACT_APP_MOVIE_API_TOKEN
    //
  },
};

export const CDN_IMG = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LNAG = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hindi",
    name: "Hindi",
  },
  {
    identifier: "spanish",
    name: "Spanish",
  },
];

export const OPENAI_KEY = "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"; //process.env.REACT_APP_OPENAI_KEY
