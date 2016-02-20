/* @flow */
'use strict';

import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import {reducer as form} from 'redux-form';
// files
import user from './modules/user'
import toggle from './modules/ui/toggle'

const ui = combineReducers({
	toggle
})

export default combineReducers({
	form,
	router,
  ui,
  user
})