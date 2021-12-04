import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  fetchContactsNew,
  addContactsNew,
  deleteContactsNew,
} from '../../Services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = fetchContactsNew();
    return contacts;
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }) => {
    const contacts = addContactsNew({ name, number });
    return contacts;
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    const contact = deleteContactsNew(id);

    return contact;
  },
);
