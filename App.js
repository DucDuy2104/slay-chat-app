import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomNav from './src/routes/BottomNav'
import MainStack from './src/routes/MainStack'
import Index from './src/page/feedback/Index'


const App = () => {
  return (
    <NavigationContainer>
      <Index/>
    </NavigationContainer>
  )
}

export default App