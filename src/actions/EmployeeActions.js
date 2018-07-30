import firebase from '@firebase/app'
import '@firebase/auth'
import '@firebase/database'
import { Actions } from 'react-native-router-flux'
import * as types from './types'

export const employeeUpdate = ({ prop, value }) => ({
  type: types.EMPLOYEE_UPDATE,
  payload: { prop, value }
})

export const employeeCreate = ({ name, phone, shift }) => (dispatch) => {
  const { currentUser } = firebase.auth()
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .push({ name, phone, shift })
    .then((response) => {
      console.log(response)
      dispatch({
        type: types.EMPLOYEE_CREATE
      })
    })
    .then(() => {
      // Actions.employeeList({ type: 'reset' }) would navigate to the employeeList and reset the stack for the scene
      Actions.pop()
    })
}
