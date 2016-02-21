/* @flow */
'use strict'

import ref from '../ref.js'

export const getUserById = userId => new Promise( resolve => {
  ref.child(`users/${userId}`).once('value', data => {
    const user = data.val();
    resolve(user);
  });
});