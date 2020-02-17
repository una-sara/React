import React from 'react'

export default class MyC04Child2Photo extends React.Component {
  constructor(){
    super()
  }
  render(){
    return (
      <div style={{background:'#fdc',padding:'10px',marginTop:'10px'}}>
        <h4>{this.props.myNameInChild}的照片墙</h4>
      </div>
    )
  }
}