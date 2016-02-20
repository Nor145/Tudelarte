/* @flow */
'use strict';

import {StyleSheet} from 'aphrodite';
import Colors from 'material-ui/lib/styles/colors'

export const className = StyleSheet.create({
	backgroundMenu: {
		backgroundColor: Colors.grey900,
		color: '#fff'
	},
	menuItem: {
		color: Colors.grey400,
		':hover': {
      color: '#fff'
    }
	},
	menuContainer: {
		marginTop: '100px'
	},
	menuTitle: {
		padding: '0 16px',
		marginBottom: '30px',
		cursor: 'default'
	}
})

export const style = {

}