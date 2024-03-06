import { FaCheck } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../../redux/operations';
import { selectContactForModal } from '../../../redux/selectors';
import { setContactForModal } from '../../../redux/contactSlice';

export const ContactDeleteConfirm = ({ setActive }) => {
  const dispatch = useDispatch();
  const storedContact = useSelector(selectContactForModal);

  const handleDelete = () => {
    dispatch(removeContact(storedContact.id));
    setActive(false);
    dispatch(setContactForModal({ id: null, name: null, number: null }));
  };

  const handleCancel = () => {
    setActive(false);
    dispatch(setContactForModal({ id: null, name: null, number: null }));
  };

  return (
    <div>
      <h3>Deleting contact</h3>
      <p>
        Are you shure to delete this contact: <br />
        <span>{storedContact.name}</span>
        <br />
        <span>{storedContact.number}</span>
      </p>
      <br />
      <p>Operation can't be undone.</p>
      <div>
        <button type="button" onClick={handleDelete}>
          <FaCheck color="green" />
          Delete
        </button>
        <button type="button" onClick={handleCancel}>
          <MdOutlineCancel color="red" />
          Cancel
        </button>
      </div>
    </div>
  );
};
