import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { AppContextProvider } from '../context/app-context'
import { PaperProvider } from 'react-native-paper'

export default function RootLayout() {
  return (
    <AppContextProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in"/>
        <Stack.Screen name="sign-up" options={{ headerShown: true, title: 'Sign Up' }} />
      </Stack>
    </AppContextProvider>
  )
}