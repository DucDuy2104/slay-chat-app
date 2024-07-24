import { View, Text, Image, TouchableHighlight, TextInput } from 'react-native'
import React from 'react'
import forgotPassStyle  from './style'
const ForgotPass = () => {
  return (
    <View style={forgotPassStyle.container}>
    <View style={forgotPassStyle.header}>
      <Image style={forgotPassStyle.image} source={require('../../assets/image/backright.png')} />
      <Text style={forgotPassStyle.textHeader}>Sửa thông tin</Text>
      <Text/>
    </View>
    <View>
      <Text style={forgotPassStyle.text}>Nhập mật khẩu</Text>
      <TextInput placeholder='Nhập mật khẩu cũ' style={forgotPassStyle.input} />
      <Text style={forgotPassStyle.text}>Nhập mật khẩu</Text>
      <TextInput placeholder='Nhập mật khẩu mới' style={forgotPassStyle.input} />
      <Text style={forgotPassStyle.text}>Xác nhận mật khẩu</Text>
      <TextInput placeholder='Nhập mật khẩu' style={forgotPassStyle.input} />
      <TouchableHighlight style={forgotPassStyle.button}>
        <Text style={forgotPassStyle.buttonText}>Cập nhật</Text>
      </TouchableHighlight>
    </View>
  </View>
  )
}

export default ForgotPass