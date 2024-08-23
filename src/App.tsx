import React, { useEffect, useState } from 'react';
import { Movie, useGetPopularMoviesQuery } from './services/movies';
import MovieComponent from './components/MovieComponent';
interface LikedMovies {
  [key: number]: boolean;
}

const App: React.FC = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();
  const [likedMovies, setLikedMovies] = useState<LikedMovies>({});
  const [movies, setMovies] = useState<Movie[]>([]);

  const toggleLike = (movieId: number) => {
    setLikedMovies((prev) => ({
      ...prev,
      [movieId]: !prev[movieId],
    }));
  };

  const handleDelete = (movieId: number) => {
    setMovies(movies.filter((movie) => movie.id !== movieId));
  };

  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.toString()}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '16px' }}>
      {movies.map((movie) => (
        <MovieComponent
          movie={movie}
          isLiked={likedMovies[movie.id] || false}
          onLikeToggle={toggleLike}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;
