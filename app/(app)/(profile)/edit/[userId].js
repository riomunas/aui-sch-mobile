import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import color from '../../../../config/colors';

export default function EditUser() {
  const { userId } = useLocalSearchParams();
  return (
    <View style={{flex: 1, padding: 10, justifyContent: 'flex-start', gap:10}}>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../../../../assets/user.png')} style={styles.profileImage} />
      </View>
      <View style={{borderColor:color.border, borderWidth: 0.7, borderRadius:10, backgroundColor: 'white'}}>
        <View style={{ padding:10, flexDirection: 'column', borderBottomWidth: 0.7, borderBottomColor: color.border }}>
          <Text style={styles.label}>Firstname: </Text>
          <TextInput style={styles.infoText}>John</TextInput>
        </View>
        <View style={{ padding:10, flexDirection: 'column', borderBottomWidth: 0.7, borderBottomColor: color.border }}>
          <Text style={styles.label}>Lastname: </Text>
          <TextInput style={styles.infoText}>Doe</TextInput>
        </View>
        <View style={{ padding:10, flexDirection: 'column', borderBottomWidth: 0.7, borderBottomColor: color.border }}>
          <Text style={styles.label}>Email: </Text>
          <TextInput style={styles.infoText}>johndoe@example.com</TextInput>
        </View>
        <View style={{ padding:10, flexDirection: 'column' }}>
          <Text style={styles.label}>Phone: </Text>
          <TextInput style={styles.infoText}>123-456-7890</TextInput>
        </View>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },
  profileImageContainer: {
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileInfoContainer: {
    flex:1,
  },
  infoBox: {
  },
  infoText: {
    fontSize: 18,
    paddingTop: 5,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  actionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  actionText: {
    fontSize: 16,
    marginLeft: 10,
    color: 'white'
  },
});
