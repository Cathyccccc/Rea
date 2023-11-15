import React, { useState, useRef } from 'react'
import { StyleSheet, View, Text, ScrollView, Image, Pressable, Platform, Dimensions, Button } from 'react-native'
import { Video, ResizeMode } from 'expo-av';

const { width } = Dimensions.get('window');

export default function MovieDetail({ route }) {

  const { params } = route;
  const [isFold, setIsFold] = useState(true);
  const [status, setStatus] = React.useState({});
  const video = useRef(null);

  const handlePressWant = () => {
    console.log('change想看')
  }

  const handlePressSee = () => {
    console.log('change看过')
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.detailContainer}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: params.vd,
          }}
          useNativeControls // 使用本地自带的的控制条
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        <View style={styles.movieInfo}>
          <Image source={{ uri: params.movieImg, width: 110, height: 150 }} />
          <View style={styles.info}>
            <Text style={styles.title}>{params.title}</Text>
            <Text style={styles.average}>{params.average}分</Text>
            <Text style={styles.color}>上映日期：{params.year}</Text>
            <Text style={styles.color}>{params.genres}</Text>
            <Text style={styles.color}>导演：{params.directors}</Text>
            <Text numberOfLines={1} ellipsizeMode='tail' style={styles.color}>主演：{params.casts}</Text>
          </View>
        </View>
        {/* 这里图标的状态应根据用户数据进行展示，用户应该有两个字段：想看的和看过的有哪些 */}
        <View style={styles.btnTags}>
          <Pressable style={styles.tag} onPress={handlePressWant}>
            <Image source={require('../assets/likeit_default.png')} style={styles.btnIcon} />
            <Text style={styles.btnTxt}>想看</Text>
          </Pressable>
          <Pressable style={styles.tag} onPress={handlePressSee}>
            <Image source={require('../assets/star_default.png')} style={styles.btnIcon} />
            <Text style={styles.btnTxt}>看过</Text>
          </Pressable>
        </View>
        <Pressable style={styles.desc} onPress={() => setIsFold(!isFold)}>
          <Text style={styles.summary} numberOfLines={isFold ? 5 : undefined}>{params.summary.replace(/<\/?\w+>/g, '')}</Text>
        </Pressable>
      </ScrollView>
      <View style={styles.bottom}>
        <Pressable style={styles.btnBuy}>
          <Text style={styles.btnBuyTxt}>选座购票</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  detailContainer: {
    marginBottom: 70,
  },
  video: {
    height: 210,
    backgroundColor: '#eee',
  },
  movieInfo: {
    flexDirection: 'row',
    margin: 20,
  },
  info: {
    flexShrink: 0.5, // 随便写个数值就可以，让元素不超出屏幕
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
  },
  average: {
    fontSize: 16,
    fontWeight: '500',
  },
  color: {
    color: '#555',
  },
  btnTags: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 8,
  },
  btnIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  btnTxt: {
    fontSize: 15,
    fontWeight: '500',
  },
  desc: {
    width: width,
    paddingHorizontal: 10,
    // height: 50,
    backgroundColor: '#fff'
  },
  summary: {
    lineHeight: 20,
    overflow: 'hidden',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  btnBuy: {
    backgroundColor: '#22b130',
    paddingHorizontal: 70,
    paddingVertical: 12,
    borderRadius: '50%',
    marginTop: 5,
    ...Platform.select({
      ios: {
        marginBottom: 20,
      },
      android: {
        marginBottom: 10,
      }
    })
  },
  btnBuyTxt: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
})
