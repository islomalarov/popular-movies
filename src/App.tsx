import React, { useEffect, useState } from 'react';
import { Movie, useGetPopularMoviesQuery } from './services/movies';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
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
              top: '15px',
              right: '18px',
              cursor: 'pointer',
              color: likedMovies[movie.id] ? 'red' : 'grey',
              fontSize: '24px',
            }}>
            <FontAwesomeIcon icon={likedMovies[movie.id] ? solidHeart : regularHeart} />
          </div>
          {/* Иконка удаления */}
          <div
            onClick={() => handleDelete(movie.id)}
            style={{
              position: 'absolute',
              top: '15px',
              left: '18px',
              cursor: 'pointer',
              color: 'grey',
              fontSize: '24px',
            }}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
