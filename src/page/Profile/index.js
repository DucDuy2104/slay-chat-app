import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import profileStyle from './style'

const Profile = () => {
  return (
    <View style={profileStyle.container}>
      <View style={profileStyle.profileContainer}>
        <Image
          style={profileStyle.profileImage}
          source={require('../../assets/image/avatar.jpg')}
        />
        <View style={profileStyle.profileInfo}>
          <Text style={profileStyle.profileName}>Đào Minh Thành</Text>
          <Text style={profileStyle.profileEmail}>dmthanh@gmail.com</Text>
        </View>
      </View>

      <TouchableOpacity style={profileStyle.button} onPress={() => alert('Cài đặt')}>
      <Image
          style={profileStyle.icon}
          source={require('./setting.png')}
        />
        <Text style={profileStyle.buttonText}>Cài đặt</Text>
      </TouchableOpacity>

      <TouchableOpacity style={profileStyle.button} onPress={() => alert('Gửi phản hồi')}>
      <Image
          style={profileStyle.icon}
          source={require('./feedback.png')}
        />
        <Text style={profileStyle.buttonText}>Gửi phản hồi</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[profileStyle.button, profileStyle.logoutButton]} onPress={() => alert('Đăng xuất')}>
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