import { useDispatch, useSelector } from 'react-redux';
import './contactList.css';
import { selectVisibleContacts } from '../../redux/selectors';

import { deleteContact, fetchContacts } from '../../redux/operations';
import { useEffect } from 'react';


export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);
 
 useEffect(()=>{
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = (id) => {
   dispatch(deleteContact(id));
   console.log(id);

  };
 

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
