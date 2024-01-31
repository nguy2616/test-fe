import { useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';
import logo from './logo.svg';

function App() {
  useEffect(() => {
    // fetch('http://localhost:4000/api/auth/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     email: 'nguy2616@gmail.com',
    //     password: 'Password!23',
    //   }),
    // }).then((res) => {
    //   console.log('res', res);
    //   const socket = io('ws://localhost:8000', {
    //     withCredentials: true,
    //   });
    //   socket.on('connect', () => {
    //     console.log('socket connected');
    //   });
    // });
    const socket = io('wss://bk.cn-dev.info/ws', {
      withCredentials: true,
    });
    socket.on('connect', () => {
      console.log('socket connected');
    });

    socket.on('error', (err) => {
      console.log('socket error', err);
    });
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
