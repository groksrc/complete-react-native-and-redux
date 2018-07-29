import * as types from './types'

export const employeeUpdate = ({ prop, value }) => ({
  type: types.EMPLOYEE_UPDATE,
  payload: { prop, value }
})
