/* @flow */
'use strict'

import { routeActions } from 'react-router-redux'
// files
import reconnect from 'tools/reconnect'
// consts
import {
	HOME, SERVICES, LOGIN, HOME_ADMIN, GALLERY_ADMIN,
	RASTRILLO_ADMIN, ARTISTS_ADMIN, TECNIQUES_ADMIN,
	CREATE_GALLERY, CREATE_RASTRILLO, CREATE_ARTIST,
	CREATE_TECNIQUE, ADMINISTRATOR
} from 'tools/consts.js'
// actionCreators
import {
  reverseMainMenu,
  reverseCreateMenu,
  reverseFavouritesMenu,
  reverseCartMenu
} from 'redux_app/modules/sideMenus'

const reverseMenuAndGoRoute = (dispatch, actionCreator, route) =>
	() => {
		console.log('llega')
		dispatch(actionCreator())
		dispatch(routeActions.push(route))
	}

const bindDispatchToAction = (dispatch, actionCreator) => (
	(isOpen) => {
		console.log('llega')
		dispatch(actionCreator(isOpen))
	}
)

const CartMenu = {
	mapStateToProps: (state) => ({
		isCartMenuOpen: state.sideMenus.cart,
		isLoggedIn: state.user.isLogged
	}),
	mapDispatchToProps: (dispatch) => ({
		reverseCartMenu: bindDispatchToAction(dispatch, reverseCartMenu),
		onToDoTouched: reverseMenuAndGoRoute(dispatch, reverseCartMenu, HOME)
	})
}

const FavouritesMenu = {
	mapStateToProps: (state) => ({
		isFavouritesMenuOpen: state.sideMenus.favourites,
		isLoggedIn: state.user.isLogged
	}),
	mapDispatchToProps: (dispatch) => ({
		reverseFavouritesMenu: bindDispatchToAction(dispatch, reverseFavouritesMenu),
		onToDoTouched: reverseMenuAndGoRoute(dispatch, reverseFavouritesMenu, HOME)
	})
}

const CreateMenu = {
	mapStateToProps: (state) => ({
		isCreateMenuOpen: state.sideMenus.create
	}),
	mapDispatchToProps: (dispatch) => ({
		reverseCreateMenu: bindDispatchToAction(dispatch, reverseCreateMenu),
		onCreateGalleryTouched: reverseMenuAndGoRoute(dispatch, reverseCreateMenu, CREATE_GALLERY),
		onCreateRastrilloTouched: reverseMenuAndGoRoute(dispatch, reverseCreateMenu, CREATE_RASTRILLO),
		onCreateArtistsTouched: reverseMenuAndGoRoute(dispatch, reverseCreateMenu, CREATE_ARTIST),
		onCreateTecniquesTouched: reverseMenuAndGoRoute(dispatch, reverseCreateMenu, CREATE_TECNIQUE)
	})
}

const SiteMenu = {
	mapStateToProps: (state) => ({
		isMainMenuOpen: state.sideMenus.main,
		isAdministrator: state.user !== undefined && state.user.role === ADMINISTRATOR,
		isLoggedIn: state.user.isLogged
	}),
	mapDispatchToProps: (dispatch) => ({
		reverseMainMenu: bindDispatchToAction(dispatch, reverseMainMenu),
		onAdminTouched: reverseMenuAndGoRoute(dispatch, reverseMainMenu, HOME_ADMIN),
		onLoginTouched: reverseMenuAndGoRoute(dispatch, reverseMainMenu, LOGIN),
		onLogoutTouched: reverseMenuAndGoRoute(dispatch, reverseMainMenu, HOME),
		onServicesTouched: reverseMenuAndGoRoute(dispatch, reverseMainMenu, SERVICES)
	})
}

const AdminMenu = {
	mapStateToProps: (state) => ({
		isMainMenuOpen: state.sideMenus.main
	}),
	mapDispatchToProps: (dispatch) => ({
		reverseMainMenu: bindDispatchToAction(dispatch, reverseMainMenu),
		onHomeAdminTouched: reverseMenuAndGoRoute(dispatch, reverseMainMenu, HOME_ADMIN),
		onGalleryAdminTouched: reverseMenuAndGoRoute(dispatch, reverseMainMenu, GALLERY_ADMIN),
		onRastrilloAdminTouched: reverseMenuAndGoRoute(dispatch, reverseMainMenu, RASTRILLO_ADMIN),
		onArtistsAdminTouched: reverseMenuAndGoRoute(dispatch, reverseMainMenu, ARTISTS_ADMIN),
		onTecnicasAdminTouched: reverseMenuAndGoRoute(dispatch, reverseMainMenu, TECNIQUES_ADMIN),
		onShopTouched: reverseMenuAndGoRoute(dispatch, reverseMainMenu, HOME)
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


