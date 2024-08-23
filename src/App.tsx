import { useEffect, useState } from 'react';
import { Movie, useGetPopularMoviesQuery } from './services/movies';
import MovieComponent from './components/MovieComponent/MovieComponent';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const App = () => {
  const { data, error, isLoading } = useGetPopularMoviesQuery();
  const likedMovies = useSelector((state: RootState) => state.likedMovies);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [showLikedOnly, setShowLikedOnly] = useState(false);

  const handleDelete = (movieId: number) => {
    setMovies(movies.filter((movie) => movie.id !== movieId));
  };

  const filteredMovies = showLikedOnly ? movies.filter((movie) => likedMovies[movie.id]) : movies;

  useEffect(() => {
    if (data) {
      setMovies(data.results);
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.toString()}</p>;

  return (
    <div style={{ padding: '16px' }}>
      {/* Кнопка фильтрации */}
      <button
        onClick={() => setShowLikedOnly(!showLikedOnly)}
        style={{
          marginBottom: '16px',
          padding: '8px 16px',
          backgroundColor: showLikedOnly ? '#ddd' : '#007bff',
          color: showLikedOnly ? '#000' : '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
        {showLikedOnly ? 'Show All' : 'Show Liked Only'}
      </button>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '16px' }}>
        {filteredMovies.map((movie) => (
          <MovieComponent key={movie.id} movie={movie} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default App;
