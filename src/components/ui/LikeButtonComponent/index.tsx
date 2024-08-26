import { toggleLike } from '../../../store/slices/likedMoviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { RootState } from '../../../store/store';
import { LikeButtonProps } from '../../../interface/movie';

const LikeButtonComponent = ({ movieId }: LikeButtonProps) => {
  const { likedMovies } = useSelector((state: RootState) => state.likedMovies);
  const dispatch = useDispatch();

  return (
    <div
      className="like-button"
      onClick={() => dispatch(toggleLike(movieId))}
      style={{
        position: 'absolute',
        top: '15px',
        right: '18px',
        cursor: 'pointer',
        color: likedMovies[movieId] ? 'red' : 'grey',
        fontSize: '24px',
      }}>
      <FontAwesomeIcon icon={likedMovies[movieId] ? solidHeart : regularHeart} />
    </div>
  );
};

export default LikeButtonComponent;
