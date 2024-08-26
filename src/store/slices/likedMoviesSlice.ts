import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LikedMoviesState } from '../../interface/movie';

const initialState: LikedMoviesState = {
  likedMovies: {},
  showLikedOnly: false,
};

const likedMoviesSlice = createSlice({
  name: 'likedMovies',
  initialState,
  reducers: {
    toggleLike(state, action: PayloadAction<number>) {
      state.likedMovies[action.payload] = !state.likedMovies[action.payload];
    },
    toggleShowLikedOnly: (state) => {
      state.showLikedOnly = !state.showLikedOnly;
    },
  },
});

export const { toggleLike, toggleShowLikedOnly } = likedMoviesSlice.actions;

export default likedMoviesSlice.reducer;
