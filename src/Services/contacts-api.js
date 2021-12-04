import axios from 'axios';

export const fetchContactsNew = () => {
  return axios.get('/contacts').then(r => r.data);
};

export const addContactsNew = ({ name, number }) => {
  const contact = {
    name,
    number,
  };
  return axios.post('/contacts', contact).then(r => r.data);
};

export const deleteContactsNew = id => {
  axios.delete(`/contacts/${id}`).then(r => r.data);
  return { id };
};
