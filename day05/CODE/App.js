import React from 'react'
import {Text,View,StyleSheet, ScrollView,Button,TextInput} from 'react-native'

export default class App extends React.Component {
  constructor(){
    super()
    this.state = { uname: 'dangdang' }
  }

  doChange = (userInput)=>{
    console.log(userInput)
    this.setState({uname: userInput})
  }
  render(){          
    return (          
      <View>
        <TextInput />
        
        <TextInput placeholder="请输入登录名"/>
        
        <TextInput style={{borderBottomWidth:1}} placeholder="请输入登录密码" secureTextEntry={true}/>

        <TextInput style={{borderWidth:1}} multiline={true} numberOfLines={3}/>

        {/* 输入框的双向数据绑定 */}
        <TextInput onChangeText={this.doChange} value={this.state.uname}/>
      </View>
    )
  }
}

