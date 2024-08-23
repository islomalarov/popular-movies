import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export interface MoviesResponse {
  results: Movie[];
}

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    // В `builder.query` добавляем типизацию
    getPopularMovies: builder.query<MoviesResponse, void>({
      query: () => `movie/popular?api_key=${API_KEY}&language=ru-RU&page=1`,
    }),
  }),
});

export const { useGetPopularMoviesQuery } = moviesApi;
