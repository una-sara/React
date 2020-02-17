import React from 'react'

export default class MyC05 extends React.Component{
  constructor(){
    super()
    this.state = {      //Model
      uname: 'dangdang'
    }
  }
  doUnameChange = (e)=>{
    //console.log(e.target.value) //获取事件源(输入框)的当前值
    this.setState({
      uname: e.target.value
      //uname: e.target.value.toUpperCase()
      //uname: e.target.value.substring(0, 12)
    })
  }
  render(){
    return (
      <input onChange={this.doUnameChange} value={this.state.uname}/>
    )
  }
}