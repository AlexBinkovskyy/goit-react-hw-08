import { Outlet } from 'react-router-dom';
import { AppBar } from '../Bars/AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
