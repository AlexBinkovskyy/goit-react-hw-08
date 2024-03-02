import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="wrapper">
      <h1 className="header">Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
};
