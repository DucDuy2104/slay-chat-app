import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Wellcome from '../page/Wellcome'
import Login from '../page/Login'
import SignUp from '../page/SignUp'
import BottomNav from './BottomNav'
import { useSelector } from 'react-redux'
import Conversation from '../page/Conversation'
import EditProfile from '../page/EditProfile'
import ForgotPass from '../page/ForgotPass'
import FeedBack from '../page/FeedBack'
import AddGroup from '../page/AddGroup'

const Stack = createStackNavigator()

const MainStack = () => {
  const appState = useSelector((state) => state.app)
  return (
    appState.user ? (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='BottomNav'
      >
        <Stack.Screen name="BottomNav" component={BottomNav} />
        <Stack.Screen name="Conversation" component={Conversation}/>
        <Stack.Screen name="EditProfile" component={EditProfile}/>
        <Stack.Screen name="ChangePassword" component={ForgotPass}/>
        <Stack.Screen name="FeedBack" component={FeedBack}/>
        <Stack.Screen name="AddGroup" component={AddGroup}/>
      </Stack.Navigator>
    ) : (
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Wellcome'
      >
        <Stack.Screen name="Wellcome" component={Wellcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    )
  )
}

export default MainStack