import React, { Component } from 'react'
import { SafeAreaView, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyC2nduB3z2BePVfgMkaE4wLdiZ_X2cNIsk",
      authDomain: "manager-e00d0.firebaseapp.com",
      databaseURL: "https://manager-e00d0.firebaseio.com",
      projectId: "manager-e00d0",
      storageBucket: "manager-e00d0.appspot.com",
      messagingSenderId: "357247584626"
    }
    firebase.initializeApp(config)
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <LoginForm />
        </SafeAreaView>
      </Provider>
    )
  }
}

export default App