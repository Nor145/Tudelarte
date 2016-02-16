/* @flow */
'use strict'

import React, {Component} from 'react'
// my files
import Header from 'components/elements/Header'
import SideMenus from 'components/elements/SideMenus'
// material-ui

class App extends Component {
	static propTypes = {
		children: React.PropTypes.node
	};

	render() {
		return (
			<div>
				<Header/>
				<SideMenus/>
				{this.props.children}
			</div>
		)
	}
}

export default App