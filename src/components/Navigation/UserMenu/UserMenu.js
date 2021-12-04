import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../../redux/auth/auth-selectors';
import defaultAvatar from '../../../images/ninja-cat.png';
import s from './UserMenu.module.css';
import { logOut } from '../../../redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div className={s.menu}>
      <NavLink
        to="/"
        className="link"
        style={({ isActive }) => {
          return {
            color: isActive ? '#1e90ff' : 'dimgrey',
          };
        }}
      >
        Main
      </NavLink>
      <NavLink
        to="/contacts"
        className="link"
        style={({ isActive }) => {
          return {
            color: isActive ? '#1e90ff' : 'dimgrey',
          };
        }}
      >
        Contacts
      </NavLink>
      <div className={s.container}>
        <img src={defaultAvatar} className={s.img} alt="avatar" />
        <span className={s.name}>Hello {name}!</span>
        <button
          type="button"
          className={s.btn}
          onClick={() => dispatch(logOut())}
        >
          out
        </button>
      </div>
    </div>
  );
};
