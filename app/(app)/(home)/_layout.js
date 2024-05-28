import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router, Slot, Stack, Tabs, useLocalSearchParams } from 'expo-router'
import { FontAwesome, FontAwesome6 } from '@expo/vector-icons'
import Ionicons from '@expo/vector-icons/Ionicons';
import color from '../../../config/colors';
import { useAppContext } from '../../../context/app-context';


export default function Layout() {
  const biru = color.biru;

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ tabBarLabel:({focused, color}) => <Text style={{fontSize:10, color: focused ? biru : 'grey'}} >Home</Text>, headerShown:false, tabBarIcon: ({size, focused}) => <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color.biru}/> }} />
      {/* <Tabs.Screen name="transaction" options={{ tabBarShowLabel: false, headerTitle:'Transaction', tabBarLabel:({focused, color}) => <Text style={{fontSize:10, color: focused ? biru : 'grey'}} >Transaction</Text>, tabBarIcon: ({size, focused}) => <Ionicons name={focused ? "archive" : "archive-outline"} size={size} color={color.biru}/> }} /> */}
      <Tabs.Screen  name="profile" options={{ 
        headerRight: () => {return (
            <Pressable onPress={() => {
              router.push({
                pathname: '/(profile)/edit'
              });
            }}
              style={({ pressed }) => [pressed && {opacity:0.7}]}
            >
              <FontAwesome6 name="edit" size={20} color={color.black} style={{ marginRight: 20 }} />
            </Pressable>
        )},
        headerTitle:'Profile', tabBarLabel:({focused, color}) => <Text style={{fontSize:10, color: focused ? biru : 'grey'}} >Profile</Text>, tabBarIcon: ({size,  focused}) => <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color.biru}/> }} 
      />
      <Tabs.Screen name='transaction' options={{ href:null}}/>
    </Tabs>
  )
}