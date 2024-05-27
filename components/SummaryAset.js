import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../config/colors';

const SummaryAset = ({ data }) => {
  return (
    <View>
      <View style={styles.containerBawah}>
        <View style={styles.userInfo}>
          <Text style={styles.email}>Total Aset :</Text>
        </View>
          <View style={styles.userInfo}>
          <Text style={{...styles.name, textAlign:'right'}}>{data}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerAtas: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#dedede',
    borderWidth: 0.7,
    borderStyle: 'solid'
  },
  containerBawah: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: color.biru,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  iconContainer: {
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#e4e4e4',
    padding: 20,
  },
  icon: {
    color: '#666666',
  },
  userInfo: {
    flex: 1,
    padding: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    // marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666666',
  },
});

export default SummaryAset;
