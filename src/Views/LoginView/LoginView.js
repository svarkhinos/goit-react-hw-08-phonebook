import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';

import shortid from 'shortid';
import s from './LoginView.module.css';

export const LoginView = ({ onSubmit, contacts }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordId = shortid.generate();
  const emailId = shortid.generate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <h2 className={s.title}>Enter your email and password</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={emailId}>
          Email
        </label>

        <input
          className={s.input}
          type="mail"
          name="email"
          required
          value={email}
          id={emailId}
          onChange={handleInputChange}
        />

        <label className={s.label} htmlFor={passwordId}>
          Password
        </label>

        <input
          className={s.input}
          type="password"
          name="password"
          required
          value={password}
          id={passwordId}
          onChange={handleInputChange}
        />

        <button className={s.btn} type="submit">
          log in
        </button>
      </form>
    </>
  );
};
