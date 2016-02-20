/* @flow */
'use strict';

import {StyleSheet} from 'aphrodite';
import Colors from 'material-ui/lib/styles/colors'

export const className = StyleSheet.create({
	subHeader: {
		display: 'flex',
		width: '100%',
		backgroundColor: Colors.grey900,
		height: '150px',
		cursor: 'default'
	},
	subHeaderTitle: {
		margin: 'auto',
		color: '#fff',
		fontSize: '1.3em',
		fontWeight: '300'
	}
})