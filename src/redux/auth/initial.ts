import { IState } from './types';

export const initialState: IState = {
  name: '',
  token: '',
  refreshToken: '',
  isLogin: false,
  isLoading: false,
  error: '',
};
