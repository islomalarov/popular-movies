import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store/store';
import '../../App.css';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { movies } = useSelector((state: RootState) => state.movies);
  const movie = movies.find((movie) => movie.id === Number(id));
  const navigate = useNavigate();

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div
      className="container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '16px',
      }}>
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        style={{
          objectFit: 'cover',
          width: '50%',
          height: 'auto',
          borderRadius: '8px',
          marginBottom: '16px',
          cursor: 'pointer',
        }}
      />
      <p>Release Date: {movie.release_date}</p>
      <p>{movie.overview}</p>

      <button
        style={{
          marginBottom: '16px',
          padding: '8px 16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/')}>
        Back to Movies
      </button>
    </div>
  );
};

export default MovieDetail;
