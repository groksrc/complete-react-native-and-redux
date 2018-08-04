import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { text } from 'react-native-communications'
import EmployeeForm from './EmployeeForm'
import { employeeDelete, employeeSave, employeeUpdate } from '../actions'
import { Button, Card, CardSection, Confirm } from './common'

class EmployeeEdit extends Component {
  state = { showModal: false }

  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onButtonPress() {
    const { name, phone, shift } = this.props
    this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid })
  }

  onTextPress() {
    const { phone, shift } = this.props
    text(phone, `Your shift is on ${shift}`)
  }

  onAccept() {
    this.props.employeeDelete({ uid: this.props.employee.uid })
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={() => this.setState({ showModal: true })}>
            Delete
          </Button>
        </CardSection>
        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={() => this.setState({ showModal: false })}
        >
          Are you sure you want to delete?
        </Confirm>
      </Card>
    )
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeDelete,
  employeeSave,
  employeeUpdate
})(EmployeeEdit)
