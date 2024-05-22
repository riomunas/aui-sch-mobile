import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import Button from '../components/Button'
import Input from '../components/Input'
import globalStyle from '../config/env'
import { AuthProvider, useAuth } from '../context/AuthContext'
import HomePage from './(tabs)/home'

export default function LoginPage() {
  const {token} = useAuth();
  return (
    <>
    {token.accessToken ? <HomePage /> :<Layout />}
    </>
  )
}

export const Layout = () => {
  const {onLogin} = useAuth();
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState(''); 
  return (
    <SafeAreaView style={[globalStyle.saveArea, { paddingHorizontal:20, justifyContent: 'flex-start'}]}>
      <View style={{ flexDirection: 'column', flex:1}}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', flex:1, alignItems: 'center' }}>
          <Image source={require('../assets/ico.png')} style={{ width: 150, height: 150}} />
        </View>
        <View style={{flex:2 }}>
          <View style={{ marginBottom: 10, }}>
            <Text>User Name :</Text>
            <Input placeholder="Username" onChangeText={(text) => setUsername(text)} value={username} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Text>Password :</Text>
            <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} value={password} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <Button onPress={async () => {
              const data = await onLogin(username, password);
              if(data.error) {
                alert(data.message);
              } else {
                router.replace('(tabs)/home');
              }
              }}>Login</Button>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text>Not Registered?</Text> 
            <Link style={{ color: '#2196f3' }} replace href={"/signup"}> Sign Up</Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}