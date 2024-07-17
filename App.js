import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './src/routes/BottomNav'
import MainStack from './src/routes/MainStack'

const App = () => {
  return (
    <NavigationContainer>
      <MainStack/>
    </NavigationContainer>
  )
}

export default App