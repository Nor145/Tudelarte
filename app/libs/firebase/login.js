/* @flow */
'use strict'

import Firebase from 'firebase';

const ref = new Firebase('https://tudelarte.firebaseio.com/');

const loginWithPassword = data => new Promise((resolve, reject) => {
  ref.authWithPassword({
    email: data.email,
    password: data.password
  }, (error, user) =>  {
    if (error && error.code === 'INVALID_USER') {
    	reject({email: 'Usuarion no existe', _error: 'Fallo durante login'})
    } else if (error && error.code === 'INVALID_PASSWORD') {
      reject({password: 'Contrasena incorrecta', _error: 'Fallo durante login'})
    } else {
      console.log('Authenticated successfully with:', user)
      resolve()
    }
  })
})

export default loginWithPassword