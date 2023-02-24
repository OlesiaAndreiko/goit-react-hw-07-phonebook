import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { Contact } from '../Contact/Contact';
import { Heading } from 'components/Heading/Hading';
import { List } from './ContactList.staled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const searchField = useSelector(selectFilter);

  const newContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(searchField.search.toLowerCase())
  );

  return (
    <>
      <Heading title={'contacts'} />
      {newContacts.length ? (
        <List>
          {newContacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </List>
      ) : (
        <p>Start adding contacts!</p>
      )}
    </>
  );
};
