import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router, Slot, Stack, Tabs } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons';
import color from '../../../config/colors';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='edit/[userId]' options={{ 
        headerRight: () => {return (
          <Pressable
            onPress={() => {
              router.back()
            }}
            style={({ pressed }) => [pressed && {opacity:0.7}]}
          >
            <FontAwesome6 name="check" size={24} color={color.black} style={{ marginRight: 15 }} />
          </Pressable>
      )},
        headerTitle: 'Edit Profile' }}/>

      <Stack.Screen name='password/[userId]' options={{ 
        headerRight: () => {return (
          <Pressable
            onPress={() => {
              router.back()
            }}
            style={({ pressed }) => [pressed && {opacity:0.7}]}
          >
            <FontAwesome6 name="check" size={24} color={color.black} style={{ marginRight: 15 }} />
          </Pressable>
      )},
        headerTitle: 'Rubah Password' }}/>
    </Stack>
  )
}