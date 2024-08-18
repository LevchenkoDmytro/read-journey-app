import { instance } from './instance';
import { refreshTokenThunk } from '../../redux/auth/thunk';
import { RootState, AppDispatch } from '../../redux/store';

const setUpInterceptors = (store: {
  getState: () => RootState;
  dispatch: AppDispatch;
}) => {
  instance.interceptors.request.use(
    async config => {
      const state = store.getState();
      const token = state.auth.token;
      const refreshToken = state.auth.refreshToken;

      if (refreshToken && config.url === 'users/current/refresh') {
        config.headers['Authorization'] = `Bearer ${refreshToken}`;
      } else if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }

      return config;
    },
    error => {
      console.error('Request error:', error);

      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;
      console.log(originalRequest._retry);

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          await store.dispatch(refreshTokenThunk());
          const state = store.getState();
          const newAccessToken = state.auth.token;

          if (newAccessToken) {
            originalRequest.headers['Authorization'] =
              `Bearer ${newAccessToken}`;
            return instance(originalRequest);
          }
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError);
        }
      }

      return Promise.reject(error);
    },
  );
};

export default setUpInterceptors;
