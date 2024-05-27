import { View, Text, TextInput } from 'react-native'
import React from 'react'
import color from '../config/colors'

const Input = ({...props}) => {
  return (
    <TextInput placeholderTextColor={'#aaa'} cursorColor={color.biru}
      style={{fontSize:14, height:35, borderColor: color.biru, borderWidth: 0.7, borderRadius: 5, paddingVertical: 3, paddingHorizontal:10}}
      {...props}
    />
  )
}

export default Input