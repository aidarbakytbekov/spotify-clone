import { NavList } from '@/components/navList/NavList';
import { navMenu } from './navMenu';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <aside className={styles.wrapper}>
      <NavList items={navMenu} />
    </aside>
  );
};
