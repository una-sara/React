import React from 'react'

//在一个ES6的模块中，全局变量this指向undefined

export default class MyC02 extends React.Component{
  age = 20

  constructor(){
    super()  //调用父类/超类的构造方法
    //构造方法永远会在任何一个其他方法之前执行
    //可以在构造方法中固定this的指向
    this.f4 = this.f4.bind( this )
    //让f4方法中的this固定到当前对象
  }

  f2(){
    console.log(this)
    //console.log('按钮被单击了...'+age)
    //console.log('按钮被单击了...'+this.age)
  }

  //f3(){
  f3 = ()=>{
    console.log(this)
  }

  f4(){
    //bind()作用：绑定/固定this的指向
    console.log(this)
  }

  render(){
    return (
      <div>
        {/* <button onblur="" onmouseover="" ondblclick="" onclick="">事件绑定</button> */}
        {/* <button onClick="f2">事件绑定</button> */}
        {/* <button onClick={f2}>事件绑定</button> */}
        {/* <button onClick={this.f2()}>事件绑定</button> */}
        {/* <button onClick={this.f2}>事件绑定</button> */}
        
        <button onClick={  ()=>{this.f2()}  }>事件绑定</button>
        {/* <button onClick={  this.f3  }>事件绑定</button> */}
        {/* <button onClick={  this.f4  }>事件绑定</button> */}
      </div>
    )
  }
}