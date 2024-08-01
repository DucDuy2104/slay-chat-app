import { View, Text, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import signUpStyle from './style'
import { TextInput } from 'react-native-gesture-handler'
import AxiosInstance from '../../helper/AxiosInstance'
const SignUp = ({ navigation }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setrepassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const goToLogin = () => {
    navigation.navigate('Login')
  }

  const resetData = () => {
    setEmail('')
    setPassword('')
    setName('')
    setrepassword('')
  }

  const register = async () => {
    try {
      if (!name || !email || !password || !repassword) {
        Alert.alert('Error', 'Please fill all the form')
        return
      }

      if (password.length < 6) {
        Alert.alert('Error', 'Password must be at least 6 characters long')
        return
      }
      if (password !== repassword) {
        Alert.alert('Error', 'Password does not match')
        return
      }
      setIsLoading(true)
      const response = await AxiosInstance().post('/user/register', {
        userName: name,
        email,
        password
      })
      if (response.status) {
        Alert.alert('Success', 'Register successfully')
        resetData()
        setIsLoading(false)
        navigation.navigate('Login')
      } else {
        Alert.alert('Error', response.message)
        setIsLoading(false)
      }
    } catch (error) {
      console.log('Failed to register: ', error)
      Alert.alert('Error', 'Failed to register')
      setIsLoading(false)
    }
  }

  return (
    <View style={signUpStyle.container}>
      <Image style={signUpStyle.logo} source={require('../SignUp/logo.png')} />
      <Text style={signUpStyle.title}>Wellcome</Text>
      <Text style={signUpStyle.title1}>Create account</Text>
      <TextInput value={name} onChangeText={(txt) => setName(txt)} placeholder="Name" style={signUpStyle.input} />
      <TextInput value={email} onChangeText={(txt) => setEmail(txt)} placeholder="Email" style={signUpStyle.input} />
      <TextInput value={password} onChangeText={(txt) => setPassword(txt)} placeholder="Password" style={signUpStyle.input} />
      <TextInput value={repassword} onChangeText={(txt) => setrepassword(txt)} placeholder="Confirm password" style={signUpStyle.input} />
      <TouchableOpacity onPress={register} style={signUpStyle.button}>
        <Text style={signUpStyle.buttonText}>Register</Text>
      </TouchableOpacity>

      <ActivityIndicator  style={!isLoading && signUpStyle.hide}/>
      <Text style={signUpStyle.text}>Already have an account? <Text style={signUpStyle.text1} onPress={goToLogin}>Login</Text></Text>
    </View>
  )
}

export default SignUp