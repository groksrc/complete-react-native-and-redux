import * as types from '../actions/types'

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}

export default (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    case types.EMAIL_CHANGED:
      return { ...state, email: action.payload }
    case types.PASSWORD_CHANGED:
      return { ...state, password: action.payload }
    case types.LOGIN_USER:
      return { ...state, loading: true, error: '' }
    case types.LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload }
    case types.LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed', loading: false }
    default:
      return state
  }
}
