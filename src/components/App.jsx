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
      this.state.contacts.push({ number, name, id });
      this.setState({ contacts: this.state.contacts });
    }
  };

  inputFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  removeFromContactsList = index => {
    this.state.contacts.splice(index, 1);
    this.setState({ contacts: this.state.contacts });
  };

  filterContacts = contacts => {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase());
    });
  };

  componentDidMount = () => {
    this.setState({
      contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    });
  };

  componentDidUpdate = () => {
    this.saveContacts();
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
