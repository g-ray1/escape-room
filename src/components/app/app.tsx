import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import QuestPage from '../../pages/quest-page/quest-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import LoginPage from '../../pages/login-page/login-page';
import BookingPage from '../../pages/booking-page/booking-page';
import ReservationsPage from '../../pages/reservations-page/reservations-page';

import { APPRoutes } from '../../const';
import PrivateRoute from '../private-route/private-route';
import { useSelector } from 'react-redux';
import { getAuthStatus } from '../../store/user/user-selectors';

function App(): JSX.Element {
  const authStatus = useSelector(getAuthStatus);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={APPRoutes.MainPage} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={`${APPRoutes.QuestPage}/:id`}>
            <Route index element={<QuestPage />} />
            <Route path={APPRoutes.BookingPage} element={
              <PrivateRoute authorizationStatus={authStatus}><BookingPage /></PrivateRoute>
            }
            />
          </Route>
          <Route path={APPRoutes.ContactsPage} element={<ContactsPage />} />
          <Route path={APPRoutes.LoginPage} element={<LoginPage />} />
          <Route path={APPRoutes.ReservationsPage} element=
            {
              <PrivateRoute authorizationStatus={authStatus}>
                <ReservationsPage />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
