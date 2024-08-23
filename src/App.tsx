import React, { useState } from 'react';
import { useGetPopularMoviesQuery } from './services/movies';

interface LikedMovies {
  [key: number]: boolean;
}

const App: React.FC = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();
  const [likedMovies, setLikedMovies] = useState<LikedMovies>({});

  const toggleLike = (movieId: number) => {
    setLikedMovies((prev) => ({
      ...prev,
      [movieId]: !prev[movieId],
    }));
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.toString()}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '16px' }}>
      {data?.results.map((movie) => (
        <div
          key={movie.id}
          style={{
            border: '1px solid #ccc',
            padding: '16px',
            borderRadius: '8px',
            margin: '16px',
            width: '200px',
            textAlign: 'center',
            position: 'relative',
          }}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '100%', borderRadius: '8px' }}
          />
          <h3 style={{ fontSize: '16px', marginTop: '8px' }}>{movie.title}</h3>
          <p>{movie.release_date}</p>
          <div
            onClick={() => toggleLike(movie.id)}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              cursor: 'pointer',
              // color: likedMovies[movie.id] ? 'red' : 'grey',
              fontSize: '24px',
            }}>
            {likedMovies[movie.id] ? '❤️' : '🤍'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
