import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  checkContact(name) {
    if (this.state.contacts.find(e => e.name === name)) {
      alert(`${name} is already in contacts`);
      return false;
    }

    return true;
  }

  saveContacts() {
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  addContact = ({ number, name, id }) => {
    if (this.checkContact(name)) {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, { number, name, id }],
        };
      });
    }
  };

  inputFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  removeFromContactsList = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(e => e.id !== id),
      };
    });
  };

  filterContacts = contacts => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  componentDidMount = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({
      contacts: contacts || [],
    });
  };

  componentDidUpdate = (prevProp, { filter: prevFilter }) => {
    if (prevFilter === this.state.filter) {
      this.saveContacts();
      console.log('Contacts are saved');
    }
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = this.filterContacts(contacts);

    return (
      <div className="phonebook-box">
        <h1 className="ph-title global-p">Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2 className="global-p">Contacts</h2>
        <Filter inputFilter={this.inputFilter} filter={filter} />
        <ContactList
          filteredContacts={filteredContacts}
          removeFromContactsList={this.removeFromContactsList}
        />
      </div>
    );
  }
}
