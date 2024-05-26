import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router, Slot, Stack, Tabs } from 'expo-router'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';
import color from '../../../config/colors';


export default function Layout() {
  const biru = color.biru;
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ tabBarLabel:({focused, color}) => <Text style={{fontSize:10, color: focused ? biru : 'grey'}} >Home</Text>, headerShown:false, tabBarIcon: ({size, focused}) => <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color.biru}/> }} />
      <Tabs.Screen name="transaction" options={{ headerTitle:'Transaction', tabBarLabel:({focused, color}) => <Text style={{fontSize:10, color: focused ? biru : 'grey'}} >Transaction</Text>, tabBarIcon: ({size, focused}) => <Ionicons name={focused ? "archive" : "archive-outline"} size={size} color={color.biru}/> }} />
      <Tabs.Screen name="profile" options={{ 
        headerRight: () => {return (
            <Pressable onPress={() => {
              router.push({
                pathname: '/(profile)/edit/[userId]',
                params: { userId: 123345678},
              });
            }}
              style={({ pressed }) => [pressed && {opacity:0.7}]}
            >
              <FontAwesome6 name="edit" size={24} color={color.black} style={{ marginRight: 15 }} />
            </Pressable>
        )},
        headerTitle:'Profile', tabBarLabel:({focused, color}) => <Text style={{fontSize:10, color: focused ? biru : 'grey'}} >Profile</Text>, tabBarIcon: ({size,  focused}) => <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color.biru}/> }} 
      />
    </Tabs>
  )
}