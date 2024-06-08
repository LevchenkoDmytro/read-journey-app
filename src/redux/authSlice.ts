import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {
  registerUser,
  // loginUser,
  // logoutUser,
  // refreshUser,
  // userInfo,
} from '../api/books';
// import { setAuthHeader } from '../api/books';
import { handlerError } from './helpers';
import { IUserInfo } from '../types/data';

export const registerUserThunk = createAsyncThunk<any, IUserInfo>(
  'auth/register',
  async (userInfo, { rejectWithValue }) => {
    try {
      return await registerUser(userInfo);
    } catch (error) {
      return handlerError(error, rejectWithValue);
    }
  }
);

// export const loginUserThunk = createAsyncThunk(
//   'auth/login',
//   async (userInfo: any, { rejectWithValue }) => {
//     try {
//       return await loginUser(userInfo);
//     } catch (error) {
//       return handlerError(error, rejectWithValue);
//     }
//   }
// );

// export const logoutUserThunk = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       return await logoutUser();
//     } catch (error) {
//       return handlerError(error, rejectWithValue);
//     }
//   }
// );

// export const refreshUserThunk = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkApi) => {
//     const state = thunkApi.getState() as any;
//     const refreshToken = state.auth.refreshToken;
//     // setAuthHeader(refreshToken);
//     if (!refreshToken) {
//       return thunkApi.rejectWithValue('no valid token');
//     }
//     return await refreshUser();
//   }
// );

// export const userInfoThunk = createAsyncThunk(
//   'auth/userInfo',
//   async (_, { rejectWithValue }) => {
//     try {
//       return await userInfo();
//     } catch (error) {
//       return handlerError(error, rejectWithValue);
//     }
//   }
// );

interface RootState {
  name: string;
  token: string;
  refreshToken: string;
  isLogin: boolean;
  isRegister: boolean;
  error: string;
  isLoading: boolean;
  isFetchingCurrentUser: boolean;
}

const initialState: RootState = {
  name: '',
  token: '',
  isLogin: false,
  isRegister: false,      // Зачем ето???????
  refreshToken: '',       // Ето нужно доработать!!!!
  error: '',
  isLoading: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    unSetRegister: state => {         // Зачем ето???????
      state.isRegister = false;   
    },
    setToken: (state: any, action) => {         // Зачем ето???????  (стейт ені виправити)
      state.token = action;             
    }
  },
  extraReducers: builder => {
    builder
      .addCase(registerUserThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUserThunk.fulfilled, state => {
        state.isLoading = false
        state.error = '';
        state.isRegister = true; 
      })
      .addCase(registerUserThunk.rejected, (state, { payload }) => {
        state.error = payload as string;
        state.isLoading = false;
      })
      // .addCase(loginUserThunk.pending, state => {
      //   state.isLoading = true;
      //   state.isFetchingCurrentUser = true;
      // })
      // .addCase(loginUserThunk.fulfilled, (state, action) => {
      //   state.token = action.payload.token;
      //   state.refreshToken = action.payload.refreshToken;
      //   state.name = action.payload.name;
      //   state.isLogin = true;
      //   state.error = '';
      //   state.isLoading = false;
      //   state.isFetchingCurrentUser = false;
      // })
      // .addCase(loginUserThunk.rejected, (state, { payload }) => {
      //   state.error = payload as string;
      //   state.isLoading = false;
      // })
      // .addCase(logoutUserThunk.fulfilled, state => {
      //   state.name = '';
      //   state.token = '';
      //   state.refreshToken = '';
      //   state.isRegister = false;
      //   state.isLogin = false;
      // })
      // .addCase(refreshUserThunk.pending, (state, action) => {
      //   state.isLoading = true;
      //   state.isFetchingCurrentUser = true;
      // })
      // .addCase(refreshUserThunk.fulfilled, (state, action) => {
      //   state.refreshToken = action.payload.refreshToken;
      //   state.isLogin = true;
      //   state.isFetchingCurrentUser = false;
      //   state.isLoading = false;
      // })
      // .addCase(refreshUserThunk.rejected, (state, action) => {
      //   state.isLoading = false;  
      // })
    // .addCase(userInfoThunk.fulfilled, (state, action) => {
    //   console.log(action.payload.name, '--> action.payload.name');
    // });
  },
});

export const authSliceReducer = authSlice.reducer;

export const { unSetRegister, setToken } = authSlice.actions;
