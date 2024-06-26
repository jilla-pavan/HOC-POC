import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movieItems: [],
  },
  reducers: {
    addMovieItem: (state, action) => {
      state.movieItems=(action.payload);
    },

    deleteMovieItems: (state, action) => {
      state.movieItems.length = 0;
    },

  },
});

export const { addMovieItem, deleteMovieItems } = movieSlice.actions;
export default movieSlice.reducer;
