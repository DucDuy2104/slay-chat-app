import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './src/routes/BottomNav'
import MainStack from './src/routes/MainStack'
<<<<<<< HEAD
import { Provider } from 'react-redux'
import Store from './src/redux/Store'

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </Provider>
=======
import Index from './src/page/feedback/Index'


const App = () => {
  return (
    <NavigationContainer>
      <Index/>
    </NavigationContainer>
>>>>>>> 280934d3dd3f4ccf272fac40298dd7bf37787b47
  )
}

export default App