export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  overview?: string;
}

export interface MoviesResponse {
  results: Movie[];
}

export interface MoviesState {
  movies: Movie[];
}

export interface LikedMoviesState {
  likedMovies: Record<number, boolean>;
  showLikedOnly: boolean;
}

export interface MovieComponentProps {
  movie: Movie;
}
export interface LikeButtonProps {
  movieId: number;
}
