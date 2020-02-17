import  React  from 'react'
import './MyC01BuyCount.css'

export default class MyC01BuyCount extends React.Component {
  render(){
    return (
      <div className="buycount">
        <button>-</button>
        <span>3</span>
        <button>+</button>
      </div>
    )
  }
}