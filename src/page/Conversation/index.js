import { View, Text, Image, TouchableOpacity, ActivityIndicator, Animated, Keyboard, KeyboardAvoidingView } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import conversationStyle from './style'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import colors from '../../assets/color/colors';
import AxiosInstance from '../../helper/AxiosInstance';
import { useSelector } from 'react-redux';
import { io } from 'socket.io-client'
import constants from '../../assets/constants/constants';



const MessageContent = ({ message, curUser }) => {
  const createTime = (isoString) => {
    let date = new Date(isoString);
    let now = new Date();

    let isToday = date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    if (isToday) {
      return "hôm nay - " + date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
    } else {
      return `${date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' })} - ${date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}`;
    }
  }
  return (
    <View style={[conversationStyle.messageContainer, (message.sender._id == curUser._id) && conversationStyle.myContainer]}>
      <View style={[conversationStyle.flexContainer, (message.sender._id == curUser._id) && conversationStyle.hide]}>
        <Image style={conversationStyle.image15} source={{ uri: message.sender.avatar }} />
        <Text style={conversationStyle.miniName}>{message.sender.userName}</Text>
      </View>
      <Text style={conversationStyle.messageContent}>{message.content}</Text>
      <Text style={{ marginTop: 5, fontSize: 10 }}>{createTime(message.createdAt)}</Text>
    </View>
  )
}

const Conversation = ({ navigation, route }) => {
  const appState = useSelector((state) => state.app)
  const [messageInput, setMessageInput] = useState("")
  const [messages, setMessages] = useState([])
  const [sending, setSending] = useState(false)
  const { conversationId, userName, avatar } = route.params
  const flatListRef = useRef(null)

  const getMessage = async () => {
    try {
      const response = await AxiosInstance().get(`message/get-message-via-conversation/${conversationId}`)
      console.log("messages received: ", response.data)
      setMessages(response.data.reverse())
    } catch (error) {

    }
  }

  const onGoBack = () => {
    navigation.goBack()
  }

  const onMessageSend = async () => {
    try {
      setSending(true)
      setMessageInput("")
      const response = await AxiosInstance().post('/message/create-message', {
        conversationId,
        content: messageInput,
        sender: appState.user
      })
      setSending(false)

    } catch (error) {
      console.log("send error: ", error)
    }
  }


  const onImagePicker = () => {

  }

  useEffect(() => {
    getMessage()
  }, [conversationId])


  useEffect(() => {

    let socket = io(`https://slay-chat-back-end.onrender.com`)

    socket.on('sendMessage', data => {
      if (data.message.conversationId == conversationId) {
        console.log(data.message)
        setMessages(oldMessages => {
          const newMessages = [...oldMessages]
          newMessages.unshift(data.message)
          return newMessages
        })
        flatListRef.current.scrollToOffset({ offset: 0, animated: true });
      }
    })

    return () => {
      socket.disconnect()
    }
  }, [appState.user])

  


  return (
    <View style={conversationStyle.container}>
      <View style={conversationStyle.header}>
        <TouchableOpacity onPress={onGoBack}>
          <Image style={conversationStyle.icon18} source={require('../../assets/image/back.png')} />
        </TouchableOpacity>
        <Image style={conversationStyle.image35} source={{ uri: avatar }} />
        <View style={conversationStyle.headerContent}>
          <Text ellipsizeMode='tail' numberOfLines={1} style={conversationStyle.name}>{userName}</Text>
          <Text style={conversationStyle.active}>Đang hoạt động <View style={conversationStyle.dot} /></Text>
        </View>
      </View>
      <ActivityIndicator style={!sending && conversationStyle.hide} />
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageContent curUser={appState.user} message={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        style={conversationStyle.flat}
        contentContainerStyle={conversationStyle.flatContainer}
        ref={flatListRef}
        // onContentSizeChange={onContentSizeChanged}
        inverted
      />
      <View style={conversationStyle.footer}>
        <TextInput value={messageInput} onChangeText={(txt) => { setMessageInput(txt) }} style={conversationStyle.input} placeholder='Message' placeholderTextColor={colors.blue} />
        <TouchableOpacity onPress={messageInput ? onMessageSend : onImagePicker}>
          <Image source={messageInput ? require('../../assets/image/send.png') : require('../../assets/image/image_picker.png')} style={conversationStyle.image26} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Conversation