import React, { useCallback, useState } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import color from '../../../config/colors';
import { useAppContext } from '../../../context/app-context';
import { router, useFocusEffect, useLocalSearchParams } from 'expo-router';
import LoadingIndicator from '../../../components/LoadingIndicator';
import { axiosWithToken } from '../../../config/axios-withtoken-config';

const ProfileScreen = () => {
  const { userId } = useLocalSearchParams()
  const { onLogout } = useAppContext();
  const [ loading, setLoading ] = useState(false);
  const [ dataUser, setDataUser] = useState(null);
  const fetchData = axiosWithToken();
  const {setData} = useAppContext(); 

  const logout = async () => {
    setLoading(true);
    const response = await onLogout();
    if (response.status == 'FAILED') {
      setLoading(false);
      alert(response.data);
    } else {
      setLoading(false);
      router.navigate('/');
    }
  }

  const loadData = () => {
    setLoading(true);
    fetchData.get('/api/user/me').then(res => {
      console.log(res.data.data)
      setLoading(false);
      setDataUser(res.data.data);
      setData(res.data.data);
    }).catch(err => {
      setLoading(false);
    })
  }

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );


  return (
    <View style={{flex: 1, padding: 10, justifyContent: 'flex-start', gap:10}}>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../../../assets/user.png')} style={styles.profileImage} />
      </View>
      <View style={{borderColor:color.border, borderWidth: 0.7, borderRadius:10, backgroundColor: 'white'}}>
        <View style={{ padding:10, flexDirection: 'column', borderBottomWidth: 0.7, borderBottomColor: color.border }}>
          <Text style={styles.label}>Firstname: </Text>
          <Text style={styles.infoText}>{dataUser?.first_name}</Text>
        </View>
        <View style={{ padding:10, flexDirection: 'column', borderBottomWidth: 0.7, borderBottomColor: color.border }}>
          <Text style={styles.label}>Lastname: </Text>
          <Text style={styles.infoText}>{dataUser?.last_name}</Text>
        </View>
        <View style={{ padding:10, flexDirection: 'column', borderBottomWidth: 0.7, borderBottomColor: color.border }}>
          <Text style={styles.label}>Email: </Text>
          <Text style={styles.infoText}>{dataUser?.email}</Text>
        </View>
        <View style={{ padding:10, flexDirection: 'column' }}>
          <Text style={styles.label}>Phone: </Text>
          <Text style={styles.infoText}>{dataUser?.phone_number? dataUser.phone_number : '-'}</Text>
        </View>
      </View>
      <View style={{borderColor:color.border, borderWidth: 0.7, borderRadius:10, backgroundColor: 'white'}}>
      <Pressable 
          onPress={() => {
            router.push({
              pathname: '/(profile)/password/[userId]',
              params: { userId: 123345678},
            });
          }}
          style={({ pressed }) => [{backgroundColor:color.biru, borderTopLeftRadius:10, borderTopRightRadius:10}, pressed && {opacity:0.7}]}
        >
          <View style={{ flexDirection: 'row', paddingHorizontal:10, paddingVertical:15, borderBottomWidth: 0.7, borderBottomColor: 'white' }}>
            <Ionicons name="key-outline" size={20} color="white" />
            <Text style={styles.actionText}>Change Password</Text>
          </View>
        </Pressable>
        <Pressable onPress={logout}
          style={({ pressed }) => [{backgroundColor:color.biru, borderBottomLeftRadius:10, borderBottomRightRadius:10}, pressed && {opacity:0.7}]}
        >
          <View style={{ flexDirection: 'row', paddingHorizontal:10, paddingVertical:15 }}>
            <Ionicons name="log-out-outline" size={20} color="white" />
            <Text style={styles.actionText}>Logout</Text>
          </View>
        </Pressable>
      </View>
      <LoadingIndicator visible={loading} />
    </View>
  );
};

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

export default ProfileScreen;
