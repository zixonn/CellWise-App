import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/Colors'
import { fontSizes } from '../constants/FontSizes'

const CustomText = ({children,color,fontSize,fontFamily,margin,marginTop,marginBottom,marginLeft,marginRight,padding}) => {
  return (
    <Text style = {{color:colors[color], fontSize:fontSizes[fontSize], fontFamily:fontFamily, 
      margin:margin, marginTop:marginTop, marginBottom:marginBottom, marginLeft:marginLeft,marginRight:marginRight, padding:padding
    }}>
      {children}
    </Text>
  )
}

export default CustomText

const styles = StyleSheet.create({})