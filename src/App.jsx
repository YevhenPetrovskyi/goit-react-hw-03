import { useEffect, useMemo, useState } from 'react';
import { nanoid } from 'nanoid';
import normalizeName from './components/helpers/nameNormalize';
import normalizePhoneNumber from './components/helpers/normalizePhoneNumber';

import ContactList from './components/ContsctList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

import './App.css';

function App() {
  const [contactList, setContactList] = useState(() => {
    const savedContactList = JSON.parse(localStorage.getItem('contactList'));

    return savedContactList || [];
  });

  useEffect(() => {
    localStorage.setItem('contactList', JSON.stringify(contactList));
  }, [contactList]);

  const [contactName, setContactName] = useState('');

  const addContactHandler = ({ name, number }) => {
    const newContact = {
      name: normalizeName(name),
      number: normalizePhoneNumber(number),
      id: nanoid(),
    };
    setContactList([...contactList, newContact]);
  };

  const deleteContactHandler = (id) => {
    setContactList(contactList.filter((contact) => contact.id !== id));
  };

  const filteredContacts = useMemo(() => {
    return [...contactList].filter((contact) =>
      contact.name.toLowerCase().includes(contactName.toLowerCase())
    );
  }, [contactList, contactName]);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactHandler} contactList={contactList} />
      <SearchBox contactName={contactName} setContactName={setContactName} />
      <ContactList
        contactList={filteredContacts}
        deleteContact={deleteContactHandler}
      />
    </div>
  );
}

export default App;
