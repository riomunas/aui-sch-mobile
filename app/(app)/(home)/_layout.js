import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';
import color from '../../../config/colors';


export default function Layout() {
  const biru = color.biru;
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ tabBarLabel:({focused, color}) => <Text style={{fontSize:10, color: focused ? biru : 'grey'}} >Home</Text>, headerShown:false, tabBarIcon: ({size, focused}) => <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color.biru}/> }} />
      <Tabs.Screen name="transaction" options={{ tabBarLabel:({focused, color}) => <Text style={{fontSize:10, color: focused ? biru : 'grey'}} >Transaction</Text>, tabBarIcon: ({size, focused}) => <Ionicons name={focused ? "archive" : "archive-outline"} size={size} color={color.biru}/> }} />
      <Tabs.Screen name="profile" options={{ tabBarLabel:({focused, color}) => <Text style={{fontSize:10, color: focused ? biru : 'grey'}} >Profile</Text>, tabBarIcon: ({size,  focused}) => <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color.biru}/> }} />
    </Tabs>
  )
}