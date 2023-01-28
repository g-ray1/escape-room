import { NameSpaces } from '../../const';
import { State } from '../../types/state';

export const getQuestsList = (state: State) => state[NameSpaces.Data].questsList;
