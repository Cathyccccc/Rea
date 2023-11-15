import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './views/HomeScreen';
import HomeBar from './components/HomeBar';
import CityList from './views/CityList';
import SearchScreen from './views/SearchScreen';
import MoreScreen from './views/MoreScreen';
import MovieDetail from './views/MovieDetail';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='home'
          component={HomeScreen}
          options={{
            header: ({ navigation, route }) => <HomeBar navigation={navigation} route={route} />,
          }}
        />
        <Stack.Screen name='search' component={SearchScreen} />
        <Stack.Screen
          name='city'
          component={CityList}
          options={{
            title: '选择城市',
            headerTintColor: '#000', // 修改返回箭头的颜色为黑色
          }}
        />
        <Stack.Screen
          name='movieDetail'
          component={MovieDetail}
          options={{
            title: '电影详情',
            headerTintColor: '#000', // 修改返回箭头的颜色为黑色
          }}
        />
        <Stack.Screen
          name='more'
          component={MoreScreen}
          // options={{
          //   header: () => <Text>More-Header</Text>
          // }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
