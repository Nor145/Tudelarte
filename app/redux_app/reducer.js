/* @flow */
'use strict';

import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
// files
import user from './modules/user'
import toggle from './modules/ui/toggle'

const ui = combineReducers({
	toggle
})

export default combineReducers({
	router,
  ui,
  user
})