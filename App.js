import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './src/routes/BottomNav'

const App = () => {
  return (
    <NavigationContainer>
      <BottomNav/>
    </NavigationContainer>
  )
}

export default App