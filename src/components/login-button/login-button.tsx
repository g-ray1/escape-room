import { Link } from 'react-router-dom';
import { APPRoutes } from '../../const';

function LoginButton(): JSX.Element {
  return (
    <Link className="btn header__side-item" to={APPRoutes.LoginPage}>Вход</Link>
  );
}

export default LoginButton;
