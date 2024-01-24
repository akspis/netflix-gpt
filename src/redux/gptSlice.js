import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptPage: false,
  },
  reducers: {
    togglePageChange: (state) => {
      state.showGptPage = !state.showGptPage;
    },
  },
});

export const { togglePageChange } = gptSlice.actions;
export default gptSlice.reducer;
