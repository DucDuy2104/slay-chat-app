import { View, Text, Image, TouchableHighlight } from 'react-native'
import React from 'react'
import editProfileStyle  from './style'
import { TextInput } from 'react-native-gesture-handler'
const EditProfile = () => {
  return (
    <View style={editProfileStyle.container}>
      <View style={editProfileStyle.header}>
        <Image style={editProfileStyle.image} source={require('../../assets/image/backright.png')} />
        <Text style={editProfileStyle.textHeader}>Sửa thông tin</Text>
        <Text/>
      </View>
      <View>
        <View style={editProfileStyle.avatarContainer}>
        <Image style={editProfileStyle.avatar} source={require('../../assets/image/imageprofile.png')} />
        <Image style={editProfileStyle.add} source={require('../../assets/image/addimage.png')} />
        </View>
        <Text style={editProfileStyle.text}>Name</Text>
        <TextInput placeholder='Nhập name...' style={editProfileStyle.input} />
        <TouchableHighlight style={editProfileStyle.button}>
          <Text style={editProfileStyle.buttonText}>Cập nhật</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default EditProfile