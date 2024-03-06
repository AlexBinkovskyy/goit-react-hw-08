import { FaCheck } from 'react-icons/fa';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../../redux/operations';
import { selectContactForModal } from '../../../redux/selectors';
import { setContactForModal } from '../../../redux/contactSlice';
import css from './ContactDeleteConfirm.module.css';

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
      <h3 className={css.header}>Deleting contact</h3>
      <p className={css.parag}>Are you shure to delete this contact: </p>
      <br />
      <div className={css.spanWrap}>
        <span className={css.span}>{storedContact.name}</span>
        <br />
        <span className={css.span}>{storedContact.number}</span>
      </div>{' '}
      <br />
      <p className={css.paragWarn}>Operation can not be undone!!!</p>
      <div>
        <button type="button" onClick={handleDelete} className={css.button}>
          <FaCheck color="green" className={css.icon} />
          Delete
        </button>
        <button type="button" onClick={handleCancel} className={css.button}>
          <MdOutlineCancel color="red" className={css.icon} />
          Cancel
        </button>
      </div>
    </div>
  );
};
