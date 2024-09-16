import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import color from '../config/colors';

const SelectablePackageItem = ({ date, packageName, price, isSelected, isSelectable }) => {
  return (
    <View style={[styles.container]}>
      <Image style={{ flex: 1, borderRadius:10, contentFit: 'cover', position: 'absolute', width: '100%', height: '100%', }} source={require('../assets/card-1.png')}/>
      <View style={[styles.row, styles.middleRow]}>
        <Ionicons name="cube-outline" size={30} color='white' style={styles.icon} />
        <Text style={styles.packageName}>{packageName}</Text>
        {isSelectable ? (
          <Ionicons name= {isSelected ? 'radio-button-on' : 'radio-button-off'} size={17} color='white' />
        ) : null}
      </View>
      <View style={[styles.row, styles.bottomRow]}>
        <Text style={styles.priceLabel}>Nilai :</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    overflow: 'hidden',
    // borderWidth: 1,
    // marginHorizontal: 20,
    // marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  topRow: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.125)',

    justifyContent: 'space-between',
    // backgroundColor: '#f0f0f0',
  },
  middleRow: {
    flex: 1,
  },
  bottomRow: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.125)',

    // backgroundColor: '#f0f0f0',
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: color.putih,
  },
  icon: {
    marginRight: 10,
  },
  packageName: {
    flex:1,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  priceLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  price: {
    fontSize: 16,
    marginLeft: 'auto',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default SelectablePackageItem;
