import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './NavBar.module.css';

export const NavBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.wrapper}>
      <NavLink className={css.linkHome} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.linkContacts} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
