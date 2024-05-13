import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel:false }}>
      <Tabs.Screen name="(one)" options={{ title: 'Home', headerTitleAlign: 'center', headerShown:false, tabBarIcon: ({size, color}) => <Ionicons name="home" size={size} color={color} /> }} />
      <Tabs.Screen name="two" options={{ title: 'Setting', headerTitleAlign: 'center', tabBarIcon: ({size, color}) => <Ionicons name="person" size={size} color={color} /> }} />
      <Tabs.Screen name="hidden" options={{ href:null }} />
      <Tabs.Screen name="(tree)" options={{ headerTitleAlign: 'center', headerShown:false, tabBarIcon: ({size, color}) => <Ionicons name="settings" size={size} color={color} /> }} />
    </Tabs>
  )
}