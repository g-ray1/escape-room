import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import BookingForm from '../../components/booking-form/booking-form';
import LeafletMap from '../../components/leaflet-map/leaflet-map';
import { store } from '../../store';
import { fetchQuestBookingData } from '../../store/api-actions';
import { getBookingData, getQuestData } from '../../store/data/data-selectors';

function BookingPage(): JSX.Element {
  const [adress, setAdress] = useState<string>('');
  const { id } = useParams();

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

                <LeafletMap locations={bookingData.locations} clickHandler={handleMarkerClick} />

              </div>
            </div>
            <p className="booking-map__address">Вы&nbsp;выбрали: {adress}</p>
          </div>
        </div>

        <BookingForm bookingData={bookingData} />

      </div>
    </main>
  );
}

export default BookingPage;
