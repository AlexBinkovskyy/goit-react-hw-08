import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import InputMask from 'react-input-mask';
import { SearchBar } from '../SearchBar/SearchBar';
import { ContactList } from '../ContactList/ContactList';

export default function ContactForm() {
  document.title = 'Contacts';
  const initialValues = {
    name: '',
    number: '',
  };

  const nameID = useId();
  const numberID = useId();
  const dispatch = useDispatch();

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required name'),
    number: Yup.string().required('Required number'),
  });

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    dispatch(addContact({ name: values.name, number: values.number }));
  };

  return (
    <>
      <div className={css.wrapper}>
        <h1 className="header">Phonebook</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={userSchema}
          validateOnBlur={false}
        >
          <Form className={css.form}>
            <label htmlFor={nameID}>Name</label>
            <Field className={css.input} type="text" name="name" id={nameID} />
            <ErrorMessage
              className={css.errorName}
              name="name"
              component="span"
            />
            <label htmlFor={numberID}>Number</label>
            <Field type="text" name="number" id={numberID}>
              {({ field }) => (
                <InputMask
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
              Add contact
            </button>
          </Form>
        </Formik>
        <SearchBar />
      </div>
      <ContactList />
    </>
  );
}
