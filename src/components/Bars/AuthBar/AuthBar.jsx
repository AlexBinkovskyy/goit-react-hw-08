import { NavLink } from 'react-router-dom';
import css from './AuthBar.module.css'

export const AuthBar = () => {
  return (
    <div className={css}>
      <NavLink className={css.linkReg} to={'register'}>
        Register
      </NavLink>
      <NavLink className={css.linkLog} to={'login'}>
        Log In
      </NavLink>
    </div>
  );
};
