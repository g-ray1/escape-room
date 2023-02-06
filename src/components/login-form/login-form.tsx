import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { APPRoutes, EMAIL_REGEXP, PASSWORD_REGEXP } from '../../const';
import { store } from '../../store';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/types';

function LoginForm(): JSX.Element {
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm<AuthData>();
  const navigate = useNavigate();

  const onSubmit = (data: AuthData) => {
    store.dispatch(loginAction(data));
    navigate(APPRoutes.MainPage);
  };

  return (
    <form
      action="https://echo.htmlacademy.ru/"
      className="login-form"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="login-form__inner-wrapper">
        <h1 className="title title--size-s login-form__title">Вход</h1>
        <div className="login-form__inputs">

          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="email">E&nbsp;&ndash;&nbsp;mail</label>
            <input
              {...register('email', {
                required: 'Поле обязательно к заполнению!', pattern: EMAIL_REGEXP,
              })}
              type="email"
              id="email"
              placeholder="Адрес электронной почты"
            />
            <div>
              {errors?.email && <p>{errors?.email?.message || 'Пример корректного E-mail: example@mail.com'}</p>}
            </div>
          </div>

          <div className="custom-input login-form__input">
            <label className="custom-input__label" htmlFor="password">Пароль</label>
            <input
              {...register('password', {
                required: 'Поле обязательно к заполнению!',
                pattern: PASSWORD_REGEXP })}
              type="password"
              id="password"
              placeholder="Пароль"
            />
            <div>
              {errors?.password && <p>{errors?.password?.message || 'Пароль должен состоять не менее чем из 3 символов, содержать минимум одну букву и одну цифру, и в нём не должно быть пробелов.'}</p>}
            </div>
          </div>

        </div>
        <button
          className="btn btn--accent btn--general login-form__submit"
          type="submit"
        >
          Войти
        </button>
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
        <span className="custom-checkbox__label">
          Я&nbsp;согласен с&nbsp;
          <a className="link link--active-silver link--underlined" href="#">
            правилами обработки персональныхданных
          </a>
          &nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default LoginForm;
