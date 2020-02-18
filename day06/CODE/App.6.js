import React from 'react'
import {View,Text,Button,TouchableOpacity} from 'react-native'

export default class App extends React.Component{
  render(){
    return (
      <View>
        <Text style={{fontSize:30}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eum voluptates neque temporibus fugit reprehenderit vel error, itaque amet repellendus cupiditate maiores animi. Aspernatur perferendis cupiditate, aperiam temporibus excepturi non!
        </Text>
        <Button style={{fontSize:30}} 
          title="点击以提交数据"/>
        
        {/* 使用触摸反馈组件 */}
        <TouchableOpacity>
          <Text style={{fontSize:30}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eum voluptates neque temporibus fugit reprehenderit vel error, itaque amet repellendus cupiditate maiores animi. Aspernatur perferendis cupiditate, aperiam temporibus excepturi non!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Button style={{fontSize:30}} 
          title="点击以提交数据"/>
        </TouchableOpacity>
      </View>
    )
  }
}