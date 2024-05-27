import { View, Text, Pressable, Button } from 'react-native'
import React from 'react'
import { Link, router, Slot, Stack, Tabs } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name='pilih-paket' options={{ headerTitle: 'Pilih Paket Claim' }}/>
      {/* {/* <Stack.Screen name='pilih-account/[orderId]' options={{ headerTitle: 'Tujuan Transfer' }}/> */}
      <Stack.Screen name='submit-claim/[orderId]' options={{ headerTitle: 'Submit Claim' }}/>
    </Stack>
  )
}