import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { contactSchema } from '../helpers/contactSchema';

const initialValues = {
  name: '',
  number: '',
};

function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const submitHandler = (values, { resetForm }) => {
    addContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={contactSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" as="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field type="tel" name="number" id={numberFieldId} />
        <ErrorMessage name="number" as="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
