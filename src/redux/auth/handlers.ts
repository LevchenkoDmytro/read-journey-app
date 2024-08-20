import { IState } from './types';
import { PayloadAction } from '@reduxjs/toolkit';

export const handlerRejected = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  state.error = payload;
  state.isLoading = false;
};

export const handlerPending = (state: IState) => {
  state.isLoading = true;
};

export const handlerRegisterFulfilled = (state: IState) => {
  state.error = '';
  state.isLoading = false;
};
export const handlerLoginFulfilled = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  console.log(payload);

  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
  state.name = payload.name;
  state.isLogin = true;
  state.error = '';
  state.isLoading = false;
};
export const handlerLogoutFulfilled = (state: IState) => {
  state.name = '';
  state.token = '';
  state.refreshToken = '';
  state.isLogin = false;
  state.error = '';
  state.isLoading = false;
};
export const handlerRefreshFulfilled = (
  state: IState,
  { payload }: PayloadAction<any>,
) => {
  state.token = payload.token;
  state.refreshToken = payload.refreshToken;
  state.isLoading = false;
  state.error = '';
};
