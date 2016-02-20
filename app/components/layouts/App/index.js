/* @flow */
'use strict'

import React, {Component} from 'react'

import Header from 'components/elements/Header'
import SideMenus from 'components/elements/SideMenus'


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