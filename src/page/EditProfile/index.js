import { View, Text, Image, TouchableHighlight, TouchableOpacity, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import editProfileStyle from './style'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { launchImageLibrary } from 'react-native-image-picker'
import AxiosInstance from '../../helper/AxiosInstance'
import { updateUser } from '../../redux/Reducer'
const EditProfile = ({ navigation }) => {
  const appState = useSelector((state) => state.app)
  const [name, setName] = useState(appState.user?.userName)
  const [avatar, setAvatar] = useState(appState.user?.avatar)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch()

  const onGoBack = () => {
    navigation.goBack()
  }

  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('Người dùng hủy chọn ảnh');
      } else if (response.error) {
        console.log('Lỗi ImagePicker: ', response.error);
      } else if (response.customButton) {
        console.log('Người dùng nhấn nút tùy chỉnh: ', response.customButton);
      } else {
        uploadImageToCloudinary(response);
      }
    });
  };

  const uploadImageToCloudinary = async (response) => {
    try {
      console.log('Phản hồi ảnh: ', response);
      setIsLoading(true);

      const data = new FormData();
      data.append('file', {
        uri: response.assets[0].uri,
        type: response.assets[0].type,
        name: response.assets[0].fileName,
        fileName: response.assets[0].fileName
      });
      data.append('upload_preset', 'ml_default');

      const result = await axios({
        url: 'https://api.cloudinary.com/v1_1/dapqiosjm/image/upload',
        method: 'POST',
        data: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          'Authorization': ' '
        }
      });

      setIsLoading(false);
      console.log("Kết quả tải lên:", result.data);
      setAvatar(result.data.secure_url);
    } catch (error) {
      setIsLoading(false);
      console.error("Lỗi khi tải ảnh lên:", error);
    }
  };


  useEffect(() => {
    setName(appState.user?.userName)
    setAvatar(appState.user?.avatar)
  }, [appState.user])

  const onUpdateProfile = async () => {
    try {
      if (name.trim() === '') {
        Alert.alert('Error', "Name can't be empty")
        setIsLoading(false)
        return
      }
      setIsLoading(true)
      const response = await AxiosInstance().post('/user/update-profile', {
        userId: appState.user._id,
        userName: name,
        avatar: avatar
      })
      if (response.status) {
        dispatch(updateUser(response.data))
        setIsLoading(false)
        Alert.alert('Success', "Update profile successfully")
      } else {
        console.log('Update profile failed')
        setIsLoading(false)
        Alert.alert('Error', "Update profile failed")
      }
    } catch (error) {
      console.log('Axios: ', error)
      setIsLoading(false)
      Alert.alert('Error', "Update profile failed")

    }
  }


  return (
    <View style={editProfileStyle.container}>
      <View style={editProfileStyle.header}>
        <TouchableOpacity onPress={onGoBack}>
          <Image style={editProfileStyle.image} source={require('../../assets/image/backright.png')} />
        </TouchableOpacity>
        <Text style={editProfileStyle.textHeader}>Sửa thông tin</Text>
        <Text />
      </View>
      <View>
        <TouchableOpacity onPress={pickImage} style={editProfileStyle.avatarContainer}>
          <Image style={editProfileStyle.avatar} source={appState.user? { uri: avatar } : require('../../assets/image/avatar.jpg')} />
          <Image style={editProfileStyle.add} source={require('../../assets/image/addimage.png')} />
        </TouchableOpacity>
        <Text style={editProfileStyle.text}>Name</Text>
        <TextInput value={name} onChangeText={(txt) => setName(txt)} placeholder='Nhập name...' style={editProfileStyle.input} />
        <TouchableOpacity onPress={onUpdateProfile} style={editProfileStyle.button}>
          <Text style={editProfileStyle.buttonText}>Cập nhật</Text>
        </TouchableOpacity>
      </View>
      <View style={[!isLoading && editProfileStyle.hide]}>
        <ActivityIndicator />
      </View>
    </View>
  )
}

export default EditProfile