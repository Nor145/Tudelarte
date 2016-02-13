/* @flow */
'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
// files
import Home from 'components/views/Home'
import NotFound from 'components/views/NotFound'
import App from 'components/layouts/App'

export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ Home } />
		<Route path="*" component={ NotFound } />
	</Route>
);