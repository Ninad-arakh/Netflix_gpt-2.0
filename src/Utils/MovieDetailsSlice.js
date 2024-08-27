import { createSlice } from "@reduxjs/toolkit";

const MovieDetails = createSlice({
  name: "movieDetails",
  initialState: { 
    movieD: null ,
    searchMovies: null,
  },
  reducers: {
    setMovieDetails: (state, action) => {
      state.movieD = action.payload;
    },
    setSearchMovies: (state, action) => {
      state.searchMovies = action.payload;
    }
  },
});

export const { setMovieDetails, setSearchMovies } = MovieDetails.actions;
export default MovieDetails.reducer;
