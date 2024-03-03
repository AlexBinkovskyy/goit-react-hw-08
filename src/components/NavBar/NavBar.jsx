import { NavLink } from 'react-router-dom';
import css from './NavBar.module.css';

export const NavBar = () => {
  return (
          <div className={css.navWrapper}>
          <NavLink className={css.linkHome} to={'home'}>
            Home
          </NavLink>
          <div className={css.entrance}>
              <NavLink className={css.linkReg} to={'register'}>
                Register
              </NavLink>
              <NavLink className={css.linkLog} to={'login'}>
                Log In
              </NavLink>
          </div>
      </div>
      );
};
