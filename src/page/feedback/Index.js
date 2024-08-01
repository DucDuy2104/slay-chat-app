import { View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator, Alert } from 'react-native';
import React, { useMemo, useState } from 'react';
import { RadioGroup } from 'react-native-radio-buttons-group';
import feedbackStyle from './style';
import AxiosInstance from '../../helper/AxiosInstance';
import { useSelector } from 'react-redux';

const FeedBack = ({navigation}) => {
  const [text, setText] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [selectedLabel, setSelectedLabel] = useState('');
  const appState = useSelector((state) => state.app)
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeText = (newText) => {
    setText(newText);
  };

  const handleRadioButtonPress = (value) => {
    console.log('Radio button selected:', value);
    setSelectedId(value);
    const selectedButton = radioButtons.find(button => button.id === value);
    if (selectedButton) {
      setSelectedLabel(selectedButton.label);
    }
  };

  const radioButtons = useMemo(() => ([
    {
      id: '1',
      value: "error",
      label: "Lỗi app"
    },
    {
      id: '2',
      value: "good",
      label: "App tốt"
    },
    {
      id: '3',
      value: "function",
      label: "Thêm chức năng"
    }
  ]), []);


  const onSendFeedBack = async () => {
    try {
      if (!text || !selectedId) {
        Alert.alert('Thông báo', 'Vui lòng nhập phản hồi và chọn loại phản hồi!')
        return
      }
      setIsLoading(true)

      console.log('feedback created: ......', {
        sender: appState.user?._id,
        content: text,
        label: selectedLabel
      })
      const response = await AxiosInstance().post('/feed-back/create-feed-back', {
        sender: appState.user?._id,
        content: text,
        label: selectedLabel
      })
      console.log('feedback created: ......', {
        sender: appState.user?._id,
        content: text,
        label: selectedLabel
      })
      if (response.status) {
        Alert.alert('Thông báo', 'Gửi phản hồi thành công!')
        setText('')
        setSelectedId(null)
        setSelectedLabel('')
        setIsLoading(false)
      } else {
        Alert.alert('Thông báo', 'Gửi phản hồi thất bại!')
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Thông báo', 'Gửi phản hồi thất bại!')
      setIsLoading(false)
    }
  }

  const goBack = () => {
    navigation.goBack()
  }

  return (
    <View style={feedbackStyle.container}>
      <View style={feedbackStyle.feedbackcontainer}>
        <View style={feedbackStyle.button} onPress={() => Alert.alert('Thông báo', 'Gửi phản hồi')}>
          <TouchableOpacity onPress={goBack}>
            <Image
              style={feedbackStyle.icon}
              source={require('../../assets/image/out.png')}
            />
          </TouchableOpacity>
          <Text style={feedbackStyle.buttonText}>Gửi phản hồi</Text>
        </View>
      </View>
      <View>
        <RadioGroup
          labelStyle={feedbackStyle.radio}
          containerStyle={{ alignItems: 'flex-start' }}
          radioButtons={radioButtons}
          onPress={handleRadioButtonPress} // Đặt hàm xử lý vào đây
          selectedId={selectedId}
        />
      </View>

      <View style={feedbackStyle.phanhoi}>
        <Text>
          Ghi chú phản hồi
        </Text>
      </View>

      <View style={feedbackStyle.input}>
        <TextInput
          style={{ height: 80, width: '100%', borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={handleChangeText}
          value={text}
          multiline
        />
      </View>

      {selectedLabel && (
        <View style={feedbackStyle.selectedLabelContainer}>
          <Text style={feedbackStyle.selectedLabel}>
            {`Radio button selected: ${selectedLabel}`}
          </Text>
        </View>
      )}

      <TouchableOpacity onPress={onSendFeedBack} style={feedbackStyle.gui} >
        <Text style={feedbackStyle.chugui}>
          Gửi
        </Text>
      </TouchableOpacity>
      <ActivityIndicator style={!isLoading && feedbackStyle.hide} />
    </View>
  );
};

export default FeedBack;
