import axios from 'axios';
import { setToken } from '../redux/authSlice';
import { useAppSelector } from '../hooks/reduxHooks';
import { IUserInfo } from '../types/data';
axios.defaults.baseURL = 'https://readjourney.b.goit.study/api/';


export const registerUser = async (userInfo: IUserInfo) => {
  const { data } = await axios.post('users/signup', userInfo);
  return data;
};

export const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};