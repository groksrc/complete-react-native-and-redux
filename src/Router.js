import React from 'react'
import { Actions, Router, Scene } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeEdit from './components/EmployeeEdit'

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" initial />
      </Scene>
      <Scene key="main">
        <Scene
          component={EmployeeList}
          initial
          key="employeeList"
          onRight={() => { Actions.employeeCreate() }}
          rightTitle="Add"
          title="Employees"
        />
        <Scene
          component={EmployeeCreate}
          key="employeeCreate"
          title="Create Employee"
        />
        <Scene
          key="employeeEdit"
          component={EmployeeEdit}
          title="Edit Employee"
        />
      </Scene>
    </Scene>
  </Router>
)

export default RouterComponent
