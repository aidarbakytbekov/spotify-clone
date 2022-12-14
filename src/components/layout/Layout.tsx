import { PropsWithChildren } from 'react';
import { Header } from './header/Header';
import { Sidebar } from './sidebar/Sidebar';
import styles from './Layout.module.scss';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Sidebar />
      <main className="main">{children}</main>
    </div>
  );
};
