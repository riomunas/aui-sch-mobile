import { View, Text } from 'react-native'
import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='pilih-paket' options={{ headerTitle: 'Pilih Paket' }}/>
      <Stack.Screen name='pilih-account/[orderId]' options={{ headerTitle: 'Tujuan Transfer' }}/>
      <Stack.Screen name='submit-transfer/[orderId]/[accountId]' options={{ headerTitle: 'Submit Transfer' }}/>
    </Stack>
  )
}