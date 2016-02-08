const REVERSE_LEFT_MENU = 'REVERSE_LEFT_MENU'
const REVERSE_CREATE_MENU = 'REVERSE_CREATE_MENU'
const REVERSE_FAVOURITE_MENU = 'REVERSE_FAVOURITE_MENU'
const REVERSE_CART_MENU = 'REVERSE_CART_MENU'

const initialState = {
  left: false,
  create: false,
  favourites: false,
  cart: false
}

const reverseClickedMenu = (state, target) => ({
  ...state,
  [target]: !state[target] 
})

export default (state = initialState, signal) => {
  switch (signal.type) {
    case REVERSE_LEFT_MENU:
      return reverseClickedMenu(state, 'left')
    case REVERSE_CREATE_MENU:
      return reverseClickedMenu(state, 'create')
    case REVERSE_FAVOURITE_MENU:
      return reverseClickedMenu(state, 'favourites')
    case REVERSE_CART_MENU:
      return reverseClickedMenu(state, 'cart')
    default:
      return state
  }
}

export const reverseLeftMenu = () => ({
  type: REVERSE_LEFT_MENU
})
export const reverseCreateMenu = () => ({
  type: REVERSE_CREATE_MENU
})
export const reverseFavouriteMenu = () => ({
  type: REVERSE_FAVOURITE_MENU
})
export const reverseCartMenu = () => ({
  type: REVERSE_CART_MENU
})