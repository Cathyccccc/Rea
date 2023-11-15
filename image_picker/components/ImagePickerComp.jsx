import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';

export default function ImagePickerComp() {

  const [imgUrl, setImgUrl] = useState();
  const [imgs, setImgs] = useState();

  // 选取单张图片
  const pickImage = async () => {
    // 获取相册权限（一般一个应用只弹一次，拒绝的时候如何再次弹出？？？）
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      alert('没有权限，请在设置中设置照片权限')
      return
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      cameraType: ImagePicker.CameraType.back,
      quality: 1,
    })
    if (!result.canceled) {
      setImgUrl(result.assets[0].uri);
    }
  }
  // 选取多张图片
  const pickMultipleImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true, // 允许同时选取多张图片
      selectionLimit: 5, // 选取多张图片时图片最大数量
      orderedSelection: true // 选择时图片标号，并按标号顺序展示图片
    })
    if (!result.canceled) {
      setImgs(result.assets.map(item => item.uri));
    }
  }

  // 分享图片
  const shareImage = async() => {
    const canShare = await Sharing.isAvailableAsync();
    if (!canShare) {
      alert('设备不支持分享功能')
      return;
    }
    Sharing.shareAsync(imgUrl);
  }

  return (
    <View style={styles.container}>
      <Text>imagePicker</Text>
      {imgUrl && <Image source={{ url: imgUrl, width: 200, height: 200 }} />}
      <View style={styles.btnContainer}>
        <Button title='选取图片' onPress={pickImage} />
        <Button title='分享图片' onPress={shareImage} disabled={!imgUrl} />
      </View>
      <View style={styles.imgContainer}>
        {imgs && imgs.map(item => (
          <Image source={{ uri: item, width: 100, height: 100 }} key={item} />
        ))}
      </View>
      <Button title='选取多个图片' onPress={pickMultipleImages} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  imgContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
