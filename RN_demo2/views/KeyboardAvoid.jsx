import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native';

export default function KeyboardAvoid({navigation}) {
  
  // React.useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', (e) => {
  //     // Prevent default behavior
  //     e.preventDefault(); // 阻止tab切换页面

  //     alert('Default behavior prevented');
  //     // Do something manually
  //     // ...
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  const handleBlur = () => {
    console.log('失焦');
  }

  const handleSubmit = (e) => {
    console.log('提交', e)
  }

  return (
    <View style={styles.container}>
      <Text>KeyboardAvoidingView组件(防止键盘遮挡)</Text>
      <TextInput
        multiline
        // numberOfLines={10}
        style={styles.input}
        returnKeyLabel='搜索'
        returnKeyType='done'
        onBlur={handleBlur}
        onSubmitEditing={handleSubmit}
      />
      <Button title='跳转到refresh页面' onPress={() => navigation.jumpTo('refresh', { owner: 'admin' })} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
  },
  input: {
    flex: 0.3,
    backgroundColor: '#F5F5F5',
  }
});