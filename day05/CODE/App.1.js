import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class App extends React.Component {
  render(){    
    return (        
      <View style={{fontSize: 30}}>
        <Text style={{color:'#f00', paddingVertical:10}}>Hello</Text>
        <Text style={ss.success}>World</Text>
        <Text style={[ss.success,ss.textRight,{fontSize:30}]}>你好</Text>
      </View>
    )
  }
}

let ss = StyleSheet.create({
  success: {
    color: '#0f0',
    fontSize: 16
  },
  textRight: {
    textAlign: 'right'
  }
})