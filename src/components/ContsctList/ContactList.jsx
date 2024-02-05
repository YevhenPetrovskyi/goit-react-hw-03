import Contact from './Contact';
import styles from './ContactList.module.css';

function ContactList({ contactList, deleteContact }) {
  return (
    <ul className={styles.contactList}>
      {contactList.map((contact) => (
        <Contact key={contact.id} {...contact} deleteContact={deleteContact} />
      ))}
    </ul>
  );
}

export default ContactList;
