import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
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
//actions
import {
  reverseLeftMenu, 
  reverseCreateMenu,
  reverseFavouriteMenu,
  reverseCartMenu
} from '../redux/modules/app'

const MenuIcon = connect()(({
  dispatch
}) => (
  <IconButton 
    onClick={ () => dispatch(reverseLeftMenu())} 
    touch>
    <ImageDehaze />
  </IconButton>
))

const CreateIcon = connect()(({
  dispatch
}) => (
  <IconButton 
    onClick={() => dispatch(reverseCreateMenu())} 
    touch>
    <ContentAdd />
  </IconButton>
))

const ClientIcons = connect()(({
  dispatch
}) => (
  <div>
    <IconButton 
      onClick={() => dispatch(reverseFavouriteMenu())} 
      touch>
      <ActionFavorite/>
    </IconButton>

    <IconButton 
      onClick={() => dispatch(reverseCartMenu())} 
      touch>
      <ActionShoppingCart/>
    </IconButton>
  </div>
))

const RightIcons = ({
  isAdmin
}) => isAdmin ? <CreateIcon/> : <ClientIcons/>
  
const Header = ({
  isAdmin = false,
}) => (
  <Toolbar>
    <ToolbarGroup float="left" firstChild>
      <MenuIcon/>
    </ToolbarGroup>
    <ToolbarTitle text="TUDELARTE"/>
    <ToolbarGroup float="right" lastChild>
      <RightIcons isAdmin={isAdmin}/>
    </ToolbarGroup>
  </Toolbar>
)

Header.propTypes = {
  isAdmin: React.PropTypes.bool
}

export default Header;