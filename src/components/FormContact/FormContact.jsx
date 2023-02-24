import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from '../../redux/selectors';
import { Heading } from '../Heading/Hading';

import {
  Form,
  BtnContact,
  FieldCaption,
  ContactInput,
} from './FormContact.styled';

export const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target.elements;

    if (
      contacts.items.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          form.name.value.toLowerCase().trim()
      )
    ) {
      toast.warn(`${form.name.value} is already in contacts!`);
      event.target.reset();
      return;
    } else {
      dispatch(addContact({name: form.name.value, number: form.number.value}))
    }

    event.target.reset();
  };

  return (
    <>
      <Heading title={'phonebook'}></Heading>
      <Form onSubmit={handleSubmit}>
        <FieldCaption htmlFor="name">
          Name
          <ContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder="Only letters, apostrophe, dash and spaces."
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FieldCaption>
        <FieldCaption htmlFor="number">
          Number
          <ContactInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            placeholder="Only digits.Can spaces, dashes, parentheses, start with +."
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FieldCaption>
        <BtnContact>Add Contact</BtnContact>
      </Form>
    </>
  );
};
