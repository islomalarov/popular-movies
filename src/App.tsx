import { useEffect } from 'react';
import { useGetPopularMoviesQuery } from './services/movies';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { setMovies } from './store/slices/moviesSlice';
import { toggleShowLikedOnly } from './store/slices/likedMoviesSlice';
import MovieComponent from './components/MovieComponent/MovieComponent';

const App = () => {
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetPopularMoviesQuery();
  const { likedMovies, showLikedOnly } = useSelector((state: RootState) => state.likedMovies);
  const { movies } = useSelector((state: RootState) => state.movies);

  const filteredMovies = showLikedOnly ? movies.filter((movie) => likedMovies[movie.id]) : movies;

  useEffect(() => {
    if (data) {
      dispatch(setMovies(data.results));
    }
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.toString()}</p>;

  return (
    <div style={{ padding: '16px' }}>
      {/* Кнопка фильтрации */}
      <button
        onClick={() => dispatch(toggleShowLikedOnly())}
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
          <MovieComponent key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;
