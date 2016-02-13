/* @flow */
'use strict';

import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router';

const reduxRouterMiddleware = syncHistory(browserHistory)

export default reduxRouterMiddleware