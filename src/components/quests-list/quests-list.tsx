import QuestCard from '../quest-card/quest-card';
import { useSelector } from 'react-redux';
import { getActiveQuestLevel, getActiveQuestType, getQuestsByLevel, getQuestsByType, getQuestsList } from '../../store/data/data-selectors';
import { store } from '../../store';
import { setQuestsByLevel, setQuestsByType } from '../../store/data/data-slice';
import { QuestLevels, QuestTypes } from '../../const';

function QuestsListComponent(): JSX.Element {
  const activeType = useSelector(getActiveQuestType);
  const activeLevel = useSelector(getActiveQuestLevel);
  const questsList = useSelector(getQuestsList);
  const questsListByType = useSelector(getQuestsByType);
  const questsListByLevel = useSelector(getQuestsByLevel);

  if (activeType === QuestTypes.all && questsListByLevel) {
    store.dispatch(setQuestsByLevel(questsListByLevel));

    return (
      <div className="cards-grid">
        {questsListByLevel.map((quest) => <QuestCard quest={quest} key={quest.id} />)}
      </div>
    );
  } else if (activeLevel === QuestLevels.all && questsListByType) {
    store.dispatch(setQuestsByType(questsListByType));

    return (
      <div className="cards-grid">
        {questsListByType.map((quest) => <QuestCard quest={quest} key={quest.id} />)}
      </div>
    );
  } else {
    return (
      <div className="cards-grid">
        {questsList.map((quest) => <QuestCard quest={quest} key={quest.id} />)}
      </div>
    );
  }
}

export default QuestsListComponent;
