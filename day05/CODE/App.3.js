import React from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class App extends React.Component {
  render(){    
    return (  
      <View style={ss.grid}>
        {/* 第一行 */}
        <View style={ss.row}>
          <View style={ss.col}>
            <Text style={[ss.textCenter]}>上架商品总数</Text>
            <Text style={[ss.textCenter]}>24,380</Text>
            <Text style={[ss.textCenter]}>+128%较上月</Text>
          </View>
          <View style={ss.col}>
            <Text style={[ss.textCenter]}>上架商品总数</Text>
            <Text style={[ss.textCenter]}>24,380</Text>
            <Text style={[ss.textCenter]}>+128%较上月</Text>
          </View>
        </View>
        {/* 第二行 */}
        <View style={ss.row}>
          <View style={ss.col}>
            <Text style={[ss.textCenter]}>上架商品总数</Text>
            <Text style={[ss.textCenter]}>24,380</Text>
            <Text style={[ss.textCenter]}>+128%较上月</Text>
          </View>
          <View style={ss.col}>
            <Text style={[ss.textCenter]}>上架商品总数</Text>
            <Text style={[ss.textCenter]}>24,380</Text>
            <Text style={[ss.textCenter]}>+128%较上月</Text>
          </View>
        </View>
        {/* 第三行 */}
        <View style={ss.row}>
          <View style={ss.col}>
            <Text style={[ss.textCenter]}>上架商品总数</Text>
            <Text style={[ss.textCenter]}>24,380</Text>
            <Text style={[ss.textCenter]}>+128%较上月</Text>
          </View>
          <View style={ss.col}>
            <Text style={[ss.textCenter]}>上架商品总数</Text>
            <Text style={[ss.textCenter]}>24,380</Text>
            <Text style={[ss.textCenter]}>+128%较上月</Text>
          </View>
        </View>
      </View>      
    )
  }
}

let ss = StyleSheet.create({
  grid: {
    flexDirection:'column',  //可省略，网格中的三行纵向排列
    alignItems: 'stretch',   //可省略，网格中的每一行拉伸宽度
  },
  row: {
    flexDirection: 'row',    //一行中的二列横向排列
  },
  col: {
    flex: 1,
    flexDirection: 'column',  //可省略，一列中的三个文本纵向排列
    borderBottomWidth: 1,
    borderRightWidth: 1,
    paddingVertical: 10
  },
  textCenter: {
    textAlign: 'center'
  }
})
