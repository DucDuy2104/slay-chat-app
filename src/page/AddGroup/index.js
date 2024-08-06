import { View, Text, Image, ActivityIndicator, Alert } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import friendStyle from '../Friend/style'
import addGroupStyle from './style'
import { FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../assets/color/colors'
import AxiosInstance from '../../helper/AxiosInstance'
import { useDispatch, useSelector } from 'react-redux'
import chatStyle from '../Chat/style'
import { addOrRemoveListFriends, resetListFriends } from '../../redux/Reducer'
import { useFocusEffect } from '@react-navigation/native'



const FriendItem = ({ friend, onFriendCheck, curUser }) => {
    return (
        <View style={chatStyle.friendContainer}>
            <Image style={chatStyle.image30} source={{ uri: friend.avatar }} />
            <View style={chatStyle.nameContainer}>
                <Text style={chatStyle.name}>{friend.userName}</Text>
                <Text style={chatStyle.mail}>{friend.email}</Text>
            </View>
            <TouchableOpacity style={friend._id == curUser._id && addGroupStyle.hide} onPress={() => onFriendCheck(friend._id)}>
                <Image style={chatStyle.check} source={friend.isChoose ? require('../../assets/image/check.png') : require('../../assets/image/uncheck.png')} />
            </TouchableOpacity>
        </View>
    )
}


const AddGroup = ({ navigation }) => {
    const [emailInput, setEmailInput] = useState('')
    const [listFriend, setListFriend] = useState([])
    const appState = useSelector((state) => state.app)
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(appState.listFriends.length)
    const dispatch = useDispatch()

    const goBack = () => {
        dispatch(resetListFriends())
        navigation.goBack()
    }



    const enterName = (conversation) => {
        const curUser = appState.user
        var conversationName = ''
        for (const participant of conversation.participants) {
            if (participant._id !== curUser?._id) {
                conversationName += participant.userName + ", "
            }
        }
        var newName = conversationName.trim().slice(0, -1)
        if (conversation.participants.length > 2) {
            newName += ", " + 'Bạn'
        }
        return newName
    }

    const enterImage = (conversation) => {
        const participantsLenght = conversation.participants.length
        const curUser = appState.user
        if (participantsLenght > 2) {
            return conversation.image
        }
        for (const participant of conversation.participants) {
            if (participant._id !== curUser?._id) {
                return participant.avatar
            }
        }
    }

    const findFriend = async () => {
        try {
            if (!appState.user) {
                return
            }
            setLoading(true)
            const response = await AxiosInstance().post(`/user/find-friend`, {
                friendEmail: emailInput,
                userId: appState.user._id
            })
            if (response.status) {
                const friendRecieved = response.data.map(friend => {
                    const idF = appState.listFriends.indexOf(friend._id)
                    return {
                        ...friend,
                        isChoose: idF !== -1
                    }
                })
                setListFriend(friendRecieved)
                setLoading(false)
            } else {
                setListFriend([])
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            setListFriend([])
            setLoading(false)
        }
    }

    const checkUser = () => {
        console.log('checking......')
        const friendRecieved = listFriend.map(friend => {
            const idF = appState.listFriends.indexOf(friend._id)
            return {
                ...friend,
                isChoose: idF !== -1
            }
        })
        setListFriend(friendRecieved)
    }

    const getFriends = async () => {
        try {
            if (!appState.user) {
                return
            }
            setEmailInput("")
            setLoading(true)
            const response = await AxiosInstance().get(`/user/get-friends/${appState.user?._id}`)
            if (response.status) {
                const friendRecieved = response.data.map(friend => {
                    const idF = appState.listFriends.indexOf(friend._id)
                    return {
                        ...friend,
                        isChoose: idF !== -1
                    }
                })
                setListFriend(friendRecieved)
                setLoading(false)
            }
        } catch (error) {
            console.log(error.message)
            setLoading(false)
        }
    }

    const onFriendCheck = (friendId) => {
        dispatch(addOrRemoveListFriends(friendId))
    }
    useEffect(() => {
        getFriends()
    }, [appState.user])

    useEffect(() => {
        checkUser()
    }, [appState.listFriends])

    useEffect(() => {
        setCount(appState.listFriends.length)
    }, [appState.listFriends])

    useFocusEffect(
        useCallback(() => {
          console.log('Màn hình được hiển thị');
          return () => {
            dispatch(resetListFriends())
            console.log('Màn hình bị rời khỏi');
          };
        }, [])
      );
    

    const createOrGetConversation = async () => {
        try {

            const listUser = [...appState.listFriends, appState.user?._id]
            if (listUser.length < 2) {
                Alert.alert('Error', 'Vui lòng chọn ít nhất 1 bạn để tạo nhóm!')
                return
            }

            setLoading(true)
            const response = await AxiosInstance().post('/conversation/create-conversation', {
                listUser
            })

            if (response.status) {
                const conversation = response.data
                console.log('participants length: ' + conversation.participants.length)
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


    return (
        <View style={addGroupStyle.container}>
            <View style={addGroupStyle.header}>
                <TouchableOpacity onPress={goBack}>
                    <Image style={addGroupStyle.icon20} source={require('../../assets/image/back.png')} />
                </TouchableOpacity>
                <Text style={addGroupStyle.headerText}>
                    Thêm nhóm
                </Text>
                <View style={addGroupStyle.icon20} />
            </View>
            <View style={friendStyle.inputContainer}>
                <TextInput placeholderTextColor={colors.gray} value={emailInput} onChangeText={(txt) => setEmailInput(txt)} placeholder="Enter friend's email" style={friendStyle.input} />
                <TouchableOpacity onPress={findFriend}>
                    <Image style={friendStyle.icon20} source={require('../../assets/image/search.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={getFriends} style={friendStyle.marginLeft10}>
                    <Image style={friendStyle.icon20} source={require('../../assets/image/reload.png')} />
                </TouchableOpacity>
            </View>
            {
                listFriend.length > 0 ? (
                    <FlatList
                        data={listFriend}
                        renderItem={({ item }) => <FriendItem onFriendCheck={onFriendCheck} curUser={appState.user} friend={item} />}
                        keyExtractor={(item, id) => id.toString()}
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                    />
                ) : <Text style={{ color: '#b1b1b1', flex: 1 }}>Không tìm thấy bạn</Text>
            }
            <TouchableOpacity onPress={createOrGetConversation} style={addGroupStyle.buttonAddGroup}>
                <Text style={addGroupStyle.textButton}>Thêm nhóm ({count} thành viên)</Text>
            </TouchableOpacity>
            <View style={[friendStyle.overLay, !loading && friendStyle.hide]}>
                <ActivityIndicator />
                <Text style={friendStyle.text}>Đợi xíu...</Text>
            </View>
        </View>
    )
}

export default AddGroup