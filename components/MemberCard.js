import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MemberCard = ({ data }) => {

  return (
    <View style={styles.container}>
      <Image style={{ flex: 1, borderRadius:10, resizeMode: 'cover', position: 'absolute', width: '100%', height: '100%', }} source={require('../assets/card-3.png')}/>
      <View style={styles.header}>
        <Image source={require('../assets/ico1.png')} style={styles.logo} />
        <Text style={styles.memberID}>member_id</Text>
      </View>
      <View style={styles.content}>
        <Image source={require('../assets/icon.png')} style={styles.photo} />
        <View style={styles.info}>
          <Text style={styles.name}>nama</Text>
          <Text style={styles.email}>email</Text>
          <Text style={styles.date}>tanggal_daftar</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 20,
    gap:10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    // marginBottom: 10,
  },
  logo: {
    width: 50,
    height: 30,
    marginRight: 10,
  },
  memberID: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  info: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    color: '#A6ACB9',
    fontSize: 14,
    marginBottom: 5,
  },
  date: {
    color: '#A6ACB9',
    fontSize: 14,
  },
});

export default MemberCard;
