/* @flow */
'use strict'

import { reduxForm } from 'redux-form';

const validate = values => {
  let errors = {}  // eslint-disable-line prefer-const
  if (!values.email) {
    errors.email = 'Requerido'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Formato direccion de correo erroneo'
  }
  if (!values.password) {
    errors.password = 'Requerido'
  } else if (values.password.length < 6) {
    errors.password = 'Al menos seis letras'
  }
  return errors
}

const fields = ['email', 'password']

const LoginForm = {
	config: {
		form: 'login',
		fields,
		validate
	}
}

export const reduxFormConnectToLoginForm = reduxForm(
	LoginForm.config
)