import React from 'react'
import {Provider} from 'react-redux'
// files
import App from '../layouts/App.jsx'
import DevTools from './DevTools.jsx'

const devtoolsComponent = window.devToolsExtension ? undefined : <DevTools />

export default ({
  store
}) => (
  <Provider store={store}>
    <div>
      <App />
      {devtoolsComponent}
    </div>
  </Provider>
)