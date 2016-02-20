/* @flow */
'use strict'

import React from 'react'
import {css} from 'aphrodite'
// material-ui
import LeftNav from 'material-ui/lib/left-nav';
// import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
// component
import { className } from './style'
import {
	connectToAdminMenu,
	connectToSiteMenu,
	connectToCreateMenu,
	connectToFavouritesMenu,
	connectToCartMenu
} from './connect'

const CartMenu = ({
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
)

const CartMenuContainer = connectToCartMenu(CartMenu)
CartMenu.propTypes = {
	isLoggedIn: React.PropTypes.bool,
  reverseCartMenu: React.PropTypes.func.isRequired,
  isCartMenuOpen: React.PropTypes.bool.isRequired,
  onToDoTouched: React.PropTypes.func
}

const FavouritesMenu = ({
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
)

const FavouritesMenuContainer = connectToFavouritesMenu(FavouritesMenu)
FavouritesMenu.propTypes = {
	isLoggedIn: React.PropTypes.bool,
  reverseFavouritesMenu: React.PropTypes.func.isRequired,
  isFavouritesMenuOpen: React.PropTypes.bool.isRequired,
  onToDoTouched: React.PropTypes.func
}

const CustomerMenus = () => (
	<div>
		<FavouritesMenuContainer/>
		<CartMenuContainer/>
	</div>
)

const CreateMenu = ({
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
)

const CreateMenuContainer = connectToCreateMenu(CreateMenu)
CreateMenu.propTypes = {
  reverseCreateMenu: React.PropTypes.func.isRequired,
  isCreateMenuOpen: React.PropTypes.bool.isRequired,
  onCreateGalleryTouched: React.PropTypes.func.isRequired,
	onCreateRastrilloTouched: React.PropTypes.func.isRequired,
	onCreateTecniquesTouched: React.PropTypes.func.isRequired
}

const AdminMenu = ({
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
)

const AdminMenuContainer = connectToAdminMenu(AdminMenu)
AdminMenu.propTypes = {
  reverseMainMenu: React.PropTypes.func.isRequired,
  isMainMenuOpen: React.PropTypes.bool.isRequired,
  onHomeAdminTouched: React.PropTypes.func.isRequired,
	onGalleryAdminTouched: React.PropTypes.func.isRequired,
	onRastrilloAdminTouched: React.PropTypes.func.isRequired,
	onArtistsAdminTouched: React.PropTypes.func.isRequired,
	onTecniquesAdminTouched: React.PropTypes.func.isRequired,
	onShopTouched: React.PropTypes.func.isRequired
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
		<MenuItem
		onTouchTap={onAdminTouched}
		className={css(className.menuItem)}>
			ADMINISTRACION
		</MenuItem>
	const LoginOrLogoutItem = !isLoggedIn
		? <MenuItem
			className={css(className.menuItem)}
			onTouchTap={onLoginTouched}>
				ENTRAR
			</MenuItem>
		: <MenuItem
			className={css(className.menuItem)}
			onTouchTap={onLogoutTouched}>SALIR</MenuItem>

	return (
		<div className={css(className.menuContainer)}>
			<div className={css(className.menuTitle)}>MENU</div>
			<div>
				<MenuItem
				className={css(className.menuItem)}
				onTouchTap={onServicesTouched}>SERVICIOS</MenuItem>
			</div>
			<div>
				{AdminItem}
				{LoginOrLogoutItem}
			</div>
		</div>
	)
}

const SiteMenu = (
	props
) => (
	<LeftNav
	className={css(className.backgroundMenu)}
	docked={false}
	open={props.isMainMenuOpen}
	onRequestChange={props.reverseMainMenu}>
		<SiteMenuItems {...props}/>
	</LeftNav>
)

const SiteMenuContainer = connectToSiteMenu(SiteMenu)
SiteMenu.propTypes = {
  reverseMainMenu: React.PropTypes.func.isRequired,
  isMainMenuOpen: React.PropTypes.bool.isRequired,
  isAdministrator: React.PropTypes.bool.isRequired,
  isLoggedIn: React.PropTypes.bool.isRequired,
  onAdminTouched: React.PropTypes.func.isRequired,
	onLoginTouched: React.PropTypes.func.isRequired,
	onLogoutTouched: React.PropTypes.func.isRequired,
	onServicesTouched: React.PropTypes.func.isRequired
}

const RightSideMenus = ({
	isAdminPage
}) => isAdminPage ?	<CreateMenuContainer/> : <CustomerMenus/>

const MainMenu = ({
	isAdminPage
}) => isAdminPage ? <AdminMenuContainer/> : <SiteMenuContainer/>

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