import Cookies from 'js-cookie';
export const useAuth = () => {
  return Cookies.get('access_token');
};
