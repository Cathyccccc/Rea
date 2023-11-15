import React from 'react'
import { StyleSheet, Pressable, Text, Image } from 'react-native';
import arrow_down from '../assets/arrow_down.png';

export default function ToggleSelect({ city, navigation }) {

  const handlePress = () => {
    // 跳转到城市列表页
    navigation.navigate('city')
  }

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Text style={styles.city}>{city}</Text>
      <Image source={arrow_down} style={styles.arrow} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  city: {
    marginRight: 5,
    fontSize: 16,
  },
  arrow: {
    width: 10,
    height: 8,
  }
});
