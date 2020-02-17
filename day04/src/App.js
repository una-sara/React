import React from 'react';
import MyC01TodoList from './MyC01TodoList';
import MyC02Parent from './MyC02Parent';
import MyC05 from './MyC05';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      uname: 'dangdang',
      showMyC05: true   //显示MyC05组件吗？
    }
  }
  doClick = ()=>{
    this.setState({ uname: 'dingding' })
  }
  doDestroy = ()=>{
    this.setState({showMyC05: false})
  }
  render(){
    return (
      <div>
        {/*  在根组件中使用其他自定义组件 
        <MyC01TodoList />
        <MyC02Parent />
        */}
        {
          (()=>{
            if(this.state.showMyC05){
              return <MyC05 childName={this.state.uname}/>
            }else {
              return null
            }
          })()
        }
        <hr/>
        <button onClick={this.doClick}>修改组件的props值</button>
        <button onClick={this.doDestroy}>销毁组件MyC05</button>
      </div>
    )
  }
}

export default App;
