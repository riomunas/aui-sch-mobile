import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function PageOne() {
  return (
    <View>
      <Text>PageOne</Text>
      <Link style={{ color: '#2196f3', padding: 10, textAlign:'center' }} 
       replace href="/">Back To Index
      </Link>
      <Link style={{ color: '#2196f3', padding: 10, textAlign:'center' }} 
        href="(one)/detail">Go To Detail
      </Link>
      <Link style={{ color: '#2196f3', padding: 10, textAlign:'center' }} 
        href="(one)/123">Go To 123
      </Link>
      <Link style={{ color: '#2196f3', padding: 10, textAlign:'center' }} 
        href="(one)/456">Go To 456
      </Link>
      <Link style={{ color: '#2196f3', padding: 10, textAlign:'center' }}
       href="/modal">Open Modal
      </Link>
      <Link style={{ color: '#2196f3', padding: 10, textAlign:'center' }}
       href="/(aux)/desclimer">Open Desclimer
      </Link>
    </View>
  )
}