function Contact({ name, number }) {
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
      <button>Delete</button>
    </li>
  );
}

export default Contact;
