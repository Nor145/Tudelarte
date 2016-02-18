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
// actions
import { toggle } from 'redux_app/modules/ui/toggle'
// component
import className from './className'
import { connectToCustomerIcons } from './connect.js'
// consts
import {
	MAIN_MENU,
	CREATE_MENU,
	FAVOURITES_MENU,
	CART_MENU,
	FAVORITE_COLOR
} from 'tools/constants/stateKeys'

const CreateIcon = ({
  dispatch
}) => (
  <IconButton
  onClick={() => dispatch(toggle(CREATE_MENU))} touch>
    <ContentAdd />
  </IconButton>
)

const CustomerIcons = connectToCustomerIcons(({
  dispatch,
  favoriteColor
}) => (
  <div>
    <IconButton
    onMouseLeave={() => dispatch(toggle(FAVORITE_COLOR, Colors.redA100))}
  	onMouseEnter={() => dispatch(toggle(FAVORITE_COLOR, Colors.redA700))}
  	onClick={() => dispatch(toggle(FAVOURITES_MENU))}
  	touch>
      <ActionFavorite color={favoriteColor}/>
    </IconButton>

    <IconButton onClick={() => dispatch(toggle(CART_MENU))} touch>
      <ActionShoppingCart/>
    </IconButton>
  </div>
))

CustomerIcons.propTypes = {
	favoriteColor: React.PropTypes.string
}
CustomerIcons.defaultProps = {
	favoriteColor: Colors.redA100
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
  <IconButton onClick={() => dispatch(toggle(MAIN_MENU))} touch>
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

Header.propTypes = {
	isAdminPage: React.PropTypes.bool,
	dispatch: React.PropTypes.func
}
Header.defaultProps = {
	isAdminPge: false
}

export default connect()(Header)