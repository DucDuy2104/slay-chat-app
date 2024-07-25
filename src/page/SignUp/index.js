import { View, Text, Image, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import signUpStyle from './style'
import { TextInput } from 'react-native-gesture-handler'
const SignUp = (props) => {
  const [name, setname] = useState(false)
  const [email, setemail] = useState(false)
  const [password, setpassword] = useState(false)
  const [repassword, setrepassword] = useState(false)
  const {navigation} = props;
  const ClickLogin = () => {
    console.log('ClickLogin')
      navigation.navigate('Login')
  }

  const handlerUdateProfile = async () => {
    try {
      const response = fetch('thay link api do', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          repassword: repassword
        }),
      });
      const ResponseData = await response.json();
      if(response.ok == true){
        Alert.alert('Success', 'Register success')
      }
      else{
        Alert.alert('Error', 'Register failed', ResponseData.message)
      }
    } catch (error) {
      console.log(error)
    } 
  }
  return (
    <View style={signUpStyle.container}>
      <Image style={signUpStyle.logo} source={require('../SignUp/logo.png')} />
       <Text style={signUpStyle.title}>Wellcome</Text>
       <Text style={signUpStyle.title1}>Create account</Text>
       <TextInput placeholder="Name" onChangeText={(text) => setname(text)} style={signUpStyle.input}/>
       <TextInput placeholder="Email" onChangeText={(text) => setemail(text)} style={signUpStyle.input}/>
       <TextInput placeholder="Password" onChangeText={(text) => setpassword(text)} style={signUpStyle.input}/>
       <TextInput placeholder="Confirm password" onChangeText={(text) => setrepassword(text)} style={signUpStyle.input}/>
       <TouchableOpacity style={signUpStyle.button}>
        <Text style={signUpStyle.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text style={signUpStyle.text}>Already have an account? <Text style={signUpStyle.text1} onPress={ClickLogin}>Login</Text></Text>
    </View>
  )
}

export default SignUp