import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import CSS from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/operations';
import InputMask from 'react-input-mask';

export function ContactForm() {
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
    dispatch(
      addContact({ id: nanoid(), name: values.name, phone: values.number })
    );
  };

  return (
    <>
      <h1 className="header">Phonebook</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
        validateOnBlur={false}
      >
        <Form className={CSS.form}>
          <label htmlFor={nameID}>Name</label>
          <Field className={CSS.input} type="text" name="name" id={nameID} />
          <ErrorMessage
            className={CSS.errorName}
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
                className={CSS.inputSecond}
              />
            )}
          </Field>
          <ErrorMessage
            className={CSS.errorNumber}
            name="number"
            component="span"
          />
          <button className={CSS.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}
