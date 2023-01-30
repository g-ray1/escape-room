import { FormEvent, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { APPRoutes, AuthStatus } from '../../const';
import { store } from '../../store';
import { loginAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user/user-selectors';
import { AuthData } from '../../types/types';

function LoginForm(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const authStatus = useSelector(getAuthStatus);

  const onSubmit = (authData: AuthData) => {
    store.dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && passwordRef.current.value !== '') {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      navigate(APPRoutes.MainPage);
    }
  }, [authStatus, navigate]);

  return (
    <form
      action="#"
      className="login-form"
      onSubmit={handleSubmit}
    >
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
            <input
              ref={loginRef}
              name="email"
              type="email"
              id="email"
              placeholder="Адрес электронной почты"
              required
            />
          </div>
          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">Пароль</label>
            <input
              ref={passwordRef}
              name="password"
              type="password"
              id="password"
              placeholder="Пароль"
              required
            />
          </div>
        </div>
        <button className="btn btn--accent btn--general login-form__submit" type="submit">Войти</button>
      </div>
      <label className="custom-checkbox login-form__checkbox">
        <input
          name="user-agreement"
          type="checkbox"
          id="id-order-agreement"
          required
        />
        <span
          className="custom-checkbox__icon"
        >
          <svg width="20" height="17" aria-hidden="true">
            <use xlinkHref="#icon-tick"></use>
          </svg>
        </span>
        <span className="custom-checkbox__label">Я&nbsp;согласен с&nbsp;
          <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных
            данных
          </a>&nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default LoginForm;
