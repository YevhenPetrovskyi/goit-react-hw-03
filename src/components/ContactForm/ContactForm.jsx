import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import iziToast from 'izitoast';

import normalizeName from '../helpers/nameNormalize';
import normalizePhoneNumber from '../helpers/normalizePhoneNumber';
import { contactSchema } from '../helpers/contactSchema';

import 'izitoast/dist/css/iziToast.min.css';
import styles from './ContactForm.module.css';

const initialValues = {
  name: '',
  number: '',
};

function ContactForm({ addContact, contactList }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const submitHandler = ({ name, number }, { resetForm }) => {
    const correctName = normalizeName(name);
    const correctNumber = normalizePhoneNumber(number);

    if (contactList.some((contact) => contact.name === correctName)) {
      iziToast.error({
        title: 'Error',
        message: `${correctName} is already in contact!`,
        position: 'topRight',
      });
      return;
    }

    addContact({
      name: correctName,
      number: correctNumber,
    });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={contactSchema}
    >
      <Form className={styles.form}>
        <div className={styles.inputContainer}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage className={styles.errorMessage} name="name" as="span" />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field type="tel" name="number" id={numberFieldId} />
          <ErrorMessage
            className={styles.errorMessage}
            name="number"
            as="span"
          />
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
