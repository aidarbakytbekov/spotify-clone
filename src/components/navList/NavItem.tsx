import { Link, useLocation } from 'react-router-dom';
import { INavItem } from './NavList';
import styles from './NavList.module.scss';

export const NavItem = ({ item }: { item: INavItem }) => {
  const { pathname } = useLocation();
  return (
    <li className={styles.item}>
      <div className={styles.iconWrapper}>
        <item.Icon />
      </div>
      <Link to={item.path}>{item.display}</Link>
    </li>
  );
};
