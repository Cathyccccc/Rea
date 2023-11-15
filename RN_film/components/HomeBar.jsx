import React from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import SearchBox from './SearchBox'
import ToggleSelect from './ToggleSelect'
// import { SafeAreaView } from 'react-native'

export default function HomeBar({navigation, route}) {
  
  const {params} = route;

  const Header = () => {
    return (
      <View style={styles.header}>
        <ToggleSelect city={params || '北京'} navigation={navigation} />
        <SearchBox navigation={navigation} />
      </View>
    )
  }

  // 用这个方式 header一直在闪
  // const Component = Platform.select({
  //   ios: () => (
  //     <SafeAreaView>
  //       <Header />
  //     </SafeAreaView>
  //   ),
  //   android: () => <Header />
  // });

  return <Header />;
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 52,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
    ...Platform.select({
      android: {
        marginTop: 20,
      },
      ios: {
        marginTop: 50,
      }
    }),

  }
})
