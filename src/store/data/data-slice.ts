import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { QuestsList } from '../../types/types';

type InitialState = {
  activeQuestType: string;
  questsList: QuestsList;
}

const initialState: InitialState = {
  activeQuestType: 'Все квесты',
  questsList: [],
};

export const dataSlice = createSlice({
  name: NameSpaces.Data,
  initialState,
  reducers: {
    changeActiveQuestType(state, action: PayloadAction<string>) {
      state.activeQuestType = action.payload;
    },
    fetchQuestsListAction(state, action: PayloadAction<QuestsList>) {
      state.questsList = action.payload;
    }
  }
});

export const { changeActiveQuestType, fetchQuestsListAction } = dataSlice.actions;
