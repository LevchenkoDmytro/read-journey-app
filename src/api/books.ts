import axios, { AxiosInstance } from 'axios';
import { IUserInfo } from '../types/data';

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api/',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});

export const setAuthHeader = (token: string) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  instance.defaults.headers.common.Authorization = '';
};

export const registerUser = async (userInfo: IUserInfo) => {
  const { data } = await instance.post('users/signup', userInfo);
  return data;
};

export const loginUser = async (userInfo: any) => {
  const { data } = await instance.post('users/signin', userInfo);
  setAuthHeader(data.token);
  return data;
};

export const logoutUser = async () => {
  await instance.post('users/signout');
  clearAuthHeader();
};

export const refreshToken = async () => {
  const { data } = await instance.get('users/current/refresh');
  const newToken = data.token;
  setAuthHeader(newToken);
  return data;
};
