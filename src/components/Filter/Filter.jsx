import { FilerWrap, FieldCaption, ContactInput } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { searchContact } from '../../redux/filterSlise';
import { Heading } from 'components/Heading/Hading';

export const Filter = () => {
  const filter = useSelector(selectFilter);  
  const dispatch = useDispatch();
  
  const handleChange = event => dispatch(searchContact(event.target.value));

  return (
    <>
    <Heading title={'Search contacts'} />
    <FilerWrap>
      <FieldCaption htmlFor="search">
        Find contact by name
        <ContactInput
          type="text"
          name="search"
          value={filter.search}
          onChange={handleChange}
          placeholder="Please start typing name..."
        />
      </FieldCaption>
    </FilerWrap>
    </>
  );
};
