import { StatusBar } from 'expo-status-bar';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import HomeScreen from './views/HomeScreen';
import LogsScreen from './views/LogsScreen';
import Language from './views/Language';

import { store } from './redux/store';
import { Provider } from 'react-redux';

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='home' screenOptions={({ route }) => {
          return {
            tabBarActiveTintColor: '#1A1A1A'
          }
        }}>
          <Tab.Screen name='home' options={{
            tabBarLabel: '主页',
            tabBarIcon: ({ color, focused, size }) => (
              focused ? <Image source={require('./assets/icon1Sel.png')} style={{ width: 30, height: 30 }} />
                : <Image source={require('./assets/icon1.png')} style={{ width: 30, height: 30 }} />
            ),
          }}>
            {() => (
              <TopTab.Navigator>
                <TopTab.Screen name='翻译' component={HomeScreen} />
                <TopTab.Screen name='语言' component={Language} />
              </TopTab.Navigator>
            )}
          </Tab.Screen>
          <Tab.Screen name='history' component={LogsScreen} options={({ route }) => {
            return {
              tabBarLabel: '历史',
              tabBarIcon: ({ focused }) => {
                // color, focused, size
                return focused ? <Image source={require('./assets/icon2Sel.png')} style={{ width: 30, height: 30 }} />
                  : <Image source={require('./assets/icon2.png')} style={{ width: 30, height: 30 }} />
              }
            }

          }} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>
  );
}


