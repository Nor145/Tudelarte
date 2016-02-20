/* @flow */
'use strict';

import {StyleSheet} from 'aphrodite';
// import Colors from 'material-ui/lib/styles/colors'

export const className = StyleSheet.create({
  bar: {
  	position: 'relative',
    borderBottom: '1px solid black',
    backgroundColor: 'white'
  },
  title: {
  	position: 'absolute',
  	left: 'calc(50% - 87px)',
  	fontSize: '2em',
  	cursor: 'pointer'
  }
  // favoriteColor: {
  // 	color: Colors.redA100,
  // 	fill: 'currentColor',
  // 	':hover': {
  // 		color: Colors.redA700,
  // 		fill: 'currentColor'
  // 	}
  // }
})
