import React from 'react'
import MyC03Child1Modify from './MyC03Child1Modify';
import MyC04Child2Photo from './MyC04Child2Photo';

export default class MyC02Parent extends React.Component {
  constructor(){
    super()
    //Reference：引用
    this.c0 = React.createRef()  //子组件的引用
    this.c1 = React.createRef()  //子组件的引用
    this.c2 = React.createRef()  //子组件的引用

    this.state = {
      myNameInParent: '苍茫大地001'  //父组件中的数据
    }
  }
  doModifyMyName = (newName)=>{
    console.log('父组件在处理修改签名：', newName)
    //把子组件传递给自己的数据修改为状态数据
    this.setState({ 
      myNameInParent: newName 
    })
  }
  doPrint = ()=>{
    console.log(this.c0.current)
    console.log(this.c1.current)
    console.log(this.c2.current)
  }
  render(){
    return (
      <div style={{background:'#dfc',padding:'10px'}}>
        <h3 ref={this.c0}>{this.state.myNameInParent}的博客</h3>
        <hr/>
        <MyC03Child1Modify ref={this.c1} modifyMyName={this.doModifyMyName}/>
        <MyC04Child2Photo ref={this.c2} myNameInChild={this.state.myNameInParent}/>
        <hr/>
        <button onClick={this.doPrint}>输出父组件中的子组件</button>
      </div>
    )
  }
}