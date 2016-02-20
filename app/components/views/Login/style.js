/* @flow */
'use strict';

import {StyleSheet} from 'aphrodite';
import Colors from 'material-ui/lib/styles/colors'

export const className = StyleSheet.create({
	content: {
		display: 'flex',
		flexFlow: 'row wrap',
		maxWidth: '900px',
		margin: '30px auto 0'
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
	}
})

export const style = {
	buttonText: {
		fontWeight: '300'
	}
}