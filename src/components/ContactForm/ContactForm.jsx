import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormContainer, Form, Text, Input, Submit } from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  let formData = { name, number };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target.elements;

    onSubmit({
      id: nanoid(),
      ...formData,
    });

    name.value = '';
    number.value = '';
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <label>
          <Text>Name</Text>
          <Input
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <Text>Number</Text>
          <Input
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Submit type="submit">Add contact</Submit>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
