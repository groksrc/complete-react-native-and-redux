import React from 'react'
import { View, ActivityIndicator } from 'react-native'

const Spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size || 'large'} />
  </View>
)

const styles = {
  spinnerStyle: {
    flex: 1,                      // use the full width of the screen
    justifyContent: 'center',     // horizontal
    alignItems: 'center'          // vertical
  }
}

export default Spinner
