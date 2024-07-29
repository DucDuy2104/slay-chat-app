import { View, Text, TouchableOpacity, Image, TextInput, Button } from 'react-native'
import React, { useMemo, useState } from 'react'
import { RadioGroup } from 'react-native-radio-buttons-group';
import feedbackStyle from './style';
import { TabActions } from '@react-navigation/native';

const Index = () => {
  const [text, setText] = useState('');

  const handleChangeText = (newText) => {
    setText(newText);
  }
  const radioButtons = useMemo(() => ([
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'App bị chậm',
      value: 'appbicham'
    },
    {
      id: '2',
      label: 'Chức năng phức tạp',
      value: 'chucnangphuctap'
    },
    {
      id: '3',
      label: 'Gửi ảnh bị lỗi',
      value: 'guianhbiloi'
    },
    {
      id: '4',
      label: 'Khác',
      value: 'khac'
    }
  ]), []);

  const [selectedId, setSelectedId] = useState();
  return (
    <View style={feedbackStyle.container}>
      <View style={feedbackStyle.feedbackcontainer}>
        <TouchableOpacity style={feedbackStyle.button} onPress={() => alert('Gửi phản hồi')}>
          <Image
            style={feedbackStyle.icon}
            source={require('../../assets/image/out.png')}
          />
          <Text style={feedbackStyle.buttonText}>Gửi phản hồi</Text>
        </TouchableOpacity>
      </View>
      <View>
        <RadioGroup labelStyle={feedbackStyle.radio}
        containerStyle={{alignItems:'flex-start'}}
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId} />
      </View>

      <View style={feedbackStyle.phanhoi}>
        <Text>
          Ghi chú phản hồi
        </Text>
      </View>

      <View style={feedbackStyle.input}>
        <TextInput
          style={{ height: 80, width: 390, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={handleChangeText}
          value={text}
        />
      </View>
      <TouchableOpacity style={feedbackStyle.gui}>
        <Text style={feedbackStyle.chugui}>
          Gửi
        </Text>
      </TouchableOpacity>
    </View>
  )

}
export default Index