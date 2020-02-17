import React from 'react'

export default class MyC05 extends React.Component {
  constructor(){  
    super()
    console.log('constructor')
    this.state = { }
  }
  // componentWillMount(){ //将要挂载  已废弃
  //   console.log('componentWillMount')
  // }
  componentDidMount(){  //完成挂载
    console.log('componentDidMount')
  }
  // componentWillUpdate(){  //将要更新  已废弃
  //   console.log('componentWillUpdate')
  // }
  componentDidUpdate(){  //完成更新
    console.log('componentDidUpdate')
  }
  shouldComponentUpdate(){  //组件应该更新吗？
    console.log('shouldComponentUpdate')
    //return false  //组件不应该继续更新了
    return true  //组件应该继续更新
  }
  // componentWillReceiveProps(){  //组件将要接收父组件传递的属性
  //   console.log('componentWillReceiveProps')
  // }
  static getDerivedStateFromProps(){
    console.log('getDerivedStateFromProps')
    return null
  }
  componentWillUnmount(){
    console.log('componentWillUnmount')

  }
  render(){
    console.log('render')
    return (
      <h3>组件MYC05</h3>
    )
  }
}