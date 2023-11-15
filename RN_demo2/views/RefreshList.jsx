import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function RefreshList({navigation, route}) {
  // console.log(route.params) // {owner: 'admin'}
  return (
    <View style={styles.container}>
      <Text>Refresh刷新列表</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
