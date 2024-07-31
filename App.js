import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './src/routes/BottomNav'
import MainStack from './src/routes/MainStack'
import { Provider } from 'react-redux'
import Store from './src/redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
  )
}

export default App