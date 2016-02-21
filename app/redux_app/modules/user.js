'use strict'
/* @flow */

const ADD_USER_STATE = 'ADD_USER_STATE'
const REMOVE_USER_STATE = 'REMOVE_USER_STATE'

const initialState = {
	logged: false
}

export default (state = initialState, {type, user}) => {
	switch (type) {
		case ADD_USER_STATE:
			return {
				logged: true,
				firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role
			}
		case REMOVE_USER_STATE:
			return {
				logged: false
			}
		default:
			return state
	}
}

export const addUserState = (user) => ({
	type: ADD_USER_STATE,
	user
})

export const removeUserState = () => ({
	type: REMOVE_USER_STATE
})