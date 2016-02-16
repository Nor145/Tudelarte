/* @flow */
'use strict';

import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
// files
import sideMenus from './modules/sideMenus'
import user from './modules/user'

export default combineReducers({
	router,
  sideMenus,
  user
});