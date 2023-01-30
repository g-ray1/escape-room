import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { APPRoutes } from '../../const';
import { store } from '../../store';
import { fetchQuestAction } from '../../store/api-actions';
import { getQuestData } from '../../store/data/data-selectors';

function QuestPage(): JSX.Element {
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      store.dispatch(fetchQuestAction(id));
    }
  }, [id]);

  const quest = useSelector(getQuestData);

  return (
    <main className="decorated-page quest-page">
      <div className="decorated-page__decor" aria-hidden="true">
        <picture>
          <source type="image/webp"
            srcSet={quest?.coverImgWebp}
          />
          <img
            src={quest?.coverImg} width="1366"
            height="768" alt=""
          />
        </picture>
      </div>
      <div className="container container--size-l">
        <div className="quest-page__content">
          <h1 className="title title--size-l title--uppercase quest-page__title">{quest?.title}</h1>
          <p className="subtitle quest-page__subtitle"><span className="visually-hidden">Жанр:</span>{quest?.type}
          </p>
          <ul className="tags tags--size-l quest-page__tags">
            <li className="tags__item">
              <svg width="11" height="14" aria-hidden="true">
                <use xlinkHref="#icon-person"></use>
              </svg>3&ndash;6&nbsp;чел
            </li>
            <li className="tags__item">
              <svg width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-level"></use>
              </svg>{quest?.level}
            </li>
          </ul>
          <p className="quest-page__description">
            {quest?.description}
          </p>
          <Link className="btn btn--accent btn--cta quest-page__btn" to={APPRoutes.BookingPage}>Забронировать</Link>
        </div>
      </div>
    </main>
  );
}

export default QuestPage;
