import React from 'react'
import {Text,View,StyleSheet, ScrollView} from 'react-native'


export default class App extends React.Component {
  constructor(){
    super()
    this.state = { count: 0 }
  }
  doPress = ()=>{
    console.log('文本被点击了一次')
    //控制台输出默认是在手机内部，
    //可以“远程调试”输出到一个浏览器控制台
    let count = this.state.count
    count++
    this.setState({ count })
  }
  render(){          
    return (          
      <View>
        <Text onPress={ this.doPress }>
          您已经按压此段文本的次数：{'\n'}
          {this.state.count}
        </Text>

        <Text style={{fontSize:24}} ellipsizeMode='middle'  numberOfLines={2}>
          1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores cum alias numquam deleniti, vero perspiciatis commodi, quibusdam fugit sint ipsum maiores eveniet dicta, fuga quisquam adipisci harum! Modi, voluptatem mollitia. 
          2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores cum alias numquam deleniti, vero perspiciatis commodi, quibusdam fugit sint ipsum maiores eveniet dicta, fuga quisquam adipisci harum! Modi, voluptatem mollitia. 
        </Text>
      </View>
    )
  }
}

