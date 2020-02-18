import React from 'react'

//ReactNavigation提供了两个核心功能函数
import {createAppContainer, createStackNavigator} from 'react-navigation'
import LoginScreen from './src/components/LoginScreen';
import MainScreen from './src/components/MainScreen';

//创建路由词典——称为“栈式导航器”
let routes = createStackNavigator({
  'login': LoginScreen,  //排名第一的地址就是首屏内容
  'main': MainScreen,
})

//创建整个应用的根组件，注册路由词典
export default createAppContainer(routes)