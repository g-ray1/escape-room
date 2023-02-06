import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoutes } from '../const';
import { dropToken, saveToken } from '../services/token';
import { AppDispatch, State } from '../types/state';
import { AuthData, BookingData, BookingRequest, Quest, QuestsList, UserData } from '../types/types';

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data: { token } } = await api.post<UserData>(APIRoutes.Login, { email, password });
    saveToken(token);
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
  }
);

export const fetchQuestsListAction = createAsyncThunk<QuestsList, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestsList',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<QuestsList>(APIRoutes.QuestsList);
    return data;
  }
);

export const fetchQuestAction = createAsyncThunk<Quest, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuest',
  async (questId, { dispatch, extra: api }) => {
    const { data } = await api.get<Quest>(`${APIRoutes.Quest}${questId}`);
    if (data) {
      return (data);
    } else {
      throw new Error('No data');
    }
  });

export const fetchQuestBookingData = createAsyncThunk<BookingData, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchQuestBookingData',
  async (questId, { dispatch, extra: api }) => {
    const { data } = await api.get<BookingData>(`${APIRoutes.Quest}${questId}${APIRoutes.Booking}`);
    if (data) {
      return (data);
    } else {
      throw new Error('No data');
    }
  });

export const postQuestBookingData = createAsyncThunk<void, [number, BookingRequest], {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postQuestBookingData',
  async ([questId], { extra: api }) => {
    await api.post<BookingRequest>(`${APIRoutes.Quest}${questId}${APIRoutes.Booking}`);
  });
