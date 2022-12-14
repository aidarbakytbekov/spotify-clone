import { NavList } from '@/components/navList/NavList';
import { UserLogo } from '@/components/ui/userLogo/UserLogo';
import { navMenu } from './navMenu';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <aside className={styles.wrapper}>
      <UserLogo />
      <NavList items={navMenu} />
    </aside>
  );
};
