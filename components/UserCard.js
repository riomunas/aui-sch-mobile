import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserCard = ({ user }) => {
  return (
    <View>
      <View style={styles.containerAtas}>
        <View style={styles.iconContainer}>
          <Icon name="user-circle" size={45} style={styles.icon} />
        </View>
        <View style={{flex:1, padding: 10, gap:10}}>
          <View>
            <Text style={{...styles.name}}>{user.name}</Text>
          </View>
          <View>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerBawah}>
        <View style={styles.userInfo}>
          <Text style={styles.email}>Total Aset :</Text>
        </View>
          <View style={styles.userInfo}>
          <Text style={{...styles.name, textAlign:'right'}}>Rp. 12.000.000</Text>
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
    borderWidth:1,
    borderStyle: 'solid'
  },
  containerBawah: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: '#dedede',
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
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666666',
  },
});

export default UserCard;
