import Contact from './Contact';

function ContactList({ contactList }) {
  return (
    <ul>
      {contactList.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
}

export default ContactList;
