import React from 'react'

export default class MyC03Child1Modify extends React.Component {
  constructor(){
    super()
    this.state = {
      userInput: 'tom'
    }
  }
  doChange = (e)=>{
    let userInput = e.target.value
    this.setState({ userInput })
  }
  doClick = ()=>{
    console.log('子组件中的新签名：', this.state.userInput)
    //调用父组件通过属性方式传递给自己的方法
    this.props.modifyMyName(this.state.userInput)
  }
  render(){
    return (
      <div style={{background:'#cdf',padding:'10px'}}>
        <input onChange={this.doChange} value={this.state.userInput}/>
        <button onClick={this.doClick}>修改我的签名</button>
      </div>
    )
  }
}