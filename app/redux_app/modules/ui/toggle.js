'use strict'
/* @flow */

import Colors from 'material-ui/lib/styles/colors'
// actions
const TOOGLE_KEY = 'TOGGLE_KEY'

const initialState = {
	sideMenuOpen: {
		main: false,
		create: false,
		favourites: false,
		cart: false
	},
	favoriteColor: Colors.redA100
}

const isLast = (keys, i) => i + 1 === keys.length
const getValue = (object, keys) => keys.reduce((obj, key) => obj[key], object)

const toggleKey = (state, keys, value) => {
	let objKey = {}  // eslint-disable-line prefer-const
  keys.reduce((obj, key, i) => {
  	if (!isLast(keys, i)) {
    	obj[key] = i === 0
      	? {...state[key]}
      	: getValue(objKey, [...Object.keys(objKey), key])
      return obj[key]
    } else {
    	obj[key] = value === undefined
      	? !getValue(state, keys)
        : value
    }
  }, objKey)

  return {
  ...state,
  ...objKey
  }
}

export default (state = initialState, {type, keys, value}) => (
	type === TOOGLE_KEY ? toggleKey(state, keys, value) : state
)

export const toggle = (keys, value = undefined) => ({
	type: TOOGLE_KEY,
	keys,
	value
})
