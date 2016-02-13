/* @flow */
'use strict'

import {createStore, compose, applyMiddleware} from 'redux'
// files
import reducer from '../reducer'
import reduxRouterMiddleware from '../middlewares/reduxRouterMiddleware'

const middlewares = applyMiddleware(reduxRouterMiddleware)

const createStoreWithMiddleware = compose(
	middlewares,
  window.devToolsExtension()
)(createStore)

export default (initialState: Object|void):Object => {
  const store = createStoreWithMiddleware(reducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer').default

      store.replaceReducer(nextReducer)
    })
  }

  return store
}
