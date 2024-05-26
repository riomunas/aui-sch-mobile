import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import color from '../config/colors'

export default LoadingIndicator = ({visible, message}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        // Handle jika modal ditutup
        // setModalVisible(false);
      }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <ActivityIndicator color={color.biru} />
          <Text style={{ marginTop: 10 }}>{message?message:'Loading...'}</Text>
        </View>
      </View>
    </Modal>
  )
}