import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactList } from '../components/ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { FormContact } from './FormContact/FormContact';
import { Container } from './Container/Container.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch =useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
   
  return (
    <Container>
      {/* <FormContact /> */}
      {/* <Filter/> */}
      {isLoading && !error && <b>Request in progress...</b>}
      <h1>Hello world</h1>
      <ContactList />
      <ToastContainer position="top-center" theme="colored" />
    </Container>
  );
};