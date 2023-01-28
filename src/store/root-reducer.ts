import { combineReducers } from '@reduxjs/toolkit';
import { NameSpaces } from '../const';
import { dataSlice } from './data/data-slice';

export const rootReducer = combineReducers({
  [NameSpaces.Data]: dataSlice.reducer,
});
