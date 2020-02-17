import React from 'react'

export default class MyC03 extends React.Component {
  count = 7  //class属性——第一种形式的Model数据，模型数据

  constructor(){
    super()
    //1)声明状态数据——第二种形式的Model数据
    this.state = {
      uname: 'dangdang',
      age: 30,
      salary: 5000,
    }
  }
  add = ()=>{
    //console.log(this)
    //this.count = this.count+1
    //console.log(this.count)

    //状态数据不能这要修改——不会导致视图的重新渲染
    //this.state.age = this.state.age+1
    //console.log(this.state)
    let age = this.state.age
    age++
    //修改状态数据——setState()会修改虚拟DOM树
    this.setState({
      age: age  
      //age:  this.state.age + 1  //不推荐
    }, ()=>{
      console.log('所有的状态数据已经修改完毕')
      console.log(this.state)
    })
    //console.log(this.state) 只能输出修改之前的值
  }
  render(){
    return (
      <div>
        {/* Model数据绑定1 */}
        <span>{this.count}</span>
        <button onClick={this.add} >+</button>

        <hr/>
        {/* Model数据绑定2 */}
        <p>姓名：{this.state.uname}</p>
        <p>年龄：{this.state.age}</p>
        <p>工资：{this.state.salary}</p>
      </div>
    )
  }

}