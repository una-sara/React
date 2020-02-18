import React from 'react'
import {FlatList, View, Text, Button, Image, TouchableOpacity, ActivityIndicator} from 'react-native'

export default class App extends React.Component{
  constructor(){
    super()
    this.state = {
      laptopList: [
        {lid:100, title:'笔记本标题0', pic: require('./src/assets/0.jpg'), price:5000},
        {lid:101, title:'笔记本标题1', pic: require('./src/assets/1.jpg'), price:6000},
        {lid:102, title:'笔记本标题2', pic: require('./src/assets/2.jpg'), price:7000},
        {lid:103, title:'笔记本标题3', pic: require('./src/assets/3.jpg'), price:8000},
        {lid:100, title:'笔记本标题0', pic: require('./src/assets/0.jpg'), price:5000},
        {lid:101, title:'笔记本标题1', pic: require('./src/assets/1.jpg'), price:6000},
        {lid:102, title:'笔记本标题2', pic: require('./src/assets/2.jpg'), price:7000},
        {lid:103, title:'笔记本标题3', pic: require('./src/assets/3.jpg'), price:8000},
        {lid:100, title:'笔记本标题0', pic: require('./src/assets/0.jpg'), price:5000},
        {lid:101, title:'笔记本标题1', pic: require('./src/assets/1.jpg'), price:6000},
        {lid:102, title:'笔记本标题2', pic: require('./src/assets/2.jpg'), price:7000},
        {lid:103, title:'笔记本标题3', pic: require('./src/assets/3.jpg'), price:8000},
     ]
    }
  }
  _renderItem = (obj)=>{
    //obj: { item: 笔记本对象, index: 下标 }
    return (
      <View style={{flexDirection:'row'}}>
        <Image source={obj.item.pic} style={{width:80,height:80}}/>
        <View style={{flex:1}}>
          <Text>{obj.item.title}</Text>
          <Text>{obj.item.price}</Text>
        </View>
        <Button title="查看详情"/>
      </View>
    )
  }
  _keyExtractor=(item, index)=>{
    return String(index)
  }
  _ListHeaderComponent = ()=>{
    return (
      <Text style={{textAlign:'center'}}>笔记本列表</Text>
    )
  }
  _ListFooterComponent = ()=>{
    return <ActivityIndicator size="large"/>
    //else return <Text>到底了</Text>
  }
  _itemSeparatorComponent = ()=>{
    return (  //高度为0，只有一个边框 —— 就是一个分隔条
      <View style={{height:0, borderTopWidth:1, marginVertical:10}}></View>
    )
  }
  _onEndReached = ()=>{
    console.log('滚动到列表尾部了')
  }
  render(){ 
    return (
      <FlatList onEndReachedThreshold={0.1} onEndReached={this._onEndReached}  ItemSeparatorComponent={this._itemSeparatorComponent} ListFooterComponent={this._ListFooterComponent} ListHeaderComponent={this._ListHeaderComponent} data={this.state.laptopList} renderItem={this._renderItem} keyExtractor={this._keyExtractor}/>
    )
  }
}