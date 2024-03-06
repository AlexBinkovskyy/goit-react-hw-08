import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import css from './RegisterForm.module.css';
import DocumentTitle from '../DocumentTitle/DocumentTitle';
import { registerNewUser } from '../../redux/auth/operations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const nameID = useId();
  const emailID = useId();
  const passID = useId();

  const userSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required name'),
    email: Yup.string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(5, 'min 5 characters')
      .max(10, 'max 10 characters'),
  });

  const handleSubmit = ({ name, email, password }, actions) => {
    actions.resetForm();
    dispatch(registerNewUser({ name: name, email: email, password: password }));
  };

  return (
    <div>
      <DocumentTitle>Register</DocumentTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
        validateOnBlur={false}
      >
        <Form>
          <div className={css.fieldWrapper}>
            <label htmlFor={nameID} className={css.label}>
              User name
            </label>
            <Field
              className={css.input}
              type="text"
              name="name"
              id={nameID}
              autoFocus
            />
            <ErrorMessage name="name" component="span" />
          </div>

          <div className={css.fieldWrapper}>
            <label htmlFor={emailID} className={css.label}>
              User e-mail
            </label>
            <Field
              className={css.input}
              type="text"
              name="email"
              id={emailID}
            />
            <ErrorMessage name="email" component="span" />
          </div>

          <div className={css.fieldWrapper}>
            <label htmlFor={passID} className={css.label}>
              User password
            </label>
            <Field
              className={css.input}
              name="password"
              id={passID}
              type="password"
            />
            <ErrorMessage name="password" component="span" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}
