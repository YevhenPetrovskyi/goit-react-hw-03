import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import styles from './Contact.module.css';

function Contact({ name, number, id, deleteContact }) {
  return (
    <li className={styles.contact}>
      <ul>
        <li>
          <IoPersonSharp />
          <span>{name}</span>
        </li>
        <li>
          <FaPhoneAlt />
          <span>{number}</span>
        </li>
      </ul>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </li>
  );
}

export default Contact;
