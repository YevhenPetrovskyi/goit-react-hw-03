import { IoPersonSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

function Contact({ name, number, id, deleteContact }) {
  return (
    <li>
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
