import React from 'react'
import { Stack } from 'expo-router'
import { AuthProvider } from '../context/AuthContext'

export default function AppLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Index', headerTitleAlign: 'center', headerShown: false}} />
        <Stack.Screen name="login" options={{ title: 'Login', headerTitleAlign: 'center', headerShown: false}} />
        <Stack.Screen name="signup" options={{ title: 'Sign-up', headerTitleAlign: 'center', headerShown: false}} />
      </Stack>
    </AuthProvider>
  )
}