import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const UserCard = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="user-circle" size={50} style={styles.icon} />
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.name}>{user.name}</Text>
        {/* <View style={styles.separator}></View> */}
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth:1,
  },
  iconContainer: {
    borderStyle: 'dashed',
    borderRightWidth: 1,
    borderRightColor: '#ccc',
    padding: 10,
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
    marginBottom: 5,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666666',
  },
});

export default UserCard;
