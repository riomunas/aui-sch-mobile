import { View, Text } from 'react-native'
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer'

export default function TreeLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="page1" options={{ title: 'Page 1', headerTitleAlign: 'center' }} />
        <Drawer.Screen name="page2" options={{ title: 'Page 2', headerTitleAlign: 'center' }} />
      </Drawer>
    </GestureHandlerRootView>
  )
}