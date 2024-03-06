import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOutUser } from '../../../redux/operations';
import css from './UserBar.module.css';

export const UserBar = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOutUser())}>
        Logout
      </button>
    </div>
  );
};
