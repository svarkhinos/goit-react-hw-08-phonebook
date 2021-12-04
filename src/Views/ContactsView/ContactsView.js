import Section from '../../components/Section/Section';
import Form from '../../components/Form/Form';
import { ToastContainer } from 'react-toastify';

import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';

export const ContactsView = () => {
  return (
    <>
      <Section title="Phone-book">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />

        <ContactList />
      </Section>
      <ToastContainer autoClose={3000} position={'top-center'} />
    </>
  );
};
