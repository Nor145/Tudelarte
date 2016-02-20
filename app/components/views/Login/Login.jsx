/* @flow */
'use strict'

import React, {Component} from 'react'
import { routeActions } from 'react-router-redux'
import {css} from 'aphrodite';
// my files
import SubHeader from 'components/elements/SubHeader'
import { LOGIN } from 'tools/constants/routes'
// material-ui
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field'
// component
import { className, style } from './style'
import { reduxFormConnectToLoginForm } from './connect.js'

const NewCustomers = ({
	dispatch
}) => (
	<div className={css(className.new)}>
		<p>NUEVO CLIENTE</p>
    <RaisedButton
    className={css(className.button)}
    labelStyle={style.buttonText}
    onClick={() => dispatch(routeActions.push(LOGIN))}
    label="CREAR CUENTA"
    secondary/>
	</div>
)

const LoginForm = (props) => {
	console.log('Props', props)
	const {
    handleSubmit,
    fields: {
    	firstName
    }
   } = props

	const onSubmit = (formData) => {
		alert(formData)
	}

	return (
		<form
		autoComplete="off"
		onSubmit={handleSubmit(onSubmit)}>
		<TextField {...firstName}
    hintText="First Name"
    floatingLabelText="First Name"
    autoComplete="off"/>
		</form>
	)
}

const LoginFormContainer = reduxFormConnectToLoginForm(LoginForm)
LoginForm.propTypes = {
	handleSubmit: React.PropTypes.func.isRequired,
	fields: React.PropTypes.object.isRequired
}

const RegisteredCustomers = () => (
	<div className={css(className.registered)}>
		<p>ENTRA CON TU CUENTA</p>
		<LoginFormContainer/>
	</div>
)

class Login extends Component {
	static propTypes = {
		dispatch: React.PropTypes.func
	};

	render() {
		return (
			<div>
				<SubHeader title={'BIENVENIDO A TUDELARTE'}/>
				<div className={css(className.content)}>
					<NewCustomers/>
					<RegisteredCustomers/>
				</div>
			</div>
		)
	}
}

export default Login