import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import chatStyle from './style'
import AxiosInstance from '../../helper/AxiosInstance'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import constants from '../../assets/constants/constants'

const ConversationItem = ({ conversation, curUser, navigation }) => {
  const enterName = () => {
    let conversationName = ''
    for (const participant of conversation.participants) {
      if (participant._id !== curUser?._id) {
        conversationName += participant.userName + ", "
      }
    }
    return conversationName.trim().slice(0, -1)
  }

  const enterImage = () => {
    if (conversation.participants.length > 2) {
      return conversation.image
    }
    for (const participant of conversation.participants) {
      if (participant._id !== curUser?._id) {
        return participant.avatar
      }
    }
  }

  const createTime = (isoString) => {
    const date = new Date(isoString);
    const now = new Date();

    const isToday = date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    if (isToday) {
      return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' });
    }
  }

  const onConversationPress = () => {
    navigation.navigate('Conversation', {
      conversationId: conversation._id,
      userName: enterName(),
      avatar: enterImage()
    })
  }

  return (
    <TouchableOpacity onPress={onConversationPress}>
      <View style={chatStyle.conversationContainer}>
        <Image style={chatStyle.image50} source={{ uri: enterImage() }} />
        <View style={chatStyle.infoContent}>
          <Text style={chatStyle.nameConversation}>{enterName()}</Text>
          <Text style={chatStyle.lastMessage}>{conversation.lastMessage ? (conversation.lastMessage.sender === curUser?._id ? "You: " : "") + conversation.lastMessage.content : "chưa có tin nhắn nào!"}</Text>
        </View>
        <Text style={chatStyle.time}>{conversation.lastMessage ? createTime(conversation.lastMessage.createdAt) : ""}</Text>
      </View>
    </TouchableOpacity>
  )
}

const Chat = ({ navigation }) => {
  const appState = useSelector((state) => state.app)
  const [conversations, setConversations] = useState([])
  const [reload, setReload] = useState(false)

  const getConversation = async () => {
    try {
      const response = await AxiosInstance().get(`/conversation/get-conversation/${appState.user?._id}`)
      console.log("data: ", response)
      const sortedConversations = sortConversations(response.data)
      setConversations(sortedConversations)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const socket = io(`http://${constants.ipV4}:8888`)

    socket.on('sendMessage', data => {
      setConversations(prevConversations => {
        const newConversations = [...prevConversations]
        const conversation = newConversations.find(conv => conv._id === data.message.conversationId)
        if (conversation) {
          conversation.lastMessage = data.message
        }
        return sortConversations(newConversations)
      })
    })

    return () => {
      socket.disconnect()
    }
  }, [appState.user])

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setReload(state => !state);
    })
    return unsubscribe
  }, [navigation, reload])

  useEffect(() => {
    getConversation()
  }, [appState.user, reload])

  const sortConversations = useCallback((conversations) => {
    console.log('Sorting conversations.......')
    return conversations.slice().sort((a, b) => {
      if (!(a?.lastMessage)) return 1;
      if (!(b?.lastMessage)) return -1;
      return new Date(b.lastMessage?.createdAt) - new Date(a.lastMessage?.createdAt)
    })
  }, [])

  return (
    <View style={chatStyle.container}>
      <View style={chatStyle.header}>
        <Image style={chatStyle.avatar} source={appState?.user?.avatar ? { uri: appState.user?.avatar } : require('../../assets/image/avatar.jpg')} />
        <View style={chatStyle.infoContent}>
          <Text style={chatStyle.name}>{appState?.user?.userName}</Text>
          <Text style={chatStyle.active}>Active <View style={chatStyle.dot} /></Text>
        </View>
      </View>
      <FlatList
        data={conversations}
        renderItem={({ item }) => <ConversationItem navigation={navigation} curUser={appState.user} conversation={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Chat
