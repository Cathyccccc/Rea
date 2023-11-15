import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelect } from '../redux/langSlice';
import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export default function Language() {
  const {selectIndex, languages} = useSelector(state => state.lang);
  const dispatch = useDispatch();
  const handlePress = (index) => {
    // 将数据设置到仓库中
    dispatch(setSelect(index))
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroller}>
        {languages.map((item, index) => {
          return <Pressable key={index} onPress={() => handlePress(index)}>
            <View style={styles.scrollItem}>
              <Text style={styles.lang}>{item.text}</Text>
              {selectIndex === index && <AntDesign name="checkcircle" size={20} color="green" />}
            </View>
          </Pressable>
        })}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroller: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  scrollItem: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  lang: {
    lineHeight: 50,
    fontSize: 16,
  }
});