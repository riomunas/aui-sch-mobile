import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import Button from '../components/Button'
import Input from '../components/Input'
import { FontAwesome } from '@expo/vector-icons'
import globalStyle from '../constants/env'

export default function SignupPage() {
  return (
    <SafeAreaView style={[globalStyle.saveArea, { flex: 1, paddingVertical:40, paddingHorizontal:20, alignContent: 'center', justifyContent: 'center'  }]}>
      <View style={{ flexDirection: 'column', }}>
        <View style={{ marginBottom: 10 }}>
          <Text>User Name :</Text>
          <Input placeholder="Username" />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Email :</Text>
          <Input placeholder="Email" />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Password :</Text>
          <Input placeholder="Password" secureTextEntry />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Confirm Password :</Text>
          <Input placeholder="Confirm Password" secureTextEntry />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button onPress={() => {router.replace('(tabs)/home')}}>
            <FontAwesome
              name="picture-o"
              size={18}
              color="#fff"
              style={styles.buttonIcon}
            />
            <Text style={[styles.buttonLabel, { color: "#fff" }]}> Choose ID Card Picture</Text>
          </Button>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button onPress={() => {router.replace('(tabs)/home')}}>Submit</Button>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>Already Registered?</Text>
          <Link style={{ color: '#2196f3' }} replace href={"/login"}> Sign In</Link>
        </View>

        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonIcon: {
    marginRight: 10
  },
  buttonLabel: {
    fontSize: 14
  }
})