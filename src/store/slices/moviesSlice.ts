import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MoviesState } from '../../interface/movie';

const initialState: MoviesState = {
  movies: [],
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    },
    deleteMovie(state, action) {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { setMovies, deleteMovie } = movieSlice.actions;
export default movieSlice.reducer;
