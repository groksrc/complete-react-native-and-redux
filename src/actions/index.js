import firebase from 'firebase'
import * as types from './types'

export const emailChanged = (text) => ({
  type: types.EMAIL_CHANGED,
  payload: text
})

export const passwordChanged = (text) => ({
  type: types.PASSWORD_CHANGED,
  payload: text
})

export const loginUser = ({ email, password }) => (dispatch) => {
  firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
    dispatch({ type: types.LOGIN_USER_SUCCESS, payload: user })
  })
}
