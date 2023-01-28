import { Quest } from '../../types/types';

type QuestPageProps = {
  quest: Quest;
}

function QuestCard(props: QuestPageProps): JSX.Element {
  const { title, previewImg, previewImgWebp, level, peopleMinMax } = props.quest;
  const peoppleMin = peopleMinMax[0];
  const peopleMax = peopleMinMax[1];

  return (
    <div className="quest-card">
      <div className="quest-card__img">
        <picture>
          <source type="image/webp"
            srcSet={previewImgWebp}
          />
          <img
            src={previewImg} srcSet={previewImg} width="344"
            height="232" alt="Мужчина в клетке в подземелье."
          />
        </picture>
      </div>
      <div className="quest-card__content">
        <div className="quest-card__info-wrapper"><a className="quest-card__link" href="quest.html">{title}</a>
        </div>
        <ul className="tags quest-card__tags">
          <li className="tags__item">
            <svg width="11" height="14" aria-hidden="true">
              <use xlinkHref="#icon-person"></use>
            </svg>{peoppleMin}&ndash;{peopleMax}&nbsp;чел
          </li>
          <li className="tags__item">
            <svg width="14" height="14" aria-hidden="true">
              <use xlinkHref="#icon-level"></use>
            </svg>{level}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default QuestCard;
