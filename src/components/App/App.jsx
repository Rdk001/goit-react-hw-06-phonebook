// import { useState, useEffect } from 'react';
import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContaactsList';
import Filter from '../Filter/Filter';
import { Container } from './App,styled';

// const App = () => {
//   const [contacts,setContacts]= useState([])
//   const [filter,setFilter]= useState('')

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts) {
//       this.setState({ contacts });
//     }
//   }
//   componentDidUpdate(prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitHandler = data => {
//     this.state.contacts.find(
//       ({ name }) => name.toLowerCase() === data.name.toLowerCase()
//     )
//       ? alert(`${data.name} is already in contacts`)
//       : this.setState(prevState => ({
//           contacts: [data, ...prevState.contacts],
//         }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFiltredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContacts = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     }));
//   };

//     const { contacts, filter } = this.state;
//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} contacts={contacts} />

//         <h2>Contacts</h2>
//         <Filter changeFilter={this.changeFilter} filter={filter} />
//         <ContactsList
//           contacts={this.getFiltredContacts()}
//           onDeleteContact={this.deleteContacts}
//         />
//       </Container>
//     );
//   }

// export default App;

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    contacts.find(({ name }) => name.toLowerCase() === data.name.toLowerCase())
      ? alert(`${data.name} is already in contacts`)
      : setContacts(prevState => [data, ...prevState]);
  };

  const getFiltredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContacts = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter changeFilter={changeFilter} filter={filter} />
      <ContactsList
        contacts={getFiltredContacts()}
        onDeleteContact={deleteContacts}
      />
    </Container>
  );
};

export default App;

// class OldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem('contacts'));
//     if (contacts) {
//       this.setState({ contacts });
//     }
//   }
//   componentDidUpdate(prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   formSubmitHandler = data => {
//     this.state.contacts.find(
//       ({ name }) => name.toLowerCase() === data.name.toLowerCase()
//     )
//       ? alert(`${data.name} is already in contacts`)
//       : this.setState(prevState => ({
//           contacts: [data, ...prevState.contacts],
//         }));
//   };

//   changeFilter = e => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFiltredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   deleteContacts = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} contacts={contacts} />

//         <h2>Contacts</h2>
//         <Filter changeFilter={this.changeFilter} filter={filter} />
//         <ContactsList
//           contacts={this.getFiltredContacts()}
//           onDeleteContact={this.deleteContacts}
//         />
//       </Container>
//     );
//   }
// }
// export default App;
