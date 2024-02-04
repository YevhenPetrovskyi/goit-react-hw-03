import { useState } from 'react';

import ContactList from './components/ContsctList/ContactList';

import './App.css';

const contactListTest = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contactList, setContactList] = useState(contactListTest);

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactList contactList={contactList} />
    </div>
  );
}

export default App;
