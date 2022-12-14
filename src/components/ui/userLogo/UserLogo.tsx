import { useQuery } from 'react-query';
import { authService } from '@/services/auth.service';
import styles from './UserLogo.module.scss';
import { Link } from 'react-router-dom';
import defaultPhoto from '@/assets/img/avatar.png';

export const UserLogo = () => {
  const { data: user, isLoading } = useQuery('fetch user profile', async () =>
    authService.getProfile()
  );
  console.log(user);
  return !isLoading && user ? (
    <a href={user.external_urls.spotify} target="_blank">
      <div className={styles.wrapper}>
        {user?.images.length ? (
          <img
            className={styles.avatar}
            src={user.images[0].url}
            alt="User avatar"
          />
        ) : (
          <img className={styles.avatar} src={defaultPhoto} alt="User avatar" />
        )}
        <span>{user?.display_name}</span>
      </div>
    </a>
  ) : (
    <span>Loading...</span>
  );
};
