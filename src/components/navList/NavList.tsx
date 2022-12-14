import styles from './NavList.module.scss';
import { FunctionComponent } from 'react';
import { NavItem } from './NavItem';

export interface INavItem {
  Icon: FunctionComponent;
  path: string;
  display: string;
}

interface INavList {
  items: INavItem[];
}

export const NavList = ({ items }: INavList) => {
  return (
    <ul className={styles.wrapper}>
      {items.map((item) => (
        <NavItem item={item} key={item.path} />
      ))}
    </ul>
  );
};
