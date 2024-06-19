import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initial';
import {
  loginUserThunk,
  logoutUserThunk,
  refreshTokenThunk,
  registerUserThunk,
} from './thunk';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUserThunk.fulfilled, state => {
        state.error = '';
        state.isLoading = false;
      })
      .addCase(registerUserThunk.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.isLoading = false;
      })
      .addCase(loginUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUserThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.name = action.payload.name;
        state.isLogin = true;
        state.error = '';
        state.isLoading = false;
      })
      .addCase(loginUserThunk.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.isLoading = false;
      })
      .addCase(logoutUserThunk.fulfilled, state => {
        state.name = '';
        state.token = '';
        state.refreshToken = '';
        state.isLogin = false;
      })
      .addCase(refreshTokenThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.refreshToken = action.payload.refreshToken;
        state.isLoading = false;
      })
      .addCase(refreshTokenThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshTokenThunk.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const authSliceReducer = authSlice.reducer;
export { refreshTokenThunk };
