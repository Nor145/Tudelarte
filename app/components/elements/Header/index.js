/* @flow */
'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {css} from 'aphrodite'
// material-ui
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import ActionShoppingCart from 'material-ui/lib/svg-icons/action/shopping-cart'
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite'
import ImageDehaze from 'material-ui/lib/svg-icons/image/dehaze'
import Colors from 'material-ui/lib/styles/colors'
import IconButton from 'material-ui/lib/icon-button'
// component
import className from './className'
// actions
import {
  reverseMainMenu,
  reverseCreateMenu,
  reverseFavouritesMenu,
  reverseCartMenu
} from 'redux_app/modules/sideMenus'

const CreateIcon = ({
  dispatch
}) => (
  <IconButton onMouseEnteronClick={() => dispatch(reverseCreateMenu())} touch>
    <ContentAdd />
  </IconButton>
)

const CustomerIcons = ({
  dispatch
}) => {
	let favoriteColor = Colors.redA100

	return (
	  <div>
	    <IconButton
	    onMouseLeave={() => favoriteColor = Colors.redA700}
	  	onMouseEnter={() => favoriteColor = Colors.redA100}
	  	onClick={() => dispatch(reverseFavouritesMenu())}
	  	touch>
	      <ActionFavorite color={favoriteColor}/>
	    </IconButton>

	    <IconButton onClick={() => dispatch(reverseCartMenu())} touch>
	      <ActionShoppingCart/>
	    </IconButton>
	  </div>
	)
}
const RightSideIcons = ({
	isAdminPage,
  dispatch
}) => ( isAdminPage
	? <CreateIcon dispatch={dispatch}/>
  : <CustomerIcons dispatch={dispatch}/>
)

const MenuIcon = ({
  dispatch
}) => (
  <IconButton onClick={() => dispatch(reverseMainMenu())} touch>
    <ImageDehaze />
  </IconButton>
)

const Header = ({
	isAdminPage = false,
	dispatch
}) => (
	<Toolbar className={css(className.bar)}>
		<ToolbarGroup float="left" firstChild>
			<MenuIcon dispatch={dispatch}/>
		</ToolbarGroup>
	  <ToolbarTitle className={css(className.title)} text="TUDELARTE"/>
	  <ToolbarGroup float="right" lastChild>
	    <RightSideIcons isAdminPage={isAdminPage} dispatch={dispatch}/>
	  </ToolbarGroup>
	</Toolbar>
)

Header.PropTypes = {
	isAdminPage: React.PropTypes.bool,
	dispatch: React.PropTypes.func
}

Header.PropTypes = {
	isAdminPge: false
}

export default connect()(Header)