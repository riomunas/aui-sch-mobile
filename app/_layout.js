import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { AppContextProvider } from '../context/app-context'

export default function RootLayout() {
  console.log(">> RootLayout")
  return (
    <AppContextProvider>
      <Slot/>
    </AppContextProvider>
  )
}