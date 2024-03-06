import { Outlet } from 'react-router-dom';
import { AppBar } from '../Bars/AppBar/AppBar';
import css from './Layout.module.css';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div className={css.wrapper}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
