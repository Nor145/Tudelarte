import React from 'react'
import ReactDOM from 'react-dom'
// files
import Root from './root/root.jsx'
import configureStore from './redux/store/configureStore'
import './main.css'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('app')
);
