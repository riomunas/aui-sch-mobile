import React from 'react'
import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Index', headerTitleAlign: 'center', headerShown: false  }} />
      <Stack.Screen name="register" options={{ title: 'Register', headerTitleAlign: 'center' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="modal" options={{ headerShown: true, presentation: 'containedModal' }} />
      <Stack.Screen name="webview" options={{ title: 'View Page', headerTitleAlign: 'center' }} />
    </Stack>
    // <Stack>
    //    <Stack.Screen name="index" options={{ title: 'Login', headerTitleAlign: 'center' }} />
    //    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //    <Stack.Screen name="(tabs)/(one)/detail" options={{ headerShown: false }} />
    //    <Stack.Screen name="register" options={{ title: 'Register', headerTitleAlign: 'center' }} />
    // </Stack>
  )
}