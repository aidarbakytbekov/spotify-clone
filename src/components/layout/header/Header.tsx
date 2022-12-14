import styles from './Header.module.scss';
import { MdWbSunny } from 'react-icons/md';
import { BsFillMoonFill } from 'react-icons/bs';
import cn from 'classnames';
export const Header = () => {
  return (
    <header className={styles.wrapper}>
      <div className={cn('container', styles.container)}>
        <h1>Your favorite tunes </h1>
        <div>
          <h2>
            All{' '}
            <MdWbSunny
              style={{
                fontSize: '40px',
                color: 'yellow',
              }}
            />
            and
            <BsFillMoonFill
              style={{
                fontSize: '30px',
              }}
            />
          </h2>
        </div>
      </div>
    </header>
  );
};
