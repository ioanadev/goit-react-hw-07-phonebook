import { Section } from './section/section';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';

export const App = () => {

  return (
    <div>
      <Section title={'Phonebook'} />
      <ContactForm />

      <Section title={'Contacts'} />
      <Filter />
      <ContactList/>
    </div>
  );
};
