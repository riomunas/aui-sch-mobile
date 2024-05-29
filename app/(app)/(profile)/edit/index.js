import { View, Text, Image, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react';
import { router, useFocusEffect, useLocalSearchParams, useNavigation } from 'expo-router'
import color from '../../../../config/colors';
import { axiosWithToken } from '../../../../config/axios-withtoken-config';
import LoadingIndicator from '../../../../components/LoadingIndicator';
import { useAppContext } from '../../../../context/app-context';
import { FontAwesome6 } from '@expo/vector-icons';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

export default function EditUser() {
  const fetchData = axiosWithToken();
  const [ dataUser, setDataUser ] = useState(null);
  const [ loading, setLoading ] = useState(false);

  const nav = useNavigation();

  const loadData = () => {
    setLoading(true);
    fetchData.get('/api/user/me').then(res => {
      setLoading(false);
      setDataUser(res.data.data);
    }).catch(err => {
      setLoading(false);
    })
  };

  const save = () => {
    setLoading(true);
    fetchData.post(`/api/user/update`, dataUser).then(res => {
      setLoading(false);
      router.navigate('/');
    }).catch(err => {
      setLoading(false);
      alert(err.message);
    })
  }

  useEffect((dataUser) => {
    nav.setOptions({
      headerTitle: 'Edit Profiles',
      headerRight: () => {return (
        <Pressable onPress={save} style={({ pressed }) => [pressed && {opacity:0.7}]}>
          <FontAwesome6 name="check" size={20} color={color.black} style={{ marginRight: 15 }} />
        </Pressable>
      )},
    });
  }, [dataUser]);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <View style={{flex: 1, padding: 10, justifyContent: 'flex-start', gap:10}}>
      <LoadingIndicator visible={loading} />
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../../../../assets/user.png')} style={styles.profileImage} />
      </View>
      <View style={{borderColor:color.border, borderWidth: 0.7, borderRadius:10, backgroundColor: 'white'}}>
        <View style={{ padding:10, flexDirection: 'column', borderBottomWidth: 0.7, borderBottomColor: color.border }}>
          <Text style={styles.label}>Firstname: </Text>
          <TextInput style={styles.infoText}
            placeholderTextColor={'lightgray'}
            placeholder="First Name"
            value={dataUser?.first_name}
            onChangeText={(text) => setDataUser({...dataUser, first_name: text})}
          />
        </View>
        <View style={{ padding:10, flexDirection: 'column', borderBottomWidth: 0.7, borderBottomColor: color.border }}>
          <Text style={styles.label}>Lastname: </Text>
          <TextInput style={styles.infoText}
            placeholderTextColor={'lightgray'}
            placeholder="Last Name"
            value={dataUser?.last_name}
            onChangeText={(text) => setDataUser({...dataUser, last_name: text})}
          />
        </View>
        <View style={{ padding:10, flexDirection: 'column', borderBottomWidth: 0.7, borderBottomColor: color.border }}>
          <Text style={styles.label}>Email: </Text>
          <TextInput style={styles.infoText}
            placeholderTextColor={'lightgray'}
            placeholder="E-mail"
            keyboardType="email-address"
            value={dataUser?.email}
            onChangeText={(text) => setDataUser({...dataUser, email: text})}
          />
        </View>
        <View style={{ padding:10, flexDirection: 'column' }}>
          <Text style={styles.label}>Phone: </Text>
          <TextInput style={styles.infoText}
            placeholderTextColor={'lightgray'}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={dataUser?.phone_number}
            onChangeText={(text) => setDataUser({...dataUser, phone_number: text})}
          />
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
