import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { SearchBar } from './SearchBar/SearchBar';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (

    <Routes>
      <Route path='/' element={<Layout/>} />
    </Routes>
    // <div className="wrapper">
    //   <h1 className="header">Phonebook</h1>
    //   <ContactForm />
    //   <SearchBar />
    //   <ContactList />
    // </div>
  );
};
