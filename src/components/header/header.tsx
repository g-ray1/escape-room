import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { APPRoutes, AuthStatus } from '../../const';
import { getAuthStatus } from '../../store/user/user-selectors';
import LoginButton from '../login-button/login-button';
import LogoutButton from '../logout-button/logout-button';

function Header(): JSX.Element {
  const authStatus = useSelector(getAuthStatus);
  const location = useLocation();

  return (
    <header className="header">
      <div className="container container--size-l">
        <span className="logo header__logo">
          <svg width="134" height="52" aria-hidden="true">
            <use xlinkHref="#logo"></use>
          </svg>
        </span>
        <nav className="main-nav header__main-nav">
          <ul className="main-nav__list">
            <li className="main-nav__item" >
              <Link
                className={`link ${location.pathname === APPRoutes.MainPage ? 'active' : ''}`}
                to={APPRoutes.MainPage}
              >Квесты
              </Link>
            </li>
            <li className="main-nav__item">
              <Link
                className={`link ${location.pathname === APPRoutes.ContactsPage ? 'active' : ''}`}
                to={APPRoutes.ContactsPage}
              >Контакты
              </Link>
            </li>

            {authStatus === AuthStatus.Auth
              ?
              <li className="main-nav__item">
                <Link
                  className={`link ${location.pathname === APPRoutes.ReservationsPage ? 'active' : ''}`}
                  to={APPRoutes.ReservationsPage}
                >Мои бронирования
                </Link>
              </li>
              :
              ''}

          </ul>
        </nav>
        <div className="header__side-nav">

          {authStatus === AuthStatus.Auth ? <LogoutButton /> : <LoginButton />}

          <Link className="link header__side-item header__phone-link" to="tel:88003335599">8 (000) 111-11-11</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
