import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../store/login';
import styles from './Login.module.css';

const Login = () => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <form className="anime" onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="username">
        Usuário
      </label>
      <input
        required
        className={styles.input}
        value={username}
        onChange={({ target }) => setUserName(target.value)}
        id="username"
        type="text"
      />
      <label className={styles.label} htmlFor="password">
        Senha
      </label>
      <input
        required
        className={styles.input}
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        id="password"
        type="password"
      />
      <button className={styles.button}>Enviar</button>
    </form>
  );
};

export default Login;
