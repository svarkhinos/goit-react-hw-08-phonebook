import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';

import shortid from 'shortid';
import s from '../LoginView/LoginView.module.css';

export const RegisterView = ({ onSubmit, contacts }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordId = shortid.generate();
  const emailId = shortid.generate();
  const nameId = shortid.generate();

  const handleInputChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));

    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <>
      <h2 className={s.title}>You can register hear</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label} htmlFor={emailId}>
          Name
        </label>

        <input
          className={s.input}
          type="name"
          name="name"
          required
          value={name}
          id={nameId}
          onChange={handleInputChange}
        />

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
          register
        </button>
      </form>
    </>
  );
};
