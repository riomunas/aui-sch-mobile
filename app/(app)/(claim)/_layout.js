import { View, Text, Pressable, Button } from 'react-native'
import React from 'react'
import { Link, router, Slot, Stack, Tabs } from 'expo-router'

export default function Layout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: 'center', headerRight: () => <Pressable onPress={() => router.navigate("/")}><Text>Home</Text></Pressable> }}>
    </Stack>
  )
}