import { EndpointsEnum } from './types/endpoints';
import queryString from 'query-string';

export enum RoutesEnum {
  HOME = '/',
  DISCOVER = '/discover',
  SEARCH = '/search',
  LOGIN = '/login',
  LOGIN_WITH_CODE = '/loginWithCode',
}
export const authQueryParams = {
  client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  redirect_uri: 'http://localhost:3000/loginWithCode',
  response_type: 'code',
  show_dialog: true,
};

export const LOGIN_URL = `${
  EndpointsEnum.AUTH_ENDPOINT
}?${queryString.stringify(authQueryParams)}`;
