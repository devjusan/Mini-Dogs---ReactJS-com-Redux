import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../store/login';
import styles from './Header.module.css';

const Header = () => {
  const { user, token } = useSelector((state) => state.login);
  const loading = token.loading || user.loading;
  const dispatch = useDispatch();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Dogs</h1>
      <div
        aria-label="Sair"
        onClick={() => dispatch(userLogout())}
        className={styles.div}
      >
        <i
          className={`${styles.circle} 
          ${loading ? styles.loading : ''}
          ${user.data ? styles.loaded : ''}
          `}
        ></i>
        <button className={styles.button}>Sair</button>
      </div>
    </header>
  );
};

export default Header;
