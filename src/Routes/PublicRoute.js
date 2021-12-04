import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import authSelectors from '../redux/auth/auth-selectors';

export default function PublicRoute({ component: Component }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return <>{isLoggedIn ? <Navigate to="/contacts" /> : <Component />}</>;
}
