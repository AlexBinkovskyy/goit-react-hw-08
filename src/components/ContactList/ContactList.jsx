import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import DocumentTitle from '../DocumentTitle/DocumentTitle';

export function ContactList() {
  const { loading, error, errorMsg } = useSelector(state => state.contacts);
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <DocumentTitle>Contacts</DocumentTitle>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red', fontSize: '24px' }}>{errorMsg}</p>}
      <ul className="list">
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return <Contact key={id} id={id} name={name} number={number} />;
        })}
      </ul>
    </div>
  );
}
