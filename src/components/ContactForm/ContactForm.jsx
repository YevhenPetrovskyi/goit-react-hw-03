import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import iziToast from 'izitoast';

import normalizeName from '../helpers/nameNormalize';
import { contactSchema } from '../helpers/contactSchema';

import 'izitoast/dist/css/iziToast.min.css';

const initialValues = {
  name: '',
  number: '',
};

function ContactForm({ addContact, contactList }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const submitHandler = (values, { resetForm }) => {
    const correctName = normalizeName(values.name);

    if (contactList.some((contact) => contact.name === correctName)) {
      iziToast.error({
        title: 'Error',
        message: `${correctName} is already in contact!`,
        position: 'topCenter',
      });
      return;
    }

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
