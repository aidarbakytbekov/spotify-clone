import { authService } from '@/services/auth.service';
import axios from 'axios';
import Cookies from 'js-cookie';
import { errorCatch } from './api.helpers';

export const retrieveAccessTokenInstance = axios.create({
  baseURL: 'https://accounts.spotify.com/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

const instance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('access_token');

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === 'The access token expired') &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await authService.getNewAccessToken();
        return instance.request(originalRequest);
      } catch (e) {
        if (errorCatch(e) === 'The access token expired') {
          Cookies.remove('access_token');
          Cookies.remove('refresh_token');
        }
      }
    }
    throw error;
  }
);

export default instance;
