import { combineReducers } from '@reduxjs/toolkit';
import { NameSpaces } from '../const';
import { dataSlice } from './data/data-slice';
import { userSlice } from './user/user-slice';

export const rootReducer = combineReducers({
  [NameSpaces.Data]: dataSlice.reducer,
  [NameSpaces.User]: userSlice.reducer,
});
