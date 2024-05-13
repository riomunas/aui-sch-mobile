import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

export default function ApplyPage() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>ID ApplyPage : {id}</Text>
    </View>
  )
}