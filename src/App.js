import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { autoLogin } from './store/login';
import Header from './Components/Header';
import Content from './Components/Content';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
