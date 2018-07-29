import firebase from '@firebase/app'
import '@firebase/auth'
import { Actions } from 'react-native-router-flux'
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
  dispatch({ type: types.LOGIN_USER })

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => loginUserFail(dispatch))
    })
}

const loginUserFail = (dispatch) => {
  dispatch({ type: types.LOGIN_USER_FAIL })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: types.LOGIN_USER_SUCCESS,
    payload: user
  })
  Actions.main()
}
