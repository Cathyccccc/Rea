import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Pressable } from 'react-native'
import arrow_right from '../assets/ic_arrow_green_right.png'
import MovieListItem from './MovieListItem'

export default function MovieList({title, moviesData, navigation}) {

  const handlePress = () => {
    // 跳转到更多页面（电影&影院）
    navigation.navigate('more');
  }

  return (
    <View style={styles.container}>
      {/* 上面 */}
      <View style={styles.listHeader}>
        <Text style={styles.title}>{title}</Text>
        <Pressable style={styles.more} onPress={handlePress}>
          <Text style={styles.moreTxt}>查看更多</Text>
          <Image source={arrow_right} style={styles.arrowRight} />
        </Pressable>
      </View>
      {/* 下面 */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          moviesData.map((item) => <MovieListItem key={item.id} movie={item} navigation={navigation} />)
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 10,
    marginBottom: 18,
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 16,
    color: '#555',
  },
  more: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreTxt: {
    color: '#00b51d',
  },
  arrowRight: {
    width: 6,
    height: 12,
    marginLeft: 3,
  }
})
