import React from 'react'
import { StyleSheet, View, Text, Image, Pressable } from 'react-native'

export default function MovieListItem({movie, navigation}) {

  const { title, average, movieImg } = movie;

  const handlePress = () => {
    navigation.navigate('movieDetail', movie)
  }

  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image source={{ uri: movieImg, width: 110, height: 150 }} style={styles.image} />
      <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
      {
        average > 0 ?
          <Text style={styles.average}>电影评分：<Text style={styles.score}>{average}</Text>分</Text>
          :
          <Text style={styles.average}>暂无评分</Text>
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 200,
    margin: 5,
  },
  image: {
    borderRadius: 5,
    marginBottom: 5,
  },
  title: {
    fontWeight: '500',
    overflow: 'hidden',
    flexWrap: 'nowrap',
    lineHeight: 22,
  },
  average: {
    fontSize: 13,
    lineHeight: 22,
    color: 'orange',
  },
  score: {
    fontSize: 15,
    fontWeight: '500',
    fontStyle: 'italic', // 斜体
  }
})