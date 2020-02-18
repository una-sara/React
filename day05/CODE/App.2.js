import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class App extends React.Component {
  render(){    
    return (        
      <View style={{backgroundColor:'#dfd',padding:0, flexDirection: 'column', alignItems:'stretch', height:200, justifyContent:'space-evenly'}}>
        <Text style={{backgroundColor:'#fdd',width:200,flex:1}}>
          淡红色背景的文本
        </Text>
        <Text style={{backgroundColor:'#ddf',width:400,flex:1}}>
          淡蓝色背景的文本
        </Text>
        <Text style={{backgroundColor:'#ffd',width:600,flex:2}}>
          橙色色背景的文本
        </Text>
      </View>
    )
  }
}
