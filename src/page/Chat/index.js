import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import chatStyle from './style'

const ConversationItem = () => {
  return (
    <TouchableOpacity>
      <View style={chatStyle.conversationContainer}>
        <Image style={chatStyle.image50} source={require('../../assets/image/avatar.jpg')} />
        <View style={chatStyle.infoContent}>
          <Text style={chatStyle.nameConversation}>Cẩm Giang</Text>
          <Text style={chatStyle.lastMessage}>How are u?</Text>
        </View>
        <Text style={chatStyle.time}>12:20 PM</Text>
      </View>
    </TouchableOpacity>
  )
}

const Chat = () => {
  return (
    <View style={chatStyle.container}>
      <View style={chatStyle.header}>
        <Image style={chatStyle.avatar} source={require('../../assets/image/avatar.jpg')} />
        <View style={chatStyle.infoContent}>
          <Text style={chatStyle.name}>Duc Duy</Text>
          <Text style={chatStyle.active}>Active <View style={chatStyle.dot} /></Text>
        </View>
      </View>
      <ConversationItem />
      <ConversationItem />
    </View>
  )
}

export default Chat