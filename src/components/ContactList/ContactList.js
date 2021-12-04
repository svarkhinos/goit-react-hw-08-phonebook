import Contact from '../Contact/Contact';
import {
  addContact,
  deleteContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useEffect } from 'react';
import {
  getVisibleContacts,
  getLoading,
} from '../../redux/contacts/contacts-selectors';

const ContactList = ({
  contacts,
  onDeleteContact,
  fetchContacts,
  isLoading,
}) => {
  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <ul className={s.list}>
        {contacts &&
          contacts.map(({ id, name, number }) => (
            <Contact
              id={id}
              name={name}
              number={number}
              key={id}
              onDeleteContact={onDeleteContact}
            />
          ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
  isLoading: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  addContact: () => dispatch(addContact()),
  fetchContacts: () => dispatch(fetchContacts()),
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
