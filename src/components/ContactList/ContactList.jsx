import { useDispatch, useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { useEffect } from 'react';
import DocumentTitle from '../DocumentTitle/DocumentTitle';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';

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
