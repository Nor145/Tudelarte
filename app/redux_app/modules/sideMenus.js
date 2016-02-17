/* @flow */

import {MAIN, CREATE, FAVOURITES, CART} from 'tools/consts.js'

const REVERSE_MAIN_MENU = 'REVERSE_MAIN_MENU'
const REVERSE_CREATE_MENU = 'REVERSE_CREATE_MENU'
const REVERSE_FAVOURITES_MENU = 'REVERSE_FAVOURITES_MENU'
const REVERSE_CART_MENU = 'REVERSE_CART_MENU'

type StateType = {
	main: boolean,
	create: boolean,
	favourites: boolean,
	cart: boolean
};

type ActionType = {
	type: string,
	isOpen: boolean|void
};

const initialState = {
	main: false,
	create: false,
	favourites: false,
	cart: false
}

const reverseClickedMenu = (
	state: StateType,
	target: string,
	isOpen: boolean|void
):StateType => {
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
	state: StateType = initialState,
	{type, isOpen}: ActionType
):StateType => {
	switch (type) {
		case REVERSE_MAIN_MENU:
			return reverseClickedMenu(state, MAIN, isOpen)
		case REVERSE_CREATE_MENU:
			return reverseClickedMenu(state, CREATE, isOpen)
		case REVERSE_FAVOURITES_MENU:
			return reverseClickedMenu(state, FAVOURITES, isOpen)
		case REVERSE_CART_MENU:
			return reverseClickedMenu(state, CART, isOpen)
		default:
			return state
	}
}

export const reverseMainMenu = (
	isOpen: boolean|void
):ActionType => ({
	type: REVERSE_MAIN_MENU,
	isOpen
})
export const reverseCreateMenu = (
	isOpen: boolean|void
):ActionType => ({
	type: REVERSE_CREATE_MENU,
	isOpen
})
export const reverseFavouritesMenu = (
	isOpen: boolean|void
):ActionType => ({
	type: REVERSE_FAVOURITES_MENU,
	isOpen
})
export const reverseCartMenu = (
	isOpen: boolean|void
):ActionType => ({
	type: REVERSE_CART_MENU,
	isOpen
})