import React from 'react'
import {Text,View,StyleSheet, ScrollView,Button} from 'react-native'

export default class App extends React.Component {
  doPress = ()=>{
    alert('您即将退出！')
  }
  render(){          
    return (          
      <View>
        {/* <Button>登录</Button> */}
        <Button title="登录" />
        <Button title="注册" color="#e83" />
        <Button title="退出" onPress={this.doPress} disabled={false} />
      </View>
    )
  }
}

