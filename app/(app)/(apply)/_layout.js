import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='pilih-paket' options={{ headerTitle: 'Pilih Paket Apply' }}/>
      <Stack.Screen name='pilih-pembayaran/[paketId]' options={{ headerTitle: 'Pilih Metode Pembayaran' }}/>
    </Stack>
  )
}