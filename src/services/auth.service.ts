import { authQueryParams } from '@/shared/constants';
import axios, { retrieveAccessTokenInstance } from '../shared/api/api.config';
import Cookies from 'js-cookie';
import { TokensResponse, UserProfile } from '@/services/types/user';

export const authService = {
  loginWithCode: async (code: string | null) => {
    try {
      const res = await retrieveAccessTokenInstance.post<TokensResponse>(
        'api/token',
        {
          client_id: authQueryParams.client_id,
          redirect_uri: authQueryParams.redirect_uri,
          grant_type: 'authorization_code',
          code,
          client_secret: process.env.REACT_APP_CLIENT_SECRET,
        }
      );
      if (res.data) {
        const { refresh_token, access_token } = res.data;
        Cookies.set('access_token', access_token);
        Cookies.set('refresh_token', refresh_token);
      }
    } catch (error) {
      console.log(error);
    }
  },
  getNewAccessToken: async () => {
    const refresh_token = Cookies.get('refresh_token');
    console.log(refresh_token);
    const res = await retrieveAccessTokenInstance.post('api/tokens', {
      client_id: authQueryParams.client_id,
      redirect_uri: authQueryParams.redirect_uri,
      grant_type: 'refresh_token',
      refresh_token,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    });
    if (res.data.access_token) {
      Cookies.set('access_token', res.data.access_token);
    }
  },
  getProfile: async (): Promise<UserProfile> => {
    try {
      const res = await axios.get<UserProfile>('/me');
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
