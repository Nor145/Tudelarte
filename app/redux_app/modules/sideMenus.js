'use strict'
/* @flow */

import {MAIN, CREATE, FAVOURITES, CART} from 'tools/consts.js'

const REVERSE_MAIN_MENU = 'REVERSE_MAIN_MENU'
const REVERSE_CREATE_MENU = 'REVERSE_CREATE_MENU'
const REVERSE_FAVOURITES_MENU = 'REVERSE_FAVOURITES_MENU'
const REVERSE_CART_MENU = 'REVERSE_CART_MENU'

const initialState = {
	main: false,
	create: false,
	favourites: false,
	cart: false
}

const reverseClickedMenu = (
	state,
	target,
	isOpen
) => {
	if (isOpen === undefined) {
		return {
			...state,
			[target]: !state[target]
		}
	} else {
		return {
			...state,
			[target]: isOpen
		}
	}
}

export default (
	state = initialState,
	action
) => {
	switch (action.type) {
		case REVERSE_MAIN_MENU:
			return reverseClickedMenu(state, MAIN, action.isOpen)
		case REVERSE_CREATE_MENU:
			return reverseClickedMenu(state, CREATE, action.isOpen)
		case REVERSE_FAVOURITES_MENU:
			return reverseClickedMenu(state, FAVOURITES, action.isOpen)
		case REVERSE_CART_MENU:
			return reverseClickedMenu(state, CART, action.isOpen)
		default:
			return state
	}
}

export const reverseMainMenu = (
	isOpen
) => ({
	type: REVERSE_MAIN_MENU,
	isOpen
})
export const reverseCreateMenu = (
	isOpen
) => ({
	type: REVERSE_CREATE_MENU,
	isOpen
})
export const reverseFavouritesMenu = (
	isOpen
) => ({
	type: REVERSE_FAVOURITES_MENU,
	isOpen
})
export const reverseCartMenu = (
	isOpen
) => ({
	type: REVERSE_CART_MENU,
	isOpen
})