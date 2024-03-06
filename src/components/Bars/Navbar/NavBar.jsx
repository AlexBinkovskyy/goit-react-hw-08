import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './NavBar.module.css';
import clsx from 'clsx';


const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active );
};

export const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.wrapper}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
