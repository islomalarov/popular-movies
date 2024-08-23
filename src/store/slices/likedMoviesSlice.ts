import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LikedMoviesState {
  [key: number]: boolean;
}

const initialState: LikedMoviesState = {};

const likedMoviesSlice = createSlice({
  name: 'likedMovies',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      const movieId = action.payload;
      state[movieId] = !state[movieId];
    },
  },
});

export const { toggleLike } = likedMoviesSlice.actions;

export default likedMoviesSlice.reducer;
