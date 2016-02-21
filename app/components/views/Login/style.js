/* @flow */
'use strict';

import {StyleSheet} from 'aphrodite';
import Colors from 'material-ui/lib/styles/colors'

export const className = StyleSheet.create({
	content: {
		display: 'flex',
		flexFlow: 'row wrap',
		maxWidth: '900px',
		margin: '100px auto 0'
	},
	new: {
		flexGrow: '1',
		textAlign: 'center',
		color: Colors.grey900
	},
	registered: {
		flexGrow: '1',
		textAlign: 'center',
		borderLeft: `1px solid ${Colors.grey300}`,
		color: Colors.grey900
	},
	button: {
		backgroundColor: Colors.grey900,
		width: '250px'
	},
	loginContent: {
		width: '250px',
		margin: 'auto'
	}
})

export const style = {
	buttonText: {
		fontWeight: '300',
		color: '#fff'
	},
	loginButton: {
		marginTop: '30px'
	},
	underlineFocus: {
		borderColor: Colors.grey900
	},
	floatingLabel: {
		color: Colors.grey900
	},
	hideAutoFillColorStyle: {
  	WebkitBoxShadow: '0 0 0 1000px white inset'
	},
	autoCompleteOff: {
		display: 'none'
	},
	error: {
		textAlign: 'left'
	},
	authError: {
		color: '#f44336'
	}
}