import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Image, Dimensions, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';

import KeyboardAvoid from './views/KeyboardAvoid';
import RefreshList from './views/RefreshList';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const { width } = Dimensions.get('window');

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Tab.Navigator
        screenOptions={({ route }) => {
          return {
            tabBarIcon: ({ color, focused, size }) => {
              let icon;
              // focused一般用于使用Image设置图标时，进行判断
              if (route.name === 'keyboard') {
                icon = <FontAwesome name="keyboard-o" size={size} color={color} />
              } else if (route.name === 'refresh') {
                icon = <FontAwesome name="refresh" size={size} color={color} />
              }
              return icon
            }
          }
        }}
      >
        <Tab.Screen
          name='keyboard'
          component={KeyboardAvoid}
          options={{
            // title: '1' // 页面上方标题(默认为name的值，没有设置tabBarLabel时和title一致)
            tabBarLabel: '键盘',
            tabBarShowLabel: true, // 是否展示tab的label文字，false时只展示tab的图标
            tabBarLabelPosition: 'below-icon', // tab的文字在图标下方还是右边，ipad一般设为beside-icon
            tabBarLabelStyle: { // 设置tab的label文字样式
              // color: '#f00',
              // backgroundColor: '#000'
            },
            // tabBarIcon: () => <Text>Icon</Text>, // 设置tab的图标
            // tabBarIconStyle: {
            //   color: '#1890FF'
            // },
            tabBarBadge: 1, // 设置徽标
            // tabBarBadgeStyle: { // 设置徽标样式
            //   backgroundColor: '#1890FF'
            // },
            // tabBarAccessibilityLabel: '', // 不知道干啥的？？？
            tabBarButton: (props) => <TouchableOpacity {...props} />, // 自定义tabBar
            // tabBarActiveTintColor: '#f00', // tabBar选中时的颜色
            // tabBarInactiveTintColor: '#00f', // tabBar未选中时的颜色
            // tabBarActiveBackgroundColor: '#f00', // tabBar选中时的背景色
            // tabBarInactiveBackgroundColor: '#00f', // tabBar未选中时的背景色
            tabBarHideOnKeyboard: false, // tabBar在键盘展示时隐藏(实际上keyboard会遮住tabBar，所以隐藏时页面上其他内容的高度、位置可能会发生变化)
            // tabBarItemStyle: { // 为每个tabBar单独设置样式
            //   borderColor: '#f00',
            //   borderWidth: 1,
            // },
            // tabBarStyle: { // 为tabBar整体设置样式
            //   backgroundColor: '#f00',
            //   height: 100,
            // },
            // tabBarBackground: () => { // 设置tabBar整体背景
            //   return <Image source={require('./assets/adaptive-icon.png')} style={{width, height: 80}} />
            // },
            lazy: true, // 当前屏是否懒加载（默认true）
            unmountOnBlur: false, // 离开当前屏时是否unmount，会丢失navigation history，比如navigate.to时(默认false)
            // freezeOnBlur: false, // 是否阻止非活动屏重新渲染（默认false）
            header: ({navigation, route, options, layout}) => {
              // console.log(navigation, route, options, layout)
              return (
                <SafeAreaView
                  style={{
                    // height: 95,
                    // borderBottomWidth: 0.5,
                    // borderBottomColor: '#1890FF',
                    backgroundColor: 'orange',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{fontSize: 16}}>键盘</Text>
                </SafeAreaView>
              )
            },
            // headerStyle: {
            //   height: 95,
            // },
            // headerShown: false, // 当前页是否显示header
          }}
        />
        <Tab.Screen name='refresh' component={RefreshList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
