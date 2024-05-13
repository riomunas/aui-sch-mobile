import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import Button from '../components/Button'
import Input from '../components/Input'
import globalStyle from '../constants/style'

export default function LoginPage() {
  return (
    <SafeAreaView style={[globalStyle.saveArea, { paddingHorizontal:20, justifyContent: 'flex-start'}]}>
      <View style={{ flexDirection: 'column', flex:1}}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', flex:1, alignItems: 'center' }}>
          <Image source={require('../assets/ico.png')} style={{ width: 150, height: 150}} />
        </View>
        <View style={{flex:2 }}>
          <View style={{ marginBottom: 10, }}>
            <Text>User Name :</Text>
            <Input placeholder="Username" />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text>Password :</Text>
            <Input placeholder="Password" secureTextEntry />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Button onPress={() => {router.replace('(tabs)/home')}}>Login</Button>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text>Not Registered?</Text> 
            <Link style={{ color: '#2196f3' }} replace href={"/signup"}> Sign Up</Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}