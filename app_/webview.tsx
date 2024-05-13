import { View, Text } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'

export default function WebviewPage() {
  return (
    <WebView
      originWhitelist={['*']}
      // source={{ html: '<h1><center>Hello world</center></h1>' }}
      source={{ uri: 'https://expo.dev' }}
    />
  )
}