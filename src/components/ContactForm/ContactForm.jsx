
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import css from './ContactForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short').max(50, 'Too long').required('Required'),
  number: Yup.string().min(3, 'Too short').max(50, 'Too long').matches(/^\d{3}-\d{2}-\d{2}$/, 'Phone number must be in the format: 123-45-67').required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{id: '', name: '', number: '' }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formField}>
          <label>Name</label>
          <Field type="text" name="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formField}>
          <label>Number</label>
          <Field type="tel" name="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">Submit</button>
      </Form>
    </Formik>
  );
}