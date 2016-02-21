/* @flow */
'use strict'

import { routeActions } from 'react-router-redux'

import loginWithPassword from 'libs/firebase/user/loginWithPassword'

import { HOME } from 'tools/constants/routes'

export const  onSubmit = (data, dispatch) => (
	loginWithPassword(data)
	.then(() => dispatch(routeActions.push(HOME)))
)