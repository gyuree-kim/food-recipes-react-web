import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import fbase from './fbase';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <fbase />
  </React.StrictMode>,
  document.getElementById('root')
);
