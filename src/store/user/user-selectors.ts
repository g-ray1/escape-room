import { NameSpaces } from '../../const';
import { State } from '../../types/state';

export const getAuthStatus = (state: State) => state[NameSpaces.User].authorizationStatus;
