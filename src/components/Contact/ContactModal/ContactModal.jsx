import { useDispatch, useSelector } from 'react-redux';
import css from './ContactModal.module.css';
import { selectModalIsOpen } from '../../../redux/selectors';
import { setContactForModal, toggleModal } from '../../../redux/contactSlice';

export const ContactModal = ({ children }) => {
  const dispatch = useDispatch();
  const active = useSelector(selectModalIsOpen);
  return (
    <div
      className={active ? `${css.modal} ${css.active}` : `${css.modal}`}
      onClick={() => {
        dispatch(toggleModal(false));
        dispatch(setContactForModal({ id: null, name: null, number: null }));
      }}
    >
      <div
        className={
          active ? `${css.modalContent} ${css.active}` : `${css.modalContent}`
        }
        onClick={event => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
