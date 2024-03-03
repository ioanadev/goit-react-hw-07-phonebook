import { useDispatch, useSelector } from 'react-redux';
import './contactList.css';
import { getContacts, getFilters } from '../../redux/selectors';
import { deleteContacts } from '../../redux/contactsSlice';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
   dispatch(deleteContacts(id));

  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
  
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <div className="contact-list-container">
            <div className="contact-list">
              {contact.name}: {contact.number}
            </div>
            <button
              className="delete-button"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
