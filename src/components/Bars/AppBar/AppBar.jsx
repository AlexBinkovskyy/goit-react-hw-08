import css from './AppBar.module.css';
import { useAuth } from '../../hooks/useAuth';
import { NavBar } from '../Navbar/NavBar';
import { UserBar } from '../UserBar/UserBar';
import { AuthBar } from '../AuthBar/AuthBar';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <NavBar />
      {isLoggedIn ? <UserBar /> : <AuthBar />}
    </header>
  );
};
