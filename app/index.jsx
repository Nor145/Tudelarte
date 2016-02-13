/* @flow */
'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { browserHistory } from 'react-router';
import useScroll from 'scroll-behavior/lib/useScrollToTop';
// files
import reduxRouterMiddleware from 'redux_app/middlewares/reduxRouterMiddleware'
import configureStore from 'redux_app/store/configureStore'
import Routes from 'routes'

import './main.css'

const main = () => {
	const store = configureStore()
	reduxRouterMiddleware.listenForReplays(store, (state) => state.router.location);

	const app = document.createElement('div')
	document.body.appendChild(app)

	ReactDOM.render(
		<Provider store={ store }>
    	<Router history={ useScroll(() => browserHistory)() }>
    		{Routes}
    	</Router>
  	</Provider>, app)
}

main()

