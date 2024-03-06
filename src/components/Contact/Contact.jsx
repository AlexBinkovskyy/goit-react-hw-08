import { FaUserTie } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import CSS from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { LiaUserEditSolid } from 'react-icons/lia';
import { setContactForModal } from '../../redux/contacts/contactSlice';
import { ContactModal } from './ContactModal/ContactModal';
import { ContactModalForm } from './ContactModalForm/ContactModalForm';
import { useState } from 'react';
import  {ContactDeleteConfirm}  from './ContactDeleteConfirm/ContactDeleteConfirm';


export function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [action, setAction] = useState(null);

  const handleDelete = () => {
    setActive(true);
    setAction('delete');
    dispatch(setContactForModal({ id: id, name: name, number: number }));
  };

  const handleEdit = () => {
    dispatch(setContactForModal({ id: id, name: name, number: number }));
    setActive(true);
    setAction('edit');
  }

  return (
    <li className={CSS.listItem}>
      <div className={CSS.userName}>
        <FaUserTie className={CSS.icon} size="30px" />
        <h2 className={CSS.title}>{name}</h2>
      </div>
      <div className={CSS.userPhone}>
        <FaPhoneAlt className={CSS.icon} size="25px" />
        <p className={CSS.title}>{number}</p>
      </div>
      <button
        type="button"
        className={CSS.button}
        onClick={() => handleDelete(id)}
      >
        Delete contact
      </button>
      <button
        type="button"
        className={CSS.buttonEdit}
        onClick={handleEdit}
        title="Edit contact"
      >
        <LiaUserEditSolid className={CSS.editIcon}/>
      </button>
      <ContactModal
        component={action === 'edit' ? ContactModalForm : ContactDeleteConfirm}
        active={active}
        setActive={setActive}
      ></ContactModal>
    </li>
  );
}
