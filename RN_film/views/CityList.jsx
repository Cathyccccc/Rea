import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, SectionList, Pressable } from 'react-native'
import { getCities } from '../api'
import Loading from '../components/Loading'

export default function CityList({ navigation }) {

  const [cities, setCities] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getCities();
      setCities(result);
    }
    fetchData();
  }, []);

  const handlePress = (city) => {
    navigation.navigate('home', city);
    // 更新首页数据
  }

  return cities.length > 0 ?
    <SectionList
      sections={cities}
      renderItem={({ item }) => {
        const city = item.name;
        return (
          <Pressable onPress={() => handlePress(city)} style={styles.sectionItem}>
            <Text>{item.name}</Text>
          </Pressable>
        )
      }}
      renderSectionHeader={({ section }) => {
        return (
          <Text style={styles.sectionTitle}>{section.title}</Text>
        )
      }}
      style={styles.container}
    />
    :
    <Loading />

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    backgroundColor: '#F5F5F5',
    height: 40,
    lineHeight: 40,
    paddingLeft: 6,
  },
  sectionItem: {
    borderBottomColor: '#F5F5F5',
    borderBottomWidth: 0.5,
    height: 35,
    justifyContent: 'center',
    paddingLeft: 10,
  }
})


