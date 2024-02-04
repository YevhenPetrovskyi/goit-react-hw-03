import { useMemo, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactList from './components/ContsctList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

import './App.css';

function App() {
  const [contactList, setContactList] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [contactName, setContactName] = useState('');

  const addContactHandler = ({ name, number }) => {
    const newContact = {
      name,
      number,
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
      <SearchBox contactName={contactName} setContactName={setContactName} />
      <ContactList
        contactList={filteredContacts}
        deleteContact={deleteContactHandler}
      />
    </div>
  );
}

export default App;
