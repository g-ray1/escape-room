import { createSlice } from '@reduxjs/toolkit';
import { AuthStatus, NameSpaces } from '../../const';
import { loginAction, logoutAction } from '../api-actions';

type InitialState = {
  authorizationStatus: string;
};

const initialState: InitialState = {
  authorizationStatus: AuthStatus.Unknown,
};

export const userSlice = createSlice({
  name: NameSpaces.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginAction.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      });
  }
});
