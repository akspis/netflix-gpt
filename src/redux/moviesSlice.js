import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: {
    movieLists: null,
    trailerVideo: null,
  },
  reducers: {
    addMovies: (state, action) => {
      state.movieLists = action.payload;
    },
    trailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const { addMovies, trailerVideo } = moviesSlice.actions;
export default moviesSlice.reducer;
