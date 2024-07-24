import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Wellcome from '../page/Wellcome'
import Login from '../page/Login'
import SignUp from '../page/SignUp'
import BottomNav from './BottomNav'

import EditProfile from '../page/EditProfile'
import ForgotPass from '../page/ForgotPass'

const Stack = createStackNavigator()

const MainStack = () => {
  return (
    <Stack.Navigator
     screenOptions={{
      headerShown: false
     }}
     initialRouteName='EditProfile'
    >
       <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Wellcome" component={Wellcome} />
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="SignUp" component={SignUp}/>
      <Stack.Screen name="BottomNav" component={BottomNav}/>
    </Stack.Navigator>
  )
}

export default MainStack