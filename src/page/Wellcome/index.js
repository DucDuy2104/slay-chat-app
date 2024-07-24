import { View, Text, Image } from 'react-native'
import React from 'react'
import wellcomeStyle from './style'
const Wellcome = () => {
  return (
    <View>
      <Image style={wellcomeStyle.image} source={require('../../assets/image/logowellcome.png')} />
      <Text style={wellcomeStyle.slay}>Slay Chat</Text>
    </View>
  )
}

export default Wellcome