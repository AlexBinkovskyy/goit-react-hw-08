import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import { logInUser } from '../../redux/operations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  document.title = 'Log-in';
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const emailID = useId();
  const passID = useId();

  const userSchema = Yup.object({
    email: Yup.string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: Yup.string()
      .min(5, 'min 5 characters')
      .max(10, 'max 10 characters'),
  });

  const handleSubmit = ({ email, password }, actions) => {
    actions.resetForm();
    dispatch(logInUser({ email: email, password: password }));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={userSchema}
        validateOnBlur={false}
      >
        <Form>
          <div className={css.fieldWrapper}>
            <label htmlFor={emailID} className={css.label}>
              User e-mail
            </label>
            <Field
              className={css.input}
              type="text"
              name="email"
              id={emailID}
              autoFocus
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

          <button type="submit">Log-in</button>
        </Form>
      </Formik>
    </div>
  );
};
