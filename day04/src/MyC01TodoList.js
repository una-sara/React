import React from 'react'

export default class MyC01TodoList extends React.Component {
  constructor(){
    super()
    //创建状态数据——Model
    this.state = {
      todoList: ['上课', '开会', '培训'],
      userInput: ''  //用户输入
    }
  }

  doDelete(index){
    console.log('待删除的事项编号：', index)
    //this.state.todoList.splice(index, 1)   //无效的状态修改
    let todoList = this.state.todoList;
    todoList.splice(index, 1)
    this.setState({ todoList })              //有效的状态修改
  }
  doChange = (e)=>{
    //console.log(e.target.value)
    this.setState({
      userInput: e.target.value
    })
  }
  doAdd = ()=>{
    //console.log('新增待办事项：', this.state.userInput)
    let todoList = this.state.todoList
    todoList.push(this.state.userInput) //把用户输入添加入状态
    this.setState({ 
      todoList,
      userInput: ''    //清空当前的用户输入
    }) 
  }
  render(){
    return (
      <div>
        <h3>我的待办事项列表</h3>
        <hr />
        <input onChange={this.doChange} value={this.state.userInput}/>
        <button onClick={this.doAdd}>新增待办事项</button>
        <ul>
          {
            this.state.todoList.map((e, i)=>{
              return (
                <li key={i}>
                  <span>{e}</span>
                  <button onClick={()=>{this.doDelete(i)}}>删除</button>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}