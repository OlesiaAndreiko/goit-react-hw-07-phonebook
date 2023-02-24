import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ItemContact, BtnDelete } from './Contact.styled';

export const Contact = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <ItemContact key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <BtnDelete type="button" onClick={handleDelete}>
          Delete
        </BtnDelete>
      </ItemContact>
    </>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
