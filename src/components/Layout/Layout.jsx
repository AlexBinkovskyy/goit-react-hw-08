import { Outlet } from 'react-router-dom';
import { AppBar } from '../Bars/AppBar/AppBar';
import css from './Layout.module.css'

export const Layout = () => {
  return (
    <div className={css.wrapper}>
      <AppBar />
      <Outlet />
    </div>
  );
};
