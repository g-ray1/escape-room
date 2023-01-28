import QuestCard from '../quest-card/quest-card';
import { QuestsList } from '../../types/types';

type QuestsListProps = {
  questsList: QuestsList;
};

function QuestsListComponent(props: QuestsListProps): JSX.Element {
  const { questsList } = props;

  return (
    <div className="cards-grid">

      {questsList.map((quest) => <QuestCard quest={quest} key={quest.id}/>)}

    </div>
  );
}

export default QuestsListComponent;
