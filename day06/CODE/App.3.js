import React from 'react'
import {View,Image,ActivityIndicator} from 'react-native'

export default class App extends React.Component{
  constructor(){
    super()
  }
  render(){ 
    return (
      <View>
        {/* 活动指示器 */}
        <ActivityIndicator />
        <ActivityIndicator size="small"/>
        <ActivityIndicator size="large"/>
        <ActivityIndicator color="#f00"/>
        <ActivityIndicator color="#0f0"/>
      </View>

    )
  }
}