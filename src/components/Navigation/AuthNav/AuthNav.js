import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={s.container}>
      <NavLink
        to="/register"
        className="link"
        style={({ isActive }) => {
          return {
            color: isActive ? '#1e90ff' : 'dimgrey',
          };
        }}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        className="link"
        style={({ isActive }) => {
          return {
            color: isActive ? '#1e90ff' : 'dimgrey',
          };
        }}
      >
        Login
      </NavLink>
    </div>
  );
};
