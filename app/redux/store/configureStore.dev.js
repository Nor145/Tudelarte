import {createStore, compose} from 'redux'
import {persistState} from 'redux-devtools'
// files
import reducer from '../reducer'
import DevTools from '../../root/DevTools'

const getDebugSessionKey = () => {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)

  return (matches && matches.length > 0) ? matches[1] : null
}

const createStoreWithMiddleware = compose(
  DevTools.instrument(),
  persistState(getDebugSessionKey())
)(createStore)

export default initialState => {
  const store = createStoreWithMiddleware(reducer, initialState)

  if(module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer').default

      store.replaceReducer(nextReducer)
    })
  }

  return store
}
