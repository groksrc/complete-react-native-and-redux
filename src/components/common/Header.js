// import libraries for making a component
import React from 'react'
import { Text, View } from 'react-native'

// make a component
const Header = (props) => {
  const { textStyle, viewStyle } = styles
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    height: 60,
    justifyContent: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
}

// make the component available to other parts of the app
export default Header
