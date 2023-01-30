import { useLocation } from 'react-router-dom';
import LoginForm from '../../components/login-form/login-form';

function LoginPage(): JSX.Element {
  const location = useLocation();
  const fromPage = location.state as Location;

  console.log(fromPage);

  return (
    <main className="decorated-page login">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp"
            srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
          />
          <img
            src="img/content/maniac/maniac-size-m.jpg" srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x" width="1366"
            height="768" alt=""
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="login__form">

          <LoginForm />

        </div>
      </div>
    </main>
  );
}

export default LoginPage;
