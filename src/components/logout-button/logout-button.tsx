import { Link } from 'react-router-dom';
import { APPRoutes } from '../../const';
import { store } from '../../store';
import { logoutAction } from '../../store/api-actions';

function LogoutButton(): JSX.Element {
  //const handleClick = () => store.dispatch(logoutAction());

  return (
    <Link
      className="btn btn--accent header__side-item"
      to={APPRoutes.MainPage}
      onClick={() => {
        store.dispatch(logoutAction());
      }}
    >
      Выйти
    </Link>
  );
}

export default LogoutButton;
