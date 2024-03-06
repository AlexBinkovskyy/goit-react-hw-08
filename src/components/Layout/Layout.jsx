import { Outlet } from 'react-router-dom';
import { AppBar } from '../Bars/AppBar/AppBar';
import css from './Layout.module.css';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div className={css.wrapper}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
