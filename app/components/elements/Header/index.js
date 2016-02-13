/* @flow */
'use strict'

import React from 'react'
import {connect} from 'react-redux'
import {css} from 'aphrodite';
// material-ui
import Toolbar from 'material-ui/lib/toolbar/toolbar'
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group'
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title'
import ContentAdd from 'material-ui/lib/svg-icons/content/add'
import ActionShoppingCart from 'material-ui/lib/svg-icons/action/shopping-cart'
import ActionFavorite from 'material-ui/lib/svg-icons/action/favorite'
import ImageDehaze from 'material-ui/lib/svg-icons/image/dehaze'
// import Colors from 'material-ui/lib/styles/colors'
import IconButton from 'material-ui/lib/icon-button'
// component
import className from './className'
// actions
import {
  reverseLeftMenu,
  reverseCreateMenu,
  reverseFavouriteMenu,
  reverseCartMenu
} from 'redux_app/modules/sideMenus'

const MenuIcon = ({
  dispatch
}) => (
  <IconButton onClick={() => dispatch(reverseLeftMenu())} touch>
    <ImageDehaze />
  </IconButton>
)

const CreateIcon = ({
  dispatch
}) => (
  <IconButton onClick={() => dispatch(reverseCreateMenu())} touch>
    <ContentAdd />
  </IconButton>
)

const ClientIcons = ({
  dispatch
}) => (
  <div>
    <IconButton onClick={() => dispatch(reverseFavouriteMenu())} touch>
      <ActionFavorite/>
    </IconButton>

    <IconButton onClick={() => dispatch(reverseCartMenu())} touch>
      <ActionShoppingCart/>
    </IconButton>
  </div>
)

const RightIcons = ({
  isAdmin,
  dispatch
}) => ( isAdmin ?
  <CreateIcon dispatch={dispatch}/>
  :
  <ClientIcons dispatch={dispatch}/>
)

const Header = ({
  isAdmin,
  dispatch
}) => (
	<Toolbar className={css(className.bar)}>
		<ToolbarGroup float="left" firstChild>
			<MenuIcon dispatch={dispatch}/>
		</ToolbarGroup>
	  <ToolbarTitle text="TUDELARTE"/>
	  <ToolbarGroup float="right" lastChild>
	    <RightIcons dispatch={dispatch} isAdmin={isAdmin}/>
	  </ToolbarGroup>
	</Toolbar>
)


Header.propTypes = {
  isAdmin: React.PropTypes.bool,
  dispatch: React.PropTypes.func
}
Header.defaultProps = {
  isAdmin: false
}

export default connect()(Header)