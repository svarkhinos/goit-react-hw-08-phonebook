import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function registerUser(user) {
  return axios.post('/users/signup', user).then(r => {
    token.set(r.data.token);
    return r.data;
  });
}

export async function loginUser(user) {
  return axios.post('/users/login', user).then(r => {
    token.set(r.data.token);
    return r.data;
  });
}

export async function logOutUser() {
  return axios.post('/users/logout').then(r => {
    token.unset();
    return r.data;
  });
}

export async function fetchUser(persistedToken) {
  token.set(persistedToken);
  return axios.get('/users/current').then(r => {
    return r.data;
  });
}
