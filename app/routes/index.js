/* @flow */
'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
// files
import App from 'components/layouts/App'
import Home from 'components/views/Home'
import Login from 'components/views/Login'
import NotFound from 'components/views/NotFound'


export default (
	<Route path="/" component={ App }>
		<IndexRoute component={ Home }/>
		<Route path="login" component={ Login }/>
		<Route path="*" component={ NotFound }/>
	</Route>
);