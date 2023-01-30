import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { QuestLevels, QuestTypes } from '../../const';
import { getActiveQuestLevel, getActiveQuestType } from '../../store/data/data-selectors';
import { changeQuestLevel, changeQuestType } from '../../store/data/data-slice';

function QuestTypeSelector(): JSX.Element {
  const dispatch = useDispatch();
  const activeQuestType = useSelector(getActiveQuestType);
  const activeQuestLevel = useSelector(getActiveQuestLevel);

  return (
    <form className="filter" action="#" method="get">
      <fieldset className="filter__section">
        <legend className="visually-hidden">Тематика</legend>
        <ul className="filter__list">
          <li className="filter__item">
            <input type="radio" name="type" id="all" checked={activeQuestType === QuestTypes.all} />
            <label className="filter__label" htmlFor="all">
              <svg className="filter__icon" width="26" height="30" aria-hidden="true">
                <use xlinkHref="#icon-all-quests"></use>
              </svg>
              <span
                className="filter__label-text" onClick={
                  () => {
                    dispatch(changeQuestType(QuestTypes.all));
                    dispatch(changeQuestLevel(QuestLevels.all));
                  }
                }
              >
                Все квесты
              </span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="adventure" checked={activeQuestType === QuestTypes.adventures} />
            <label className="filter__label" htmlFor="adventure" >
              <svg className="filter__icon" width="36" height="30" aria-hidden="true">
                <use xlinkHref="#icon-adventure"></use>
              </svg>
              <span
                className="filter__label-text" onClick={
                  () => {
                    dispatch(changeQuestType(QuestTypes.adventures));
                    dispatch(changeQuestLevel(QuestLevels.all));
                  }
                }
              >
                Приключения
              </span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="horror" checked={activeQuestType === QuestTypes.horror} />
            <label className="filter__label" htmlFor="horror">
              <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                <use xlinkHref="#icon-horror"></use>
              </svg>
              <span
                className="filter__label-text" onClick={
                  () => {
                    dispatch(changeQuestType(QuestTypes.horror));
                    dispatch(changeQuestLevel(QuestLevels.all));
                  }
                }
              >
                Ужасы
              </span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="mystic" checked={activeQuestType === QuestTypes.mystic} />
            <label className="filter__label" htmlFor="mystic">
              <svg className="filter__icon" width="30" height="30" aria-hidden="true">
                <use xlinkHref="#icon-mystic"></use>
              </svg>
              <span
                className="filter__label-text" onClick={
                  () => {
                    dispatch(changeQuestType(QuestTypes.mystic));
                    dispatch(changeQuestLevel(QuestLevels.all));
                  }
                }
              >
                Мистика
              </span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="detective" checked={activeQuestType === QuestTypes.detective} />
            <label className="filter__label" htmlFor="detective">
              <svg className="filter__icon" width="40" height="30" aria-hidden="true">
                <use xlinkHref="#icon-detective"></use>
              </svg>
              <span
                className="filter__label-text" onClick={
                  () => {
                    dispatch(changeQuestType(QuestTypes.detective));
                    dispatch(changeQuestLevel(QuestLevels.all));
                  }
                }
              >
                Детектив
              </span>
            </label>
          </li>
          <li className="filter__item">
            <input type="radio" name="type" id="sciFi" checked={activeQuestType === QuestTypes['sci-fi']} />
            <label className="filter__label" htmlFor="sciFi">
              <svg className="filter__icon" width="28" height="30" aria-hidden="true">
                <use xlinkHref="#icon-sci-fi"></use>
              </svg>
              <span
                className="filter__label-text" onClick={
                  () => {
                    dispatch(changeQuestType(QuestTypes['sci-fi']));
                    dispatch(changeQuestLevel(QuestLevels.all));
                  }
                }
              >
                Sci-fi
              </span>
            </label>
          </li>
        </ul>
      </fieldset>
      <fieldset className="filter__section">
        <legend className="visually-hidden">Сложность</legend>
        <ul className="filter__list">
          <li className="filter__item" onClick={
            () => {
              dispatch(changeQuestType(QuestTypes.all));
              dispatch(changeQuestLevel(QuestLevels.all));
            }
          }
          >
            <input type="radio" name="level" id="any" checked={activeQuestLevel === QuestLevels.all} />
            <label className="filter__label" htmlFor="any"><span className="filter__label-text">Любой</span>
            </label>
          </li>
          <li className="filter__item" onClick={
            () => {
              dispatch(changeQuestType(QuestTypes.all));
              dispatch(changeQuestLevel(QuestLevels.easy));
            }
          }
          >
            <input type="radio" name="level" id="easy" checked={activeQuestLevel === QuestLevels.easy} />
            <label className="filter__label" htmlFor="easy"><span className="filter__label-text">Лёгкий</span>
            </label>
          </li>
          <li className="filter__item" onClick={
            () => {
              dispatch(changeQuestType(QuestTypes.all));
              dispatch(changeQuestLevel(QuestLevels.middle));
            }
          }
          >
            <input type="radio" name="level" id="middle" checked={activeQuestLevel === QuestLevels.middle} />
            <label className="filter__label" htmlFor="middle"><span className="filter__label-text">Средний</span>
            </label>
          </li>
          <li className="filter__item" onClick={
            () => {
              dispatch(changeQuestType(QuestTypes.all));
              dispatch(changeQuestLevel(QuestLevels.hard));
            }
          }
          >
            <input type="radio" name="level" id="hard" checked={activeQuestLevel === QuestLevels.hard} />
            <label className="filter__label" htmlFor="hard"><span className="filter__label-text">Сложный</span>
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  );
}

export default QuestTypeSelector;
