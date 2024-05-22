import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { router, Stack, Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import color from '../../config/colors'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: color.biru }} >
      <Tabs.Screen name="home" options={{ tabBarShowLabel:false, headerTitleAlign: 'center', tabBarIcon: ({size, color}) => <FontAwesome name="home" size={size} color={color} /> }} />
      <Tabs.Screen name="account" options={{ tabBarShowLabel:false, headerTitleAlign: 'center', tabBarIcon: ({size, color}) => <FontAwesome name="user" size={size} color={color} />}} />
    </Tabs>
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