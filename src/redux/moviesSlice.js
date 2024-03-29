import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    movieLists: null,
    popularMovie: null,
    topRatedMovie: null,
    upcomingMovie: null,
    trailerVideo: null,
    mainVideo: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movieLists = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovie = action.payload;
    },
    addTopMovies: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    trailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    movieVideo: (state, action) => {
      state.mainVideo = action.payload;
    },
  },
});

export const {
  addMovies,
  trailerVideo,
  addPopularMovies,
  addTopMovies,
  addUpcomingMovies,
  movieVideo,
} = moviesSlice.actions;
export default moviesSlice.reducer;
