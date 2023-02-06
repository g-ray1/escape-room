import { Navigate, useLocation } from 'react-router-dom';
import { APPRoutes, AuthStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: string;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  const location = useLocation();

  if (authorizationStatus !== AuthStatus.Auth) {
    return (
      <Navigate to={APPRoutes.LoginPage} state={{from: location}} replace={false}/>
    );
  }

  return children;
}

export default PrivateRoute;
