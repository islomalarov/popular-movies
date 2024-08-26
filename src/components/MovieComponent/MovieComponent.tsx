import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import LikeButtonComponent from '../ui/LikeButtonComponent/LikeButtonComponent';
import { deleteMovie } from '../../store/slices/moviesSlice';
import { MovieComponentProps } from '../../interface/movie';

const MovieComponent = ({ movie }: MovieComponentProps) => {
  const dispatch = useDispatch();

  return (
    <div
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

      {/* Иконка лайка */}
      <LikeButtonComponent movieId={movie.id} />

      {/* Иконка удаления */}
      <div
        onClick={() => dispatch(deleteMovie(movie.id))}
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
  );
};

export default MovieComponent;
