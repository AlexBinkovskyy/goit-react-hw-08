import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { lazy, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { RestrictedRout } from './Routs/RestrictedRoute';
import { PrivateRoute } from './Routs/PrivateRout';
import { Page404 } from './Pages/Page404/Page404';
import { Toaster } from 'react-hot-toast';
import { refreshUser } from '../redux/auth/operations';

const Home = lazy(() => import('./Pages/Home/Home'));
const RegisterForm = lazy(() => import('./RegisterForm/RegisterForm'));
const LoginForm = lazy(() => import('./LoginForm/LoginForm'));
const ContactForm = lazy(() => import('./ContactForm/ContactForm'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b className="wrapper">Restoring previous session, please wait...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRout
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRout
                redirectTo="/contacts"
                component={<LoginForm />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactForm />} />
            }
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3500,
        }}
      />
    </>
  );
};
