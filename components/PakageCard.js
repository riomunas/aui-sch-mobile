import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Sesuaikan dengan library ikon yang Anda gunakan

const PackageCard = ({ packageName, packagePrice }) => {
  return (
    <>
      <View style={styles.card}>
        <View style={styles.leftContent}>
          <Text style={styles.packageName}>{packageName}</Text>
        </View>
        <View style={styles.rightContent}>
          <View style={styles.priceWrapper}>
            <Text style={styles.packagePrice}>{packagePrice}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    marginBottom: 5,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth:1,
  },
  leftContent: {
    flex: 1,
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  packageName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff', // Warna biru untuk harga paket
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  packagePrice: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 5,
  },
});

export default PackageCard;
