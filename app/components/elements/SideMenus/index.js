/* @flow */
'use strict'

import React from 'react'
// import {css} from 'aphrodite'
// material-ui
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
// component
// import className from './className'
import {
	connectToAdminMenu,
	connectToSiteMenu,
	connectToCreateMenu,
	connectToFavouritesMenu,
	connectToCartMenu
} from './connectComponents'

const CartMenu = connectToCartMenu(({
	reverseCartMenu,
	isCartMenuOpen,
	onToDoTouched
}) => (
	// Will need userCart
	<LeftNav
	docked={false}
	open={isCartMenuOpen}
	openRight
	onRequestChange={reverseCartMenu}>
		<MenuItem onTouchTap={onToDoTouched}>TO DO</MenuItem>
	</LeftNav>
))

CartMenu.propTypes = {
	isLoggedIn: React.PropTypes.bool,
  reverseCartMenu: React.PropTypes.func,
  isCartMenuOpen: React.PropTypes.bool,
  onToDoTouched: React.PropTypes.func
}

const FavouritesMenu = connectToFavouritesMenu(({
	reverseFavouritesMenu,
	isFavouritesMenuOpen,
	onToDoTouched
}) => (
	// Will need userFavourites
	<LeftNav
	docked={false}
	openRight
	open={isFavouritesMenuOpen}
	onRequestChange={reverseFavouritesMenu}>
		<MenuItem onTouchTap={onToDoTouched}>TO DO</MenuItem>
	</LeftNav>
))

FavouritesMenu.propTypes = {
	isLoggedIn: React.PropTypes.bool,
  reverseFavouritesMenu: React.PropTypes.func,
  isFavouritesMenuOpen: React.PropTypes.bool,
  onToDoTouched: React.PropTypes.func
}

const CustomerMenus = () => (
	<div>
		<FavouritesMenu/>
		<CartMenu/>
	</div>
)

const CreateMenu = connectToCreateMenu(({
	isCreateMenuOpen,
	reverseCreateMenu,
	onCreateGalleryTouched,
	onCreateRastrilloTouched,
	onCreateArtistsTouched,
	onCreateTecniquesTouched
}) => (
	<LeftNav
	docked={false}
	open={isCreateMenuOpen}
	onRequestChange={reverseCreateMenu}>
		<div>CREAR</div>
		<div>
			<MenuItem onTouchTap={onCreateGalleryTouched}>GALERIA</MenuItem>
			<MenuItem onTouchTap={onCreateRastrilloTouched}>RASTRILLO</MenuItem>
			<MenuItem onTouchTap={onCreateArtistsTouched}>ARTISTAS</MenuItem>
			<MenuItem onTouchTap={onCreateTecniquesTouched}>TECNICAS</MenuItem>
		</div>
	</LeftNav>
))

CreateMenu.propTypes = {
  reverseCreateMenu: React.PropTypes.func,
  isCreateMenuOpen: React.PropTypes.bool,
  onCreateGalleryTouched: React.PropTypes.func,
	onCreateRastrilloTouched: React.PropTypes.func,
	onCreateTecniquesTouched: React.PropTypes.func
}

const AdminMenu = connectToAdminMenu(({
	reverseMainMenu,
	isMainMenuOpen,
	onHomeAdminTouched,
	onGalleryAdminTouched,
	onRastrilloAdminTouched,
	onArtistsAdminTouched,
	onTecniquesAdminTouched,
	onShopTouched
}) => (
	<LeftNav
	docked={false}
	open={isMainMenuOpen}
	onRequestChange={reverseMainMenu}>
		<div>MENU</div>
		<div>
			<MenuItem onTouchTap={onHomeAdminTouched}>GENERAL</MenuItem>
			<MenuItem onTouchTap={onGalleryAdminTouched}>GALERIA</MenuItem>
			<MenuItem onTouchTap={onRastrilloAdminTouched}>RASTRILLO</MenuItem>
			<MenuItem onTouchTap={onArtistsAdminTouched}>ARTISTAS</MenuItem>
			<MenuItem onTouchTap={onTecniquesAdminTouched}>TECNICAS</MenuItem>
		</div>
		<MenuItem onTouchTap={onShopTouched}>TIENDA</MenuItem>
	</LeftNav>
))

AdminMenu.propTypes = {
  reverseMainMenu: React.PropTypes.func,
  isMainMenuOpen: React.PropTypes.bool,
  onHomeAdminTouched: React.PropTypes.func,
	onGalleryAdminTouched: React.PropTypes.func,
	onRastrilloAdminTouched: React.PropTypes.func,
	onArtistsAdminTouched: React.PropTypes.func,
	onTecniquesAdminTouched: React.PropTypes.func,
	onShopTouched: React.PropTypes.func
}

const SiteMenuItems = ({
	isLoggedIn,
	isAdministrator,
	onAdminTouched,
	onLoginTouched,
	onLogoutTouched,
	onServicesTouched
}) => {
	const AdminItem = isAdministrator &&
		<MenuItem onTouchTap={onAdminTouched}>ADMINISTRACION</MenuItem>
	const LoginOrLogoutItem = !isLoggedIn
		? <MenuItem onTouchTap={onLoginTouched}>ENTRAR</MenuItem>
		: <MenuItem onTouchTap={onLogoutTouched}>SALIR</MenuItem>

	return (
		<div>
			<div>MENU</div>
			<div>
				<MenuItem onTouchTap={onServicesTouched}>SERVICES</MenuItem>
			</div>
			<div>
				{AdminItem}
				{LoginOrLogoutItem}
			</div>
		</div>
	)
}

const SiteMenu = connectToSiteMenu((
	props
) => (
	<LeftNav
	docked={false}
	open={props.isMainMenuOpen}
	onRequestChange={props.reverseMainMenu}>
		<SiteMenuItems {...props}/>
	</LeftNav>
))

SiteMenu.propTypes = {
  reverseMainMenu: React.PropTypes.func,
  isMainMenuOpen: React.PropTypes.bool,
  isAdministrator: React.PropTypes.bool,
  isLoggedIn: React.PropTypes.bool,
  onAdminTouched: React.PropTypes.func,
	onLoginTouched: React.PropTypes.func,
	onLogoutTouched: React.PropTypes.func,
	onServicesTouched: React.PropTypes.func
}

const RightSideMenus = ({
	isAdminPage
}) => isAdminPage ?	<CreateMenu/> : <CustomerMenus/>

const MainMenu = ({
	isAdminPage
}) => isAdminPage ? <AdminMenu/> : <SiteMenu/>

const SideMenus = ({
	isAdminPage
}) => (
	<div>
		<MainMenu isAdminPage={isAdminPage}/>
		<RightSideMenus isAdminPage={isAdminPage}/>
	</div>
)

SideMenus.propTypes = {
  isAdminPage: React.PropTypes.bool
}
SideMenus.defaultProps = {
  isAdminPage: false
}

export default SideMenus