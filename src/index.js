import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Time,Button,App} from './App.js';
import * as serviceWorker from './serviceWorker';
import {Tictactoe} from './tictactoe.js'
ReactDOM.render(
  <React.StrictMode>
    <Time />
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root1')
);
ReactDOM.render(
  <React.StrictMode>
    <Button />
  </React.StrictMode>,
  document.getElementById('button')
);
ReactDOM.render(
  <React.StrictMode>
    <Tictactoe />
  </React.StrictMode>,
  document.getElementById('tictactoe')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
