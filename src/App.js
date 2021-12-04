import './App.css';
import { Route, Routes, Navigate } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import authSelectors from './redux/auth/auth-selectors';

import { MainView } from './Views/MainView/MainView';
import { ContactsView } from './Views/ContactsView/ContactsView';
import { RegisterView } from './Views/RegisterView/RegisterView';
import { LoginView } from './Views/LoginView/LoginView';
import { Navigation } from './components/Navigation/Navigation';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<PrivateRoute component={MainView} />} />
          {/* <Route path="/goit-react-hw-05-movies" element={<HomePage />}></Route> */}
          <Route
            path="/register"
            element={<PublicRoute component={RegisterView} />}
          />
          <Route
            path="/login"
            element={<PublicRoute component={LoginView} />}
          />

          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsView} />}
          />

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    )
  );
};
