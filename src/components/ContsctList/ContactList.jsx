import Contact from './Contact';

function ContactList({ contactList, deleteContact }) {
  return (
    <ul>
      {contactList.map((contact) => (
        <Contact key={contact.id} {...contact} deleteContact={deleteContact} />
      ))}
    </ul>
  );
}

export default ContactList;
