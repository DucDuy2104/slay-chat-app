import { View, Text, Image, TouchableHighlight, TextInput, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import forgotPassStyle from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import AxiosInstance from '../../helper/AxiosInstance'
import { updateUser } from '../../redux/Reducer'
import colors from '../../assets/color/colors'
const ForgotPass = ({ navigation }) => {
  const appState = useSelector((state) => state.app)
  const [oldPassword, setOldPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()
  const onGoBack = () => {
    navigation.goBack()
  }

  const reset = () => {
    setOldPassword("")
    setNewPassword("")
    setConfirmPassword("")
  }

  const updatePassword = async () => {
    try {
      if (oldPassword === "") {
        Alert.alert('Thông báo', 'Mật khẩu phải có ít nhất 6 ký tự')
        return
      } else if (newPassword.length < 6) {
        Alert.alert('Thông báo', 'Mật khẩu phải ít nhất 6 kí tự!')
        return
      } else if(newPassword !==  confirmPassword) {
        Alert.alert('Thông báo', 'Mật khẩu xác nhận không đúng!')
        return
      } else {
        setIsLoading(true)
        const response = await AxiosInstance().post('/user/update-password', { oldPassword, newPassword, userId: appState.user?._id })
        if (response.status) {
          dispatch(updateUser(response.data))
          Alert.alert('Thông báo', 'Mật khẩu đã được cập nhật thành công!')
          reset()
          setIsLoading(false)
        } else {
          Alert.alert('Thông báo', response.message)
          setIsLoading(false)
        }
      }
    } catch (error) {
      console.log(error.message)
      Alert.alert('Thông báo', 'Có lỗi xảy ra, vui lòng thử lại!')
      setIsLoading(false)

    }
  }
  return (
    <View style={forgotPassStyle.container}>
      <View style={forgotPassStyle.header}>
        <TouchableOpacity onPress={onGoBack}>
          <Image style={forgotPassStyle.image} source={require('../../assets/image/backright.png')} />
        </TouchableOpacity>
        <Text style={forgotPassStyle.textHeader}>Sửa thông tin</Text>
        <Text />
      </View>
      <View>
        <Text style={forgotPassStyle.text}>Nhập mật khẩu</Text>
        <TextInput placeholderTextColor={colors.gray} value={oldPassword} onChangeText={(txt) => setOldPassword(txt)} placeholder='Nhập mật khẩu cũ' style={forgotPassStyle.input} />
        <Text style={forgotPassStyle.text}>Nhập mật khẩu</Text>
        <TextInput placeholderTextColor={colors.gray} value={newPassword} onChangeText={(txt) => setNewPassword(txt)} placeholder='Nhập mật khẩu mới' style={forgotPassStyle.input} />
        <Text style={forgotPassStyle.text}>Xác nhận mật khẩu</Text>
        <TextInput placeholderTextColor={colors.gray} value={confirmPassword} onChangeText={(txt) => setConfirmPassword(txt)} placeholder='Nhập mật khẩu' style={forgotPassStyle.input} />
        <TouchableOpacity onPress={updatePassword}  style={forgotPassStyle.button}>
          <Text style={forgotPassStyle.buttonText}>Cập nhật</Text>
        </TouchableOpacity>
        <ActivityIndicator style={!isLoading && forgotPassStyle.hide}/>
      </View>
    </View>
  )
}

export default ForgotPass