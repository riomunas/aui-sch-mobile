import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home', headerShown:false, tabBarIcon: ({size, color}) => <FontAwesome name="home" size={size} color={color}/> }} />
      <Tabs.Screen name="transaction" options={{ title: 'Transaction', tabBarIcon: ({size, color}) => <FontAwesome name="archive" size={size} color={color}/> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({size, color}) => <FontAwesome name="user" size={size} color={color}/> }} />
    </Tabs>
  )
}