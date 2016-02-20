/* @flow */
'use strict'

import React from 'react'
import {css} from 'aphrodite';

import { className } from './style'

const SubHeader = ({
	title
}) => (
	<div className={css(className.subHeader)}>
	  <h1 className={css(className.subHeaderTitle)}>
	  	{title}
	  </h1>
	</div>
)

SubHeader.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default SubHeader