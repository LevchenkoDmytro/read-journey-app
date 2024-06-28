import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { initialState } from './initial';

import {
  loginUserThunk,
  logoutUserThunk,
  refreshTokenThunk,
  registerUserThunk,
} from './thunk';

import {
  handlerRejected,
  handlerPending,
  handlerRegisterFulfilled,
  handlerLoginFulfilled,
  handlerLogoutFulfilled,
  handlerRefreshFulfilled,
} from './handlers';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.fulfilled, handlerRegisterFulfilled)
      .addCase(loginUserThunk.fulfilled, handlerLoginFulfilled)
      .addCase(logoutUserThunk.fulfilled, handlerLogoutFulfilled)
      .addCase(refreshTokenThunk.fulfilled, handlerRefreshFulfilled)
      .addMatcher(
        isAnyOf(
          registerUserThunk.rejected,
          loginUserThunk.rejected,
          logoutUserThunk.rejected,
          refreshTokenThunk.rejected,
        ),
        handlerRejected,
      )
      .addMatcher(
        isAnyOf(
          registerUserThunk.pending,
          loginUserThunk.pending,
          logoutUserThunk.pending,
          refreshTokenThunk.pending,
        ),
        handlerPending,
      );
  },
});

export const authSliceReducer = authSlice.reducer;
export { refreshTokenThunk };
