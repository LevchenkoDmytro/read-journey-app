import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshToken,
} from '../../api/auth';
import { handlerError } from '../helpers';
import { IRegisterThunkProps } from './types';
import { RootState } from '../store';

export const registerUserThunk = createAsyncThunk(
  'auth/register',
  async ({ userInfo, navigate }: IRegisterThunkProps, { rejectWithValue }) => {
    try {
      const result = await registerUser(userInfo);
      navigate('/sign-in');
      return result;
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async ({ userInfo, navigate }: IRegisterThunkProps, { rejectWithValue }) => {
    try {
      const result = await loginUser(userInfo);
      navigate('/');
      return result;
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const logoutUserThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      return await logoutUser();
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const refreshTokenThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState() as RootState;
    const token = state.auth.refreshToken;

    if (!token) {
      return;
    }

    try {
      return await refreshToken();
    } catch (error) {
      return handlerError(error, thunkApi.rejectWithValue);
    }
  },
);
