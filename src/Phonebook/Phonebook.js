import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class Pnonebook extends Component {
  state = {
    contacts: [],
    name: '',
  };

  nameInputId = uuidv4();

  changeInputValue = event => {
    this.setState({ name: event.currentTarget.value });
  };

  makeSubmit = event => {
    event.preventDefault();
    console.log(event.target.value);
    this.reset();
  };

  addContact = () => {
    this.setState = prevState => ({
      contacts: { ...prevState.contacts, ...this.changeInputValue },
    });
  };

  reset() {
    this.setState({ name: '' });
  }

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.makeSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              id={this.nameInputId}
              type="text"
              value={this.state.name}
              onChange={this.changeInputValue}
            />
            <button type="submit">Add contact</button>
          </label>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li>{this.name}</li>
        </ul>
      </>
    );
  }
}

export default Pnonebook;
