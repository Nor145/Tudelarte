/* @flow */
import {createStore, compose} from 'redux'
import {persistState} from 'redux-devtools'
// files
import reducer from '../reducer'
import DevTools from '../../root/DevTools'

// To persist debug sessions across page reloads just add to the
// ?debug_session=<session_name>

const getDebugSessionKey = () => {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)

  return (matches && matches.length > 0) ? matches[1] : null
}

// flow doesn't work here
const createStoreWithMiddleware = compose(
  window.devToolsExtension ? window.devToolsExtension() : DevTools.instrument(),
  window.devToolsExtension ? f => f : persistState(getDebugSessionKey())
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
