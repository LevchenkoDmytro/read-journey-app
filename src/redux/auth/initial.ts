export const initialState: IState = {
  name: '',
  token: '',
  refreshToken: '',
  isLogin: false,
  isLoading: false,
  error: '',
};

interface IState {
  name: string;
  token: string;
  refreshToken: string;
  isLogin: boolean;
  isLoading: boolean;
  error: string;
}
