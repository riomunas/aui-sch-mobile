import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import color from '../config/colors';

const ModalComponent = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal:40, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 20, gap:10 }}>
          <Ionicons name="checkmark-done-circle" color={color.biru} size={100} style={{ textAlign: 'center' }} />
          <View>
            <Text style={{ textAlign:'center', fontSize: 18 }}>Transaction Success</Text>
          </View>
          <Pressable style={{ backgroundColor:color.biru, padding:10, borderRadius: 5 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>Back To Home</Text>
          </Pressable>

          <View style={{ flexDirection:'row', justifyContent:'center', marginBottom:-40}}>
            <Pressable style={{ backgroundColor:'#0000009f', padding: 3, borderRadius: 50}}>
              <Ionicons name="close-circle" color={'white'} size={40} style={{ textAlign: 'center' }} />
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default ModalComponent;
