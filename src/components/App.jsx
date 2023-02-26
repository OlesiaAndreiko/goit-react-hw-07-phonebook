import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { FormContact } from './FormContact/FormContact';
import { Container } from './Container/Container.styled';

export const App = () => {
   
  return (
    <Container>
      <FormContact />
      <Filter/>
      <ContactList />
      <ToastContainer position="top-center" theme="colored" />
    </Container>
  );
};