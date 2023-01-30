import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LeafletMap from '../../components/leaflet-map/leaflet-map';
import { store } from '../../store';
import { fetchQuestBookingData } from '../../store/api-actions';
import { getBookingData, getBookingDataLocations, getQuestData } from '../../store/data/data-selectors';

function BookingPage(): JSX.Element {
  const [adress, setAdress] = useState<string>('');
  const { id } = useParams();
  const { register } = useForm();

  const handleMarkerClick = (data: string) => {
    setAdress(data);
  };

  useEffect(() => {
    if (id) {
      store.dispatch(fetchQuestBookingData(id));
    }
  }, [id]);

  const quest = useSelector(getQuestData);
  const bookingData = useSelector(getBookingData);
  const locations = useSelector(getBookingDataLocations);

  return (
    <main className="page-content decorated-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp"
            srcSet={quest?.coverImgWebp}
          />
          <img
            src={quest?.coverImg}
            width="1366" height="1959" alt=""
          />
        </picture>
      </div>
      <div className="container container--size-s">
        <div className="page-content__title-wrapper">
          <h1 className="subtitle subtitle--size-l page-content__subtitle">Бронирование квеста
          </h1>
          <p className="title title--size-m title--uppercase page-content__title">{quest?.title}</p>
        </div>
        <div className="page-content__item">
          <div className="booking-map">
            <div className="map">
              <div className="map__container">

                <LeafletMap locations={locations} clickHandler={handleMarkerClick} />

              </div>
            </div>
            <p className="booking-map__address">Вы&nbsp;выбрали: {adress}</p>
          </div>
        </div>

        <form className="booking-form" action="#" method="post" >

          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Выбор даты и времени</legend>
            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Сегодня</legend>
              <div className="booking-form__date-inner-wrapper">
                {bookingData.slots?.today?.map((item) => (
                  <label className="custom-radio booking-form__date" key={item.time}>
                    <input
                      type="radio"
                      id={`today${item.time}`}
                      name="date"
                      required
                      value={`today${item.time}`}
                      disabled={!item.isAvailable}
                    />
                    <span className="custom-radio__label">{item.time}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="booking-form__date-section">
              <legend className="booking-form__date-title">Завтра</legend>
              <div className="booking-form__date-inner-wrapper">
                {bookingData.slots?.tomorrow?.map((item) => (
                  <label className="custom-radio booking-form__date" key={item.time}>
                    <input
                      type="radio"
                      id={`tomorrow${item.time}`}
                      name="date"
                      required
                      value={`tomorrow${item.time}`}
                      disabled={!item.isAvailable}
                    />
                    <span className="custom-radio__label">{item.time}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </fieldset>

          <fieldset className="booking-form__section">
            <legend className="visually-hidden">Контактная информация</legend>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="name">Ваше имя</label>
              <input type="text" id="name" placeholder="Имя" required pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
                {...register('contactPerson')}
              />
            </div>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="tel">Контактный телефон</label>
              <input type="tel" id="tel" placeholder="Телефон" required pattern="[0-9]{10,}"
                {...register('phone')}
              />
            </div>
            <div className="custom-input booking-form__input">
              <label className="custom-input__label" htmlFor="person">Количество участников</label>
              <input type="number" id="person" placeholder="Количество участников" required
                {...register('peopleCount')}
              />
            </div>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
              <input type="checkbox" id="children" name="children" />
              <span className="custom-checkbox__icon">
                <svg width="20" height="17" aria-hidden="true">
                  <use xlinkHref="#icon-tick"></use>
                </svg>
              </span>
              <span className="custom-checkbox__label">Со&nbsp;мной будут дети</span>
            </label>
          </fieldset>

          <button className="btn btn--accent btn--cta booking-form__submit" type="submit">Забронировать</button>

          <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
            <input type="checkbox" id="id-order-agreement" name="user-agreement" required />
            <span className="custom-checkbox__icon">
              <svg width="20" height="17" aria-hidden="true">
                <use xlinkHref="#icon-tick"></use>
              </svg>
            </span>
            <span className="custom-checkbox__label">Я&nbsp;согласен с
              <a className="link link--active-silver link--underlined" href="#">правилами обработки персональных данных
              </a>&nbsp;и пользовательским соглашением
            </span>
          </label>

        </form>
      </div>
    </main>
  );
}

export default BookingPage;
