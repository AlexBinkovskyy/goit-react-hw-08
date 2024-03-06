import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import css from './ContactModalForm.module.css';
import InputMask from 'react-input-mask';
import { editContact, fetchContacts } from '../../../redux/operations';
import { selectContactForModal } from '../../../redux/selectors';

export const ContactModalForm = ({ setActive }) => {
  document.title = 'Edit contact';
  const dispatch = useDispatch();
  const selectedContact = useSelector(selectContactForModal);

  const initialValues = {
    name: `${selectedContact.name}`,
    number: `${selectedContact.number}`,
  };

  const nameID = useId();
  const numberID = useId();

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required name'),
    number: Yup.string().required('Required number'),
  });

  const handleSubmit = ({ name, number }, actions) => {
    actions.resetForm();
    dispatch(
      editContact({ id: selectedContact.id, name: name, number: number })
    );
    setActive(false);
    dispatch(fetchContacts());
  };

  return (
    <>
      <h3 className={css.header}>Edit contact</h3>
      <p className={css.parag}>
        provide new informaton and click "Save contact" button
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
        validateOnBlur={false}
        enableReinitialize={true}
      >
        <Form className={css.form}>
          <label htmlFor={nameID} className={css.label}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" id={nameID} />
          <ErrorMessage
            className={css.errorName}
            name="name"
            component="span"
          />
          <label htmlFor={numberID}>Number</label>
          <Field type="text" className={css.input} name="number">
            {({ field }) => (
              <InputMask
                id={numberID}
                {...field}
                mask="999-999-9999"
                maskChar=""
                className={css.inputSecond}
              />
            )}
          </Field>
          <ErrorMessage
            className={css.errorNumber}
            name="number"
            component="span"
          />
          <button className={css.btn} type="submit">
            Save contact
          </button>
        </Form>
      </Formik>
    </>
  );
};
