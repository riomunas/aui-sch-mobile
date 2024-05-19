import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import globalStyle from '../../constants/env';

export default function AccountPage() {
  return (
    <SafeAreaView style={[globalStyle.saveArea]}>
      <View>
        <Text>Account Page</Text>
      </View>
    </SafeAreaView>
  )
}