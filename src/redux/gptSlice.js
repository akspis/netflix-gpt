import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptPage: false,
    gptmovieName: null,
    gptMovieList: null,
  },
  reducers: {
    togglePageChange: (state) => {
      state.showGptPage = !state.showGptPage;
    },
    addGptMovies: (state, action) => {
      const { gptmovieName, gptMovieList } = action.payload;
      state.gptMovieList = gptMovieList;
      state.gptmovieName = gptmovieName;
    },
    removeMovies: (state) => {
      state.gptMovieList = null;
      state.gptmovieName = null;
    },
  },
});

export const { togglePageChange, addGptMovies, removeMovies } =
  gptSlice.actions;
export default gptSlice.reducer;
