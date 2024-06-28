import axios, { AxiosInstance } from 'axios';

export const instance: AxiosInstance = axios.create({
  baseURL: 'https://readjourney.b.goit.study/api/',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
});
