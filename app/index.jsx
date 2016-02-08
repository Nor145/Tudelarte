import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root/root.jsx';
import configureStore from './redux/store/configureStore';
// my files
import './main.css';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);
