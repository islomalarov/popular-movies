import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { deleteMovie } from '../../../store/slices/moviesSlice';
import { useDispatch } from 'react-redux';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { LikeButtonProps } from '../../../interface/movie';

const DeleteButtonComponent = ({ movieId }: LikeButtonProps) => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(deleteMovie(movieId))}
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
  );
};

export default DeleteButtonComponent;
