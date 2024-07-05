import { IUserInfo } from '../../types/data';
import { NavigateFunction } from 'react-router-dom';

export interface IState {
  name: string;
  token: string;
  refreshToken: string;
  isLogin: boolean;
  isLoading: boolean;
  error: string;
}

export interface IRegisterThunkProps {
  userInfo: IUserInfo;
  navigate: NavigateFunction;
}
