import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Buttons from '../components/Button'

export default function SandboxPage() {
  return (
    <View style={styles.container}>
      <View style={{ padding: 20, flex:3, alignItems:'center', justifyContent:'space-around' }}>
        <View style={{ alignItems:'center' }}>
          <Image style={styles.logo} source={require('../assets/ico.png')} />
          <Text>Beasiswa AUI</Text>
        </View>
      </View>
      <View style={{ flex:1 }}>
        <Buttons onPress={() => alert('Hello World')}>Open Register With Our Own Button</Buttons>
      </View>
      <Text style={{ padding: 10 }}>2024 - V.1</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  }
})