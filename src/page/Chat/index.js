import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import chatStyle from './style'
import AxiosInstance from '../../helper/AxiosInstance'
import { FlatList, TextInput } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { io } from 'socket.io-client'
import friendStyle from '../Friend/style'
import colors from '../../assets/color/colors'

const ConversationItem = ({ conversation, curUser, navigation }) => {
  const enterName = () => {
    let conversationName = ''
    for (const participant of conversation.participants) {
      if (participant._id !== curUser?._id) {
        conversationName += participant.userName + ", "
      }
    }
    return conversationName.trim().slice(0, -1) + (conversation.participants.length  > 2? ", Bạn" : "")
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
          <Text numberOfLines={1} ellipsizeMode='tail' style={chatStyle.nameConversation}>{enterName()}</Text>
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
      if (appState.user) {
        const response = await AxiosInstance().get(`/conversation/get-conversation/${appState.user?._id}`)
        console.log("data: ", response)
        const sortedConversations = sortConversations(response.data)
        setConversations(sortedConversations)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const socket = io(`https://slay-chat-back-end.onrender.com`)

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
      const dateA = a.lastMessage ? a.lastMessage?.createdAt : a.createdAt
      const dateB = b.lastMessage ? b.lastMessage?.createdAt : b.createdAt
      return new Date(dateB) - new Date(dateA)
    })
  }, [])

  useEffect(() => {
    let socket = io(`https://slay-chat-back-end.onrender.com`)

    socket.on('createConversation', data => {
      const participant = data.participants.find(pa => pa._id === appState.user?._id)
      if (participant) {
        setConversations(preConversations => {
          const newConversations = [...preConversations]
          newConversations.push(data)
          return sortConversations(newConversations)
        })
      }
    })

    return () => {
      socket.disconnect()
    }
  }, [appState.user])

  const goToAddGroup = () => {
    navigation.navigate('AddGroup')
  }

  return (
    <View style={chatStyle.container}>
      <View style={chatStyle.header}>
        <Image style={chatStyle.avatar} source={appState?.user?.avatar ? { uri: appState.user?.avatar } : require('../../assets/image/avatar.jpg')} />
        <View style={chatStyle.infoContent}>
          <Text style={chatStyle.name}>{appState?.user?.userName}</Text>
          <Text style={chatStyle.active}>Active <View style={chatStyle.dot} /></Text>
        </View>
        <TouchableOpacity onPress={goToAddGroup} style={chatStyle.button30}>
          <Text style={chatStyle.textButton}>Tạo nhóm</Text>
          <Image style={chatStyle.icon20} source={require('../../assets/image/addgroup.png')} />
        </TouchableOpacity>
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
