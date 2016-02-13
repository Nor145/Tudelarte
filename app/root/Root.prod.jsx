import React from 'react'
import {Provider} from 'react-redux'
// files
import App from 'components/layouts/App.jsx'

export default ({
  store
}) => (
  <Provider store={store}>
    <App />
  </Provider>
)