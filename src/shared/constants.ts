import { EndpointsEnum } from './types/endpoints';

export const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const RESPONSE_TYPE = 'token';
export const LOGIN_URL = `${EndpointsEnum.AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&show_dialog=true`;
