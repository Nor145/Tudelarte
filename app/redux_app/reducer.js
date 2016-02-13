/* @flow */
'use strict';

import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
// files
import sideMenus from './modules/sideMenus'

export default combineReducers({
	router,
  sideMenus
});