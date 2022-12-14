import { useLocation, useNavigate } from 'react-router-dom';
import { authService } from '../../../services/auth.service';
import { useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/shared/firebaseConfig';
import Cookies from 'js-cookie';
function useSearchQuery() {
  return new URLSearchParams(useLocation().search);
}

export const LoginWithCode = () => {
  const query = useSearchQuery();
  const code = query.get('code');
  const navigate = useNavigate();
  useEffect(() => {
    async function doLogin() {
      await setDoc(doc(db, 'user', 'loginCode'), {
        code,
      });
      await authService.loginWithCode(code);
      const accessToken = Cookies.get('access_token');
      if (accessToken) {
        navigate('/');
      }
    }
    doLogin();
  }, []);

  return <div>Logging you in...</div>;
};
