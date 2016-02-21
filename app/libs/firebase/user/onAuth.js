/* @flow */
'use strict'

import ref from '../ref.js'
import { getUserById } from './utils'
import { addUserState, removeUserState } from 'redux_app/modules/user'

export default dispatch => ref.onAuth( authData => {
  const userId = authData && authData.uid;
  if (userId) {
    getUserById(userId)
    .then( user => dispatch(addUserState(user)))
  } else {
    dispatch(removeUserState())
  }
});