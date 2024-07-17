import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import friendStyle from './style'

const FriendItem = () => {
  return (
    <View>
      
    </View>
  )
}

const Friend = () => {
  return (
    <View style={friendStyle.container}>
      <View style={friendStyle.inputContainer}>
        <TextInput placeholder="Enter friend's email" style={friendStyle.input}/>
        <Image style={friendStyle.icon20} source={require('../../assets/image/search.png')}/>
      </View>
    </View>
  )
}

export default Friend