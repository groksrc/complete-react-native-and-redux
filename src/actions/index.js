import * as types from './types'

export const emailChanged = (text) => ({
  type: types.EMAIL_CHANGED,
  payload: text
})
