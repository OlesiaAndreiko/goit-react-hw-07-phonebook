import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
import { Heading } from 'components/Heading/Hading';
import { List } from './ContactList.staled';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      <Heading title={'contacts'} />
      {contacts.length ? (
        <List>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </List>
      ) : (
        <p>Start adding contacts!</p>
      )}
    </>
  );
};
