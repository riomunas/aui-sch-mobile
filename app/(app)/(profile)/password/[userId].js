import { View, Text, Image, StyleSheet, TextInput, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams, useNavigation } from 'expo-router'
import color from '../../../../config/colors';
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import { axiosWithToken } from '../../../../config/axios-withtoken-config';

export default function EditUser() {
  const [ securePassword, setSecurePassword] = useState(true)
  const [ password, setPassword ] = useState(null);
  const [ rePassword, setRePassword ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const fetchData = axiosWithToken();
  const nav = useNavigation();

  useEffect((password, rePassword) => {
    nav.setOptions({
      headerTitle: 'Edit Profiles',
      headerRight: () => {return (
        <Pressable onPress={ubahPassword} style={({ pressed }) => [pressed && {opacity:0.7}]}>
          <FontAwesome6 name="check" size={20} color={color.black} style={{ marginRight: 15 }} />
        </Pressable>
      )},
    });
  }, [password, rePassword]);

  const ubahPassword = () => {
    if (password == rePassword) {
      setLoading(true);
      fetchData.post('/api/user/update-password', {
        "credentials": [{
          "temporary": false,
          "type": "password",
          "value": password
        }] 
      }).then(res => {
        setLoading(false);
        Alert.alert('Success', 'Password updated successfully!');
      }).catch(err => {
        setLoading(false);
        Alert.alert('Error', err.message);
      })
    } else {
      Alert.alert('Error', 'Passwords do not match!');
    }
  };

  return (
    <View style={{flex: 1, padding: 10, justifyContent: 'flex-start', gap:10}}>
      <LoadingIndicator visible={loading} />
      <View style={{borderColor:color.border, borderWidth: 0.7, borderRadius:10, backgroundColor: 'white'}}>
        <View style={{ padding:10, flexDirection: 'column', borderBottomWidth: 0.7, borderBottomColor: color.border }}>
          <Text style={styles.label}>New Password: </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TextInput style={[styles.infoText, {flex: 1}]}
              placeholder="Enter your password"
              secureTextEntry={securePassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Pressable onPress={() => setSecurePassword(!securePassword)}>
              <Ionicons name={securePassword?"eye-off":"eye"} size={24} color={color.biru} />
            </Pressable>
          </View>
        </View>
        <View style={{ padding:10, flexDirection: 'column', borderBottomWidth: 0.7, borderBottomColor: color.border }}>
          <Text style={styles.label}>Re-New Password: </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <TextInput style={[styles.infoText, {flex: 1}]}
              placeholder="Re-Enter your password"
              secureTextEntry={securePassword}
              value={rePassword}
              onChangeText={(text) => setRePassword(text)}
            />
            <Pressable onPress={() => setSecurePassword(!securePassword)}>
              <Ionicons name={securePassword?"eye-off":"eye"} size={24} color={color.biru} />
            </Pressable>
          </View>
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
