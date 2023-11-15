import React from 'react'
import { StyleSheet, Pressable, Text, Image } from 'react-native'
import icon_search from '../assets/icon_search.png'

export default function SearchBox({navigation}) {

  const handlePress = () => {
    navigation.navigate('search');
  }
  
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image source={icon_search} style={styles.iconSearch} />
      <Text style={styles.text}>搜影片、影院、演出、视频、资讯</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 5,
    padding: 10,
    height: 45,
    alignItems: 'center',
  },
  iconSearch: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  text: {
    color: '#888',
  }
})