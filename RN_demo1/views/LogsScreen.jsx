import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteHistory, clearHistory } from '../redux/historySlice';
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function LogsScreen() {

  const { historyList } = useSelector(state => state.history);
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(clearHistory())
  }
  const handleDelete = (index) => {
    dispatch(deleteHistory(index));
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.font16}>翻译历史</Text>
        <Pressable style={styles.clear} onPress={handlePress}>
          <Text style={styles.font16}>清除历史记录</Text>
          <AntDesign name="delete" size={20} color="#555" />
        </Pressable>
      </View>
      <ScrollView>
        {
          historyList.length > 0 && historyList.map((item, index) => {
            return (
              <View key={index} style={styles.historyItem}>
                <View style={styles.history}>
                  <Text style={styles.inputVal}>{item.key}</Text>
                  <Text style={styles.translation}>{item.value}</Text>
                </View>
                <Pressable onPress={() => handleDelete(index)}>
                  <AntDesign name="closecircle" size={20} color="#eee" />
                </Pressable>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#F5F5F5',
    height: 50,
    alignItems: 'center'
  },
  clear: {
    flexDirection: 'row',
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  inputVal: {
    fontSize: 16,
  },
  translation: {
    color: '#888',
  }
});
