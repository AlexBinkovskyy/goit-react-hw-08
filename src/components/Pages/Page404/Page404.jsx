import { NavLink, Route, Routes } from 'react-router-dom';
import css from './Page404.module.css';
import Home from '../Home/Home';

export const Page404 = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/" className={css.backLink}>
        Back to HomePage
      </NavLink>
      <Routes>
        <Route element={<Home />} />
      </Routes>
    </div>
  );
};
