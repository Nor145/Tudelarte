'use strict'
/* @flow */

import {LEFT, CREATE, FAVOURITES, CART} from 'tools/consts.js'

const REVERSE_LEFT_MENU = 'REVERSE_LEFT_MENU'
const REVERSE_CREATE_MENU = 'REVERSE_CREATE_MENU'
const REVERSE_FAVOURITE_MENU = 'REVERSE_FAVOURITE_MENU'
const REVERSE_CART_MENU = 'REVERSE_CART_MENU'

type StateType = {
  left: boolean,
  create: boolean,
  favourites: boolean,
  cart: boolean
};

type ActionType = {
  type: string
};

const initialState: StateType = {
  left: false,
  create: false,
  favourites: false,
  cart: false
}

const reverseClickedMenu = (
  state: StateType,
  target: string
):StateType => ({
  ...state,
  [target]: !state[target]
})

export default (
  state: StateType = initialState,
  action: ActionType
):StateType => {
  switch (action.type) {
    case REVERSE_LEFT_MENU:
      return reverseClickedMenu(state, LEFT)
    case REVERSE_CREATE_MENU:
      return reverseClickedMenu(state, CREATE)
    case REVERSE_FAVOURITE_MENU:
      return reverseClickedMenu(state, FAVOURITES)
    case REVERSE_CART_MENU:
      return reverseClickedMenu(state, CART)
    default:
      return state
  }
}

export const reverseLeftMenu = ():ActionType => ({
  type: REVERSE_LEFT_MENU
})
export const reverseCreateMenu = ():ActionType => ({
  type: REVERSE_CREATE_MENU
})
export const reverseFavouriteMenu = ():ActionType => ({
  type: REVERSE_FAVOURITE_MENU
})
export const reverseCartMenu = ():ActionType => ({
  type: REVERSE_CART_MENU
})