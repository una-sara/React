import React from 'react'
import {FlatList, View,Text,Button,TouchableOpacity} from 'react-native'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      newsList: ['新闻1', '新闻2', '新闻3', '新闻4']
    }
  }
  _renderItem = (obj)=>{    //如何渲染一个列表项
    console.log('正在渲染一个列表项')
    //obj形如：{ item:'新闻1', index:0 }
    return (
      <TouchableOpacity>
        <Text>{obj.index+1} - {obj.item}</Text>
      </TouchableOpacity>
    )
  }
  _keyExtractor=(item, index)=>{  //返回每个列表项的key
    console.log('正在提取一个列表项的key')
    return String(index)  //每个列表项的key必须是string
  }
  render(){
    return (
      <View>
        <FlatList data={this.state.newsList}  renderItem={this._renderItem} keyExtractor={this._keyExtractor}/>
      </View>
    )
  }
}