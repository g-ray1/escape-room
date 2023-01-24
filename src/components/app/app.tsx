import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from '../layout/layout';
import MainPage from '../../pages/main-page/main-page';
import QuestPage from '../../pages/quest-page/quest-page';
import ContactsPage from '../../pages/contacts-page/contacts-page';
import LoginPage from '../../pages/login-page/login-page';
import BookingPage from '../../pages/booking-page/booking-page';
import ReservationsPage from '../../pages/reservations-page/reservations-page';

import { APIRoutes } from '../../const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APIRoutes.MainPage} element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path={APIRoutes.QuestPage} element={<QuestPage />}/>
          <Route path={APIRoutes.ContactsPage} element={<ContactsPage />}/>
          <Route path={APIRoutes.LoginPage} element={<LoginPage />}/>
          <Route path={APIRoutes.BookingPage} element={<BookingPage />}/>
          <Route path={APIRoutes.ReservationsPage} element={<ReservationsPage />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
