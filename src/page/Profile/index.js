import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import profileStyle from './style'
import { useDispatch, useSelector } from 'react-redux'
import { logout, resetListFriends } from '../../redux/Reducer'

const Profile = ({navigation}) => {
  

  const appState = useSelector((state) => state.app)

  const onEditProfile = () => {
    navigation.navigate('EditProfile')
  }

  const onChangePassword = () => {
    navigation.navigate('ChangePassword')
  }

  const onFeedBack = () => {
    navigation.navigate('FeedBack')
  }


  const dispatch = useDispatch()
  return (
    <View style={profileStyle.container}>
      <View style={profileStyle.profileContainer}>
        <Image
          style={profileStyle.profileImage}
          source={appState.user? {uri: appState.user?.avatar} : require('../../assets/image/avatar.jpg')}
        />
        <View style={profileStyle.profileInfo}>
          <Text style={profileStyle.profileName}>{appState.user?.userName}</Text>
          <Text style={profileStyle.profileEmail}>{appState.user?.email}</Text>
        </View>
      </View>

      <TouchableOpacity style={profileStyle.button} onPress={onEditProfile}>
        <Image
          style={profileStyle.icon}
          source={require('./setting.png')}
        />
        <Text style={profileStyle.buttonText}>Sửa thông tin</Text>
      </TouchableOpacity>

      <TouchableOpacity style={profileStyle.button} onPress={onChangePassword}>
        <Image
          style={profileStyle.icon}
          source={require('../../assets/image/change.png')}
        />
        <Text style={profileStyle.buttonText}>Đổi mật khẩu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={profileStyle.button} onPress={onFeedBack}>
        <Image
          style={profileStyle.icon}
          source={require('./feedback.png')}
        />
        <Text style={profileStyle.buttonText}>Gửi phản hồi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[profileStyle.button, profileStyle.logoutButton]} onPress={() => {
          dispatch(resetListFriends())
          dispatch(logout())
      }}>
        <Image
          style={profileStyle.icon}
          source={require('./logout.png')}
        />
        <Text style={[profileStyle.buttonText, profileStyle.logoutButtonText]}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile