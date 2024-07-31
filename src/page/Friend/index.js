import { View, Text, TextInput, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import friendStyle from './style'
import { useSelector } from 'react-redux'
import AxiosInstance from '../../helper/AxiosInstance'
import { FlatList } from 'react-native-gesture-handler'

const FriendItem = ({ friend, addOrRemoveFriend, onGoToChat }) => {
  const [isFriend, setIsFriend] = useState(friend.isFriend);

  const onMarkPress = async () => {
    const response = await addOrRemoveFriend(friend._id);
    if (response.status) {
      setIsFriend(prevState => !prevState);
    } else {
      Alert.alert('Error', response.data.message);
    }
  };

  useEffect(() => {
    setIsFriend(friend.isFriend);
  }, [friend.isFriend]);

  return (
    <View style={friendStyle.friendContainer}>
      <Image source={{ uri: friend.avatar }} style={friendStyle.avatar} />
      <View style={friendStyle.nameContent}>
        <Text style={friendStyle.name}>{friend.userName}</Text>
        <Text style={friendStyle.email}>{friend.email}</Text>
      </View>
      <TouchableOpacity onPress={onMarkPress} style={[friendStyle.btn, friendStyle.backgroundColorGreen]}>
        <Image
          style={friendStyle.image20}
          source={isFriend ? require('../../assets/image/mark_ch.png') : require('../../assets/image/mark.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {onGoToChat(friend._id)}} style={[friendStyle.btn, friendStyle.backgroundColorBlue]}>
        <Image style={friendStyle.image20} source={require('../../assets/image/chat.png')} />
      </TouchableOpacity>
    </View>
  );
};

const Friend = ({ navigation }) => {

  const appState = useSelector((state) => state.app)
  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(false)
  const [emailInput, setEmailInput] = useState("")

  const enterName = (conversation) => {
    const curUser = appState.user
    var conversationName = ''
    for (const participant of conversation.participants) {
      if (participant._id !== curUser?._id) {
        conversationName += participant.userName + ", "
      }
    }
    const newName = conversationName.trim().slice(0, -1)
    return newName
  }

  const enterImage = (conversation) => {
    const curUser = appState.user
    if (conversation.participants.lenght > 2) {
      return conversation.image
    }
    for (const participant of conversation.participants) {
      if (participant._id !== curUser?._id) {
        return participant.avatar
      }
    }
  }


  const addOrRemoveFriend = async (friendId) => {
    try {
      setLoading(true)
      const response = await AxiosInstance().post(`/user/add-friend`, {
        currUserId: appState.user?._id,
        friendId
      })
      setLoading(false)

      console.log(response)
      return response
    } catch (error) {
      console.log(error.message)
    }
  }

  const findFriend = async () => {
    try {
      setLoading(true)
      const response = await AxiosInstance().post('/user/find-friend', {
        friendEmail: emailInput,
        userId: appState.user._id
      })

      console.log('friend: ', response)

      if (response.status) {
        setFriends(response.data)
        setEmailInput("")
      } else {
        setFriends([])
      }
      setLoading(false)

      return response.status

    } catch (error) {
      console.log(error.message)
      setLoading(false)

    }
  }

  const getFriends = async () => {
    try {
      console.log('getFriends..........: ', `/user/get-friends/${appState.user?._id}`)
      setLoading(true)
      const response = await AxiosInstance().get(`/user/get-friends/${appState.user?._id}`)
      console.log('getFriend: ', response)
      if (response.status) {
        const recievedFriends = response.data.map((friend) => {
          return {
            ...friend,
            isFriend: true
          }
        })
        setFriends(recievedFriends)
        setLoading(false)
      }
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }

  const createOrGetConversation = async (friendId) => {
    try {
      setLoading(true)
      const listUser = [friendId, appState.user?._id]
      const response = await AxiosInstance().post('/conversation/create-conversation', {
        listUser
      })

      if (response.status) {
        const conversation = response.data
        navigation.navigate('Conversation', {
          conversationId: conversation._id,
          userName: enterName(conversation),
          avatar: enterImage(conversation)
        })
        setLoading(false)
      } else {
        Alert.alert('Error', "Có lỗi xảy ra, vui lòng thử lại!")
        setLoading(false)
      }
    } catch (error) {
      console.log(error.message)
      Alert.alert('Error', "Có lỗi xảy ra, vui lòng thử lại!")
      setLoading(false)
    }
  }

  useEffect(() => {
    getFriends()
  }, [appState.user])

  return (
    <View style={friendStyle.container}>
      <View style={friendStyle.inputContainer}>
        <TextInput value={emailInput} onChangeText={(txt) => setEmailInput(txt)} placeholder="Enter friend's email" style={friendStyle.input} />
        <TouchableOpacity onPress={findFriend}>
          <Image style={friendStyle.icon20} source={require('../../assets/image/search.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={getFriends} style={friendStyle.marginLeft10}>
          <Image style={friendStyle.icon20} source={require('../../assets/image/reload.png')} />
        </TouchableOpacity>
      </View>

      {
        friends.length == 0 ? <Text>Không tìm thấy bạn</Text> :
          <FlatList
            data={friends}
            renderItem={({ item }) => <FriendItem onGoToChat={createOrGetConversation} addOrRemoveFriend={addOrRemoveFriend} friend={item} />}
            keyExtractor={(item, id) => id.toString()}
            showsVerticalScrollIndicator={false}
          />
      }
      <View style={[friendStyle.overLay, !loading && friendStyle.hide]}>
        <ActivityIndicator />
        <Text style={friendStyle.text}>Đợi xíu...</Text>
      </View>
    </View>
  )
}

export default Friend