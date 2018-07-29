import firebase from '@firebase/app'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'

class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyC2nduB3z2BePVfgMkaE4wLdiZ_X2cNIsk',
      authDomain: 'manager-e00d0.firebaseapp.com',
      databaseURL: 'https://manager-e00d0.firebaseio.com',
      projectId: 'manager-e00d0',
      storageBucket: 'manager-e00d0.appspot.com',
      messagingSenderId: '357247584626'
    }
    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, { /* initial state mainly for SSR */ }, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App
