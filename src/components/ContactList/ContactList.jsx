import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { selectFilteredContacts } from '../../redux/selectors';

export function ContactList() {
  const { loading, error, errorMsg } = useSelector(state => state.contacts);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red', fontSize: '24px' }}>{errorMsg}</p>}
      <ul className="list">
        {contacts.map(contact => {
          const { id, name, phone } = contact;
          return <Contact key={id} id={id} name={name} phone={phone} />;
        })}
      </ul>
    </div>
  );
}
