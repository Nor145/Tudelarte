/* @flow */
'use strict'

import React, {Component} from 'react'
import {css} from 'aphrodite';
// my files
import className from './className'
// material-ui

class Home extends Component {
	static propTypes = {
		user: React.PropTypes.object
	};

	render() {
		const {user} = this.props
		const isAdminLoginMessage = user && user.role === 'admin'
			? 'Sesión iniciada como administrador'
			: 'Sesión no iniciada'

		return (
			<div className={css(className.wrapper)}>
				<div className={css(className.content)}>
					<h1>Aquí va la página de inicio</h1>
					<p>{isAdminLoginMessage}</p>
				</div>
			</div>
		)
	}
}

export default Home