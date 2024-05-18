import { View, Text } from 'react-native'
import React from 'react'
import { Redirect, router, Slot, Stack, Tabs } from 'expo-router'
import { useAppContext } from '../../context/app-context';

export default function AppLayout() {
  const { token } = useAppContext();
  if (!token.accessToken) {
    return <Redirect href="/sign-in" />
  } else {
    return (
      <Stack screenOptions={{ headerShown: false }} />
    )
  }
}