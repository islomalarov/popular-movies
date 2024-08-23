import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface MovieProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  };
  isLiked: boolean;
  onLikeToggle: (movieId: number) => void;
  onDelete: (movieId: number) => void;
}
const MovieComponent = ({ movie, isLiked, onLikeToggle, onDelete }: MovieProps) => {
  return (
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
        onClick={() => onLikeToggle(movie.id)}
        style={{
          position: 'absolute',
          top: '15px',
          right: '18px',
          cursor: 'pointer',
          color: isLiked ? 'red' : 'grey',
          fontSize: '24px',
        }}>
        <FontAwesomeIcon icon={isLiked ? solidHeart : regularHeart} />
      </div>
      {/* Иконка удаления */}
      <div
        onClick={() => onDelete(movie.id)}
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
