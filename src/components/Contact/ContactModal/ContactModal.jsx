import { useDispatch } from 'react-redux';
import css from './ContactModal.module.css';
import { setContactForModal } from '../../../redux/contactSlice';

export const ContactModal = ({ component: ModalChild, active, setActive }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={active ? `${css.modal} ${css.active}` : `${css.modal}`}
      onClick={() => {
        setActive(false);
        dispatch(setContactForModal({ id: null, name: null, number: null }));
      }}
    >
      <div
        className={
          active ? `${css.modalContent} ${css.active}` : `${css.modalContent}`
        }
        onClick={event => event.stopPropagation()}
      >
       
        {<ModalChild setActive={setActive} />}
      </div>
    </div>
  );
};
