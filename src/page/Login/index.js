import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import loginStyle from './style'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/UserAPI'
import { setErrorMessage } from '../../redux/Reducer'
import colors from '../../assets/color/colors'

const Login = ({navigation}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const appState = useSelector((state) =>  state.app)
  const dispatch = useDispatch()


  const onLogin = () => {
    try {
      if(!email || !password) {
        dispatch(setErrorMessage('Empty form!'))
        return
      }
      dispatch(login({
        email,
        password
      }))
    } catch (error) {
      dispatch(setErrorMessage(error.message))
    }
  }

  const goToRegister = () => {
    navigation.navigate('SignUp')
  }

  useEffect(() => {
    if(appState.errMessage) {
      Alert.alert("error", appState.errMessage)
      dispatch(setErrorMessage(null))
    }
  }, [appState.errMessage])

  console.log(appState.state)


  
  return (
    <View style={loginStyle.container}>
      <Image style={loginStyle.logo} source={require('../Login/logo.png')} />
       <Text style={loginStyle.title}>Wellcome</Text>
       <Text style={loginStyle.title1}>Login and enjoy your time</Text>
       <TextInput placeholderTextColor={colors.gray} placeholder="Email" onChangeText={(text) => setEmail(text)} style={loginStyle.input}/>
       <TextInput secureTextEntry={true} placeholderTextColor={colors.gray} placeholder="Password" onChangeText={(text) => setPassword(text)} style={loginStyle.input}/>
       <TouchableOpacity onPress={onLogin} style={loginStyle.button}>
        <Text style={loginStyle.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={loginStyle.text}>Don't have an account? <Text style={loginStyle.text1} onPress={goToRegister}>Register</Text></Text>
        <ActivityIndicator style={appState.state == 'loading' || {display: 'none'}}/>
    </View>
  )
}

export default Login