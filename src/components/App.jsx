import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
import { fetchContacts, refreshUser } from '../redux/operations';
import { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { RestrictedRout } from './Routs/RestrictedRoute';
import Home from './Pages/Home';
import { PrivateRoute } from './Routs/PrivateRout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactModal } from './Contact/ContactModal/ContactModal';
import { ContactModalForm } from './Contact/ContactModalForm/ContactModalForm';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth;

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchContacts())
  }, [dispatch]);

  return isRefreshing ? (
    <b className='wrapper'>Restoring previous session, please wait...</b>
  ) : (<>
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
            <RestrictedRout redirectTo="/contacts" component={<LoginForm />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactForm />} />
          }
        />
      </Route>
    </Routes>
    <ContactModal >
    <ContactModalForm />
  </ContactModal></>
  );
};
