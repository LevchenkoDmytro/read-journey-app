import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshToken,
} from '../../api/books';
import { handlerError } from '../helpers';
import { IUserInfo } from '../../types/data';

export const registerUserThunk = createAsyncThunk<any, IUserInfo>(
  'auth/register',
  async (userInfo, { rejectWithValue }) => {
    try {
      return await registerUser(userInfo);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  },
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (userInfo: any, { rejectWithValue }) => {
    try {
      return await loginUser(userInfo);
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
    const state = thunkApi.getState() as any;
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
