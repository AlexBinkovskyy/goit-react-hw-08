import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import css from './NavBar.module.css'

export const NavBar = () => {
    const { isLoggedIn } = useAuth();
  
    return (
      <nav>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
    );
  };