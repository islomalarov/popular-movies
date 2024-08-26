import { MovieComponentProps } from '../../interface/movie';
import { useNavigate } from 'react-router-dom';
import LikeButtonComponent from '../ui/LikeButtonComponent';
import DeleteButtonComponent from '../ui/DeleteButtonComponent';

const MovieComponent = ({ movie }: MovieComponentProps) => {
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (
      (e.target as HTMLElement).closest('.like-button') ||
      (e.target as HTMLElement).closest('.delete-button')
    ) {
      return;
    }
    navigate(`/movie/${movie.id}`);
  };
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
        cursor: 'pointer',
      }}
      onClick={handleCardClick}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={movie.title}
        style={{ width: '100%', borderRadius: '8px' }}
      />
      <h3 style={{ fontSize: '16px', marginTop: '8px' }}>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <LikeButtonComponent movieId={movie.id} />
      <DeleteButtonComponent movieId={movie.id} />
    </div>
  );
};

export default MovieComponent;
