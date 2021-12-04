import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  loginUser,
  registerUser,
  logOutUser,
  fetchUser,
} from '../../Services/users-api';

export const register = createAsyncThunk(
  'users/signup',

  async user => {
    const newUser = registerUser(user);
    return newUser;
  },
);

export const login = createAsyncThunk(
  'users/login',

  async user => {
    const newUser = loginUser(user);
    return newUser;
  },
);

export const logOut = createAsyncThunk(
  'users/logout',

  async () => {
    const newUser = logOutUser();
    return newUser;
  },
);

export const fetchCurrentUser = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    const data = fetchUser(persistedToken);

    return data;
  },
);
