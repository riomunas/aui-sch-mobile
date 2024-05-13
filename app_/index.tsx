import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'
import Buttons from '../components/Button'
import SandboxPage from './sandbox'

export default function IndexPage() {
  return (
    <SandboxPage/>
    // <View>
    //   <Button onPress={() => router.push('/register')} title='Open Register With Button'/>

    //   <Buttons onPress={() => router.push('/register')}>Open Register With Our Own Button</Buttons>

    //   <Link push href="/register" asChild>
    //     <Button title='Open Register With Button In Link'/>
    //   </Link>
    //   <Link style={{ color: '#2196f3', padding: 10, textAlign:'center' }} 
    //     push href="/register">
    //     Open Register With Link
    //   </Link>

    //   <Link style={{ color: '#2196f3', padding: 10, textAlign:'center' }} 
    //     replace href="(one)/one">
    //     Open Page One With Link
    //   </Link>

    //   <Link style={{ color: '#2196f3', padding: 10, textAlign:'center' }} 
    //      href="modal">
    //     Open Modal Page With Link
    //   </Link>
      
    //   <Link style={{ color: '#2196f3', padding: 10, textAlign:'center' }} 
    //     push href="/webview">
    //     Open Page One With Link Web View
    //   </Link>

    // </View>
  )
}