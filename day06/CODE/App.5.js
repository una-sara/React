import React from 'react'
import {View,Switch} from 'react-native'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      isOnline: true
    }
  }
  doChange = (val)=>{
    this.setState({ isOnline: val })
  }
  render(){
    return (
      <View>
        {/* 使用开关组件 */}
        <Switch onValueChange={this.doChange} value={this.state.isOnline}/>
      </View>
    )
  }
}