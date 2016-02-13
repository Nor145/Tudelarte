/* @flow */
import React from 'react'
import ReactDOM from 'react-dom'
// files
import Root from 'root/Root'
import configureStore from 'redux_app/store/configureStore'
import './main.css'

const store = configureStore()

const app = document.createElement('div')
document.body.appendChild(app)

ReactDOM.render(<Root store={store} />, app)

