import { Section } from './section/section';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contact = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error =useSelector(getError);

  useEffect(() =>{
    dispatch(fetchContacts());
  }, [dispatch]);
console.log(contact);
  return (
    <div>
      <Section title={'Phonebook'} />
    <ContactForm >
       {isLoading && <h5>Loading contacts.....</h5>}
       {error && <b>{error}</b>}
       <p>{contact.lenght > 0 && JSON.stringify(contact, null, 2)}</p>
    </ContactForm>
      <Section title={'Contacts'} />
      <Filter />
    <ContactList>
       {isLoading && <h5>Loading contacts.....</h5>}
       {error && <b>{error}</b>}
       <p>{contact.lenght > 0 && JSON.stringify(contact, null, 2)}</p>
    </ContactList>

      </div>
  );
};
