import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import css from './UserBar.module.css';
import { logOutUser } from '../../../redux/auth/operations';

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
