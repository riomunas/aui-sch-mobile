import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../config/colors';

const PackageItem = ({ icon, name, date, status, price }) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.topRow}>
        <View style={styles.priceContainer}>
          <Text style={styles.packagePrice}>{price}</Text>
        </View>
      </View> */}
      <View style={styles.bottomRow}>
        <View style={[styles.iconContainer, { backgroundColor: color.biru }]}>
          <Icon name={icon} size={30} color="#fff" />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.packageName}>{name}</Text>
        </View>
        <View style={[styles.dateContainer, { backgroundColor: color.biru }]}>
          <Text style={styles.packageDate}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderColor: color.biru,
    backgroundColor: 'white',
    borderWidth: 1,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  topRow: {
    flexDirection: 'row',
    backgroundColor: color.biru,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  iconContainer: {
    marginRight: 15,
    padding: 10,
    borderRadius: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  packageName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  packageStatus: {
    fontSize: 16,
    color: color.biru,
    fontWeight: 'bold',
  },
  dateContainer: {
    borderRadius: 100,
    paddingHorizontal: 15,
    paddingVertical: 4,
    marginLeft: 'auto',
  },
  packageDate: {
    color: '#fff',
    fontSize: 14,
  },
  priceContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  packagePrice: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PackageItem;
