import { MovieComponentProps } from '../../interface/movie';
import LikeButtonComponent from '../ui/LikeButtonComponent/LikeButtonComponent';
import DeleteButtonComponent from '../ui/DeleteButtonComponent/DeleteButtonComponent';

const MovieComponent = ({ movie }: MovieComponentProps) => {
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
      <DeleteButtonComponent movieId={movie.id} />
    </div>
  );
};

export default MovieComponent;
