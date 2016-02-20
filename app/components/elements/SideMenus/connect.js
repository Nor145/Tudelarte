/* @flow */
'use strict'

import { routeActions } from 'react-router-redux'
// files
import reconnect from 'tools/reconnect'
// actions
import { toggle } from 'redux_app/modules/ui/toggle'
// consts
import { ADMINISTRATOR } from 'tools/constants/user'
import {
	HOME, SERVICES, LOGIN, HOME_ADMIN, GALLERY_ADMIN,
	RASTRILLO_ADMIN, ARTISTS_ADMIN, TECNIQUES_ADMIN,
	CREATE_GALLERY, CREATE_RASTRILLO, CREATE_ARTIST,
	CREATE_TECNIQUE
} from 'tools/constants/routes'
import {
	MAIN_MENU, CREATE_MENU, FAVOURITES_MENU, CART_MENU
} from 'tools/constants/stateKeys'

const reverseMenuAndGoRoute = (dispatch, menu, route) => (
	() => {
		dispatch(toggle(menu))
		dispatch(routeActions.push(route))
	}
)

const reverseMenu = (dispatch, menu) => (
	(isOpen) => {
		dispatch(toggle(menu, isOpen))
	}
)

const CartMenu = {
	mapStateToProps: (state) => ({
		isCartMenuOpen: state.ui.toggle.sideMenuOpen.cart,
		isLoggedIn: state.user.logged
	}),
	mapDispatchToProps: (dispatch) => ({
		reverseCartMenu: reverseMenu(dispatch, CART_MENU),
		onToDoTouched: reverseMenuAndGoRoute(dispatch, CART_MENU, HOME)
	})
}

const FavouritesMenu = {
	mapStateToProps: (state) => ({
		isFavouritesMenuOpen: state.ui.toggle.sideMenuOpen.favourites,
		isLoggedIn: state.user.logged
	}),
	mapDispatchToProps: (dispatch) => ({
		reverseFavouritesMenu: reverseMenu(dispatch, FAVOURITES_MENU),
		onToDoTouched: reverseMenuAndGoRoute(dispatch, FAVOURITES_MENU, HOME)
	})
}

const CreateMenu = {
	mapStateToProps: (state) => ({
		isCreateMenuOpen: state.ui.toggle.sideMenuOpen.create
	}),
	mapDispatchToProps: (dispatch) => ({
		reverseCreateMenu: reverseMenu(dispatch, CREATE_MENU),
		onCreateGalleryTouched: reverseMenuAndGoRoute(dispatch, CREATE_MENU, CREATE_GALLERY),
		onCreateRastrilloTouched: reverseMenuAndGoRoute(dispatch, CREATE_MENU, CREATE_RASTRILLO),
		onCreateArtistsTouched: reverseMenuAndGoRoute(dispatch, CREATE_MENU, CREATE_ARTIST),
		onCreateTecniquesTouched: reverseMenuAndGoRoute(dispatch, CREATE_MENU, CREATE_TECNIQUE)
	})
}

const SiteMenu = {
	mapStateToProps: (state) => ({
		isMainMenuOpen: state.ui.toggle.sideMenuOpen.main,
		isAdministrator: state.user !== undefined && state.user.role === ADMINISTRATOR,
		isLoggedIn: state.user.logged
	}),
	mapDispatchToProps: (dispatch) => ({
		reverseMainMenu: reverseMenu(dispatch, MAIN_MENU),
		onAdminTouched: reverseMenuAndGoRoute(dispatch, MAIN_MENU, HOME_ADMIN),
		onLoginTouched: reverseMenuAndGoRoute(dispatch, MAIN_MENU, LOGIN),
		onLogoutTouched: reverseMenuAndGoRoute(dispatch, MAIN_MENU, HOME),
		onServicesTouched: reverseMenuAndGoRoute(dispatch, MAIN_MENU, SERVICES)
	})
}

const AdminMenu = {
	mapStateToProps: (state) => ({
		isMainMenuOpen: state.ui.toggle.sideMenuOpen.main
	}),
	mapDispatchToProps: (dispatch) => ({
		reverseMainMenu: reverseMenu(dispatch, MAIN_MENU),
		onHomeAdminTouched: reverseMenuAndGoRoute(dispatch, MAIN_MENU, HOME_ADMIN),
		onGalleryAdminTouched: reverseMenuAndGoRoute(dispatch, MAIN_MENU, GALLERY_ADMIN),
		onRastrilloAdminTouched: reverseMenuAndGoRoute(dispatch, MAIN_MENU, RASTRILLO_ADMIN),
		onArtistsAdminTouched: reverseMenuAndGoRoute(dispatch, MAIN_MENU, ARTISTS_ADMIN),
		onTecnicasAdminTouched: reverseMenuAndGoRoute(dispatch, MAIN_MENU, TECNIQUES_ADMIN),
		onShopTouched: reverseMenuAndGoRoute(dispatch, MAIN_MENU, HOME)
	})
}

export const connectToAdminMenu = reconnect(
	AdminMenu.mapStateToProps,
	AdminMenu.mapDispatchToProps
)
export const connectToSiteMenu = reconnect(
	SiteMenu.mapStateToProps,
	SiteMenu.mapDispatchToProps
)
export const connectToCreateMenu = reconnect(
	CreateMenu.mapStateToProps,
	CreateMenu.mapDispatchToProps
)
export const connectToFavouritesMenu = reconnect(
	FavouritesMenu.mapStateToProps,
	FavouritesMenu.mapDispatchToProps
)
export const connectToCartMenu = reconnect(
	CartMenu.mapStateToProps,
	CartMenu.mapDispatchToProps
)
