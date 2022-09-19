import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from "prop-types";

export default class ContactForm extends Component {
    state = {
        name: "",
        number: "",
      };
      nameInputId = nanoid();
      numberInputId = nanoid();

      static propTypes = {
        onSubmit: PropTypes.func.isRequired,
      };

      handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
      };
    
      handleSubmit = (e) => {
        const { name, number } = this.state;
        e.preventDefault();
        this.props.onSubmit(name, number);
        this.reset();
      };

      reset() {
        this.setState({
          name: "",
          number: "",
        });
      }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            id='nameInputId'
            value={this.state.name}
            onChange={this.handleChange}
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        </label>
        <label htmlFor={this.numberInputId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            id='numberInputId'
            value={this.state.number}
            onChange={this.handleChange}
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
/>
        </label>
        <button type="submit">
          <span>Add contact</span>
        </button>
      </form>
    )
  }
}