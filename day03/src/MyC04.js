import React from 'react'

export default class MyC04 extends React.Component{
  //empList = [...]  
  constructor(){
    super()
    //1)创建状态数据
    this.state = {
      empList: [
        {eid: 101, ename: 'Tom', sex:1},
        {eid: 102, ename: 'Mary', sex:0},
        {eid: 103, ename: 'Jerry', sex:1},
      ]
    }
  }

  doDelete(index){
    console.log('即将删除员工序号：', index)
    //this.state.empList.splice(index, 1)  //无效
    let empList = this.state.empList;
    empList.splice(index, 1)
    //3)修改状态数据
    this.setState({ empList })
  }

  render(){
    return (
      <table border="1" width="100%">
        <tbody>
          {/* 2)绑定状态数据——列表循环渲染 */}
          {
            this.state.empList.map((e,i)=>{
              return (
                <tr key={i}>
                  <td>{e.eid}</td>
                  <td>{e.ename}</td>
                  <td>{e.sex}</td>
                  <td>
                    <button onClick={
                      ()=>{this.doDelete(i)}
                    }>删除</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    )
  }
}