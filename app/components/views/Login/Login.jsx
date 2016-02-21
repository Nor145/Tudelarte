/* @flow */
'use strict'

import React, {Component} from 'react'
import {connect} from 'react-redux'
import { routeActions } from 'react-router-redux'
import {css} from 'aphrodite';

import SubHeader from 'components/elements/SubHeader'
import { LOGIN } from 'tools/constants/routes'

import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field'

import { className, style } from './style'
import { reduxFormConnectToLoginForm } from './connect.js'
import { onSubmit } from './signals'

const NewCustomers = ({
	dispatch
}) => (
	<div className={css(className.new)}>
		<p>NUEVO CLIENTE</p>
    <RaisedButton
    label="CREAR CUENTA"
    className={css(className.button)}
    labelStyle={style.buttonText}
    onClick={() => dispatch(routeActions.push(LOGIN))}
    secondary/>
	</div>
)

const NewCustomersContainer = connect()(NewCustomers)
NewCustomers.propTypes = {
	dispatch: React.PropTypes.func.isRequired
}

const checkIsActiveOrHasValue = ({value, active}) => (
	value && value.length > 0 || active ? true : null
)

const LoginForm = ({
  fields: {
  	email, password
	},
	handleSubmit,
	error
}) => {
	const applyColorToEmail = checkIsActiveOrHasValue(email)
	const applyColorToPassword = checkIsActiveOrHasValue(password)

	return (
		<form
		autoComplete="off"
		onSubmit={handleSubmit(onSubmit)}>
			<input style={style.autoCompleteOff}/>
			<input type="password" style={style.autoCompleteOff}/>
			<div className={css(className.loginContent)}>
				<TextField {...email}
		    floatingLabelText="Email"
		    floatingLabelStyle={applyColorToEmail && style.floatingLabel}
		    underlineFocusStyle={style.underlineFocus}
		    inputStyle={style.hideAutoFillColorStyle}
		    errorText={email.touched && email.error ? email.error : ''}
		    errorStyle={style.error}
		    autoComplete="off"/>
		    <TextField {...password}
		    floatingLabelText="Password"
		    type="password"
		    floatingLabelStyle={applyColorToPassword && style.floatingLabel}
		    underlineFocusStyle={style.underlineFocus}
		    inputStyle={style.hideAutoFillColorStyle}
		    errorText={password.touched && password.error ? password.error : ''}
		    errorStyle={style.error}
		    autoComplete="off"/>
		    <RaisedButton
		    label="LOGIN"
        type="submit"
        className={css(className.button)}
        style={style.loginButton}
    		labelStyle={style.buttonText}
    		secondary/>
    		{error && <p style={style.authError}>{error}</p>}
		  </div>
		</form>
	)
}

const LoginFormContainer = reduxFormConnectToLoginForm(LoginForm)
LoginForm.propTypes = {
	handleSubmit: React.PropTypes.func.isRequired,
	fields: React.PropTypes.object.isRequired,
	error: React.PropTypes.string
}


const RegisteredCustomers = () => (
	<div className={css(className.registered)}>
		<p>ENTRA CON TU CUENTA</p>
		<LoginFormContainer/>
	</div>
)

class Login extends Component {
	static propTypes = {

	};

	render() {
		return (
			<div>
				<SubHeader title={'BIENVENIDO A TUDELARTE'}/>
				<div className={css(className.content)}>
					<NewCustomersContainer/>
					<RegisteredCustomers/>
				</div>
			</div>
		)
	}
}

export default Login