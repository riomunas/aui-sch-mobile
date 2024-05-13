import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function PageTwo() {
  return (
    <View>
      <Text>PageTwo</Text>
      <Link  style={{ color: '#2196f3', padding: 10, textAlign:'center' }} 
        replace href="/">Back To Index
      </Link>
    </View>
  )
}