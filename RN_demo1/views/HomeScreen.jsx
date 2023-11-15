import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHistory } from '../redux/historySlice';
import { StyleSheet, View, Text, TextInput, Pressable, Keyboard } from 'react-native';
import { translateApi } from '../api/fanyi';

export default function HomeScreen() {
  const [inputValue, setInputValue] = useState('');
  const [translation, setTranslation] = useState();
  const { selectIndex, languages } = useSelector(state => state.lang);
  const dispatch = useDispatch();
  const handlePress = () => {
    Keyboard.dismiss(); // 收回键盘，TextInput失焦
    if (inputValue === '') {
      return;
    }
    translateApi(inputValue, 'auto', languages[selectIndex].lang).then((res) => {
      setTranslation(res);
      dispatch(setHistory({ key: inputValue, value: res }));
    }).catch(err => console.log(err))
  }

  const handleChangeText = (text) => {
    setInputValue(text);
    if (text === '') {
      setTranslation();
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.langContainer}>
        <Text>翻译为</Text>
        <Text style={styles.lang}>{languages[selectIndex].text}</Text>
      </View>
      <TextInput
        value={inputValue}
        multiline
        numberOfLines={10}
        placeholder='请输入...'
        style={styles.input}
        onChangeText={handleChangeText}
      />
      <Pressable style={styles.translation} onPress={handlePress}>
        <Text style={styles.translationTitle}>译文：</Text>
        <Text style={styles.translationTxt}>{translation}</Text>
      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    paddingBottom: 10,
    flex: 0.4,
    fontSize: 16, // 设置的时placeholder字体大小
  },
  translation: {
    flex: 0.5,
    backgroundColor: '#fff',
    padding: 10,
  },
  translationTitle: {
    lineHeight: 24,
    color: '#888',
  },
  translationTxt: {
    fontSize: 16,
  },
  langContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    paddingLeft: 10,
  },
  lang: {
    fontWeight: 'bold',
  }
});