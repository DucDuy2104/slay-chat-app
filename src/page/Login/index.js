import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import loginStyle from './style'

const Login = (props) => {
  const {navigation} = props

  const [email, setemail] = useState(false)
  const [password, setpassword] = useState(false)

  const ClickRegister = () => {
    console.log('ClickRegister')
      navigation.navigate('SignUp')
  } 

  const handlerUdateProfile = async () => {
    try {
      const response = fetch('thay link api do', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });
      const ResponseData = await response.json();
      if(response.ok == true){
        Alert.alert('Success', 'Login success')
      }
      else{
        Alert.alert('Error', 'Login failed', ResponseData.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <View style={loginStyle.container}>
      <Image style={loginStyle.logo} source={require('../Login/logo.png')} />
       <Text style={loginStyle.title}>Wellcome</Text>
       <Text style={loginStyle.title1}>Login and enjoy your time</Text>
       <TextInput placeholder="Email" onChangeText={(text) => setemail(text)} style={loginStyle.input}/>
       <TextInput placeholder="Password" onChangeText={(text) => setpassword(text)} style={loginStyle.input}/>
       <TouchableOpacity style={loginStyle.button}>
        <Text style={loginStyle.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={loginStyle.text}>Don't have an account? <Text style={loginStyle.text1} onPress={ClickRegister}>Register</Text></Text>
    </View>
  )
}

export default Login