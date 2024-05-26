import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import Button from './Button';

const BottomBar = ({ packageName, totalPrice, onPress, isVisible }) => {
  if (!isVisible) return null; // Jika isVisible adalah false, maka return null (tidak ada yang ditampilkan)

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.packageName}>{packageName}</Text>
        <Text style={styles.totalPrice}>Total Harga: {totalPrice}</Text>
      </View>
      <Button style={{ borderRadius: 5, width: 100, paddingVertical:7 }} onPress={onPress}>Beli</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 7,
    backgroundColor: '#fff', // Ubah warna latar sesuai kebutuhan
    borderTopWidth: 1,
    borderTopColor: '#ccc', // Ubah warna garis sesuai kebutuhan
  },
  leftContainer: {
    flexDirection: 'column',
  },
  packageName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 14,
  },
  payButton: {
    backgroundColor: '#007bff', // Ubah warna tombol sesuai kebutuhan
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  payButtonText: {
    color: '#fff', // Ubah warna teks tombol sesuai kebutuhan
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BottomBar;
