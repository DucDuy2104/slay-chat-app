import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import signUpStyle from './style'
import { TextInput } from 'react-native-gesture-handler'
const SignUp = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('Login')
  }

  const signUp = () => {
    navigation.navigate('Login')
  }

  return (
    <View style={signUpStyle.container}>
      <Image style={signUpStyle.logo} source={require('../SignUp/logo.png')} />
      <Text style={signUpStyle.title}>Wellcome</Text>
      <Text style={signUpStyle.title1}>Create account</Text>
      <TextInput placeholder="Name" onChangeText={(text) => setname(text)} style={signUpStyle.input} />
      <TextInput placeholder="Email" onChangeText={(text) => setemail(text)} style={signUpStyle.input} />
      <TextInput placeholder="Password" onChangeText={(text) => setpassword(text)} style={signUpStyle.input} />
      <TextInput placeholder="Confirm password" onChangeText={(text) => setrepassword(text)} style={signUpStyle.input} />
      <TouchableOpacity onPress={signUp} style={signUpStyle.button}>
        <Text style={signUpStyle.buttonText}>Register</Text>
      </TouchableOpacity>
      <Text style={signUpStyle.text}>Already have an account? <Text style={signUpStyle.text1} onPress={goToLogin}>Login</Text></Text>
    </View>
  )
}

export default SignUp