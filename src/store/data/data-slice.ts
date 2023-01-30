import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { BookingData, Quest, QuestsList } from '../../types/types';
import { fetchQuestAction, fetchQuestBookingData, fetchQuestsListAction } from '../api-actions';

type InitialState = {
  activeQuestType: string;
  activeQuestLevel: string;
  questsList: QuestsList;
  questsByType: QuestsList;
  questsByLevel: QuestsList;
  quest?: Quest;
  bookingData: BookingData;
}

const initialState: InitialState = {
  activeQuestType: 'Все квесты',
  activeQuestLevel: 'Любой',
  questsList: [] as QuestsList,
  questsByType: [] as QuestsList,
  questsByLevel: [] as QuestsList,
  quest: {} as Quest,
  bookingData: {} as BookingData,
};

export const dataSlice = createSlice({
  name: NameSpaces.Data,
  initialState,
  reducers: {
    changeQuestType(state, action: PayloadAction<string>) {
      state.activeQuestType = action.payload;
    },
    changeQuestLevel(state, action: PayloadAction<string>) {
      state.activeQuestLevel = action.payload;
    },
    setQuestsByType(state, action: PayloadAction<QuestsList>) {
      state.questsByType = action.payload;
    },
    setQuestsByLevel(state, action: PayloadAction<QuestsList>) {
      state.questsByLevel = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestsListAction.fulfilled, (state, action: PayloadAction<QuestsList>) => {
        state.questsList = action.payload;
      })
      .addCase(fetchQuestAction.fulfilled, (state, action: PayloadAction<Quest>) => {
        state.quest = action.payload;
      })
      .addCase(fetchQuestBookingData.fulfilled, (state, action: PayloadAction<BookingData>) => {
        state.bookingData = action.payload;
      });
  },
});

export const { changeQuestType, setQuestsByType, changeQuestLevel, setQuestsByLevel } = dataSlice.actions;
