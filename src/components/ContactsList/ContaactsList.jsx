import { Span, DeleteItem } from './ContactList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <Span>
              {name}: {number}
            </Span>
            <DeleteItem type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </DeleteItem>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
