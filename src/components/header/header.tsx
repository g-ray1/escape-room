import { Link } from 'react-router-dom';
import { APIRoutes } from '../../const';

function Header(): JSX.Element {
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
            <li className="main-nav__item">
              <Link className="link" to={APIRoutes.MainPage}>Квесты</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to={APIRoutes.ContactsPage}>Контакты</Link>
            </li>
            <li className="main-nav__item">
              <Link className="link" to={APIRoutes.ReservationsPage}>Мои бронирования</Link>
            </li>
          </ul>
        </nav>
        <div className="header__side-nav">
          <Link className="btn btn--accent header__side-item" to={APIRoutes.MainPage}>Выйти</Link>
          <Link className="link header__side-item header__phone-link" to="tel:88003335599">8 (000) 111-11-11</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
