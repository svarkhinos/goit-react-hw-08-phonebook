import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

import { AuthNav } from './AuthNav/AuthNav';
import { UserMenu } from './UserMenu/UserMenu';

export function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <nav>{isLoggedIn ? <UserMenu /> : <AuthNav />}</nav>;
}
