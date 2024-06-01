import { Image } from 'expo-image';
import moment from 'moment';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MemberCard = ({ data }) => {

  return (
    <View style={{ height:220, borderRadius:10, minHeight:150, position: 'relative'}}>
      <Image style={{ flex: 1, borderRadius:10, resizeMode: 'cover', position: 'absolute', width: '100%', height: '100%', }} source={require('../assets/card-3.png')}/>
      <View style={{ padding:15, flex:1, gap:10}}>
        <View style={{ margin:0, flexDirection:'row', justifyContent:'space-between'}}>
          <Image source={require('../assets/ico1.png')} style={{ width: 50, height: 33}} />
          <Text style={{color:'white', fontSize:12}}>{moment(data?.created_at).format('DD MMMM YYYY')}</Text>
        </View>
        <View style={{ flex:1,  padding:0, flexDirection:'row', alignItems:'center'}}>
          <View style={{ flex:1, justifyContent:'space-between'}}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 5,}}>{data?.first_name} {data?.last_name}</Text>
            <Text style={{color: '#A6ACB9',fontSize: 14,marginBottom: 5,}}>{data?.email}</Text>
            {/* <Text style={{color: '#A6ACB9',fontSize: 14,}}>tanggal_daftar</Text> */}
          </View>
          <Image source={data?.photo_url ? data.photo_url : require('../assets/user.png')} style={{width: 100,height: 100,borderRadius: 50,marginRight: 20,}} />
        </View>
      </View>
      <View style={{ borderBottomLeftRadius:10, borderBottomRightRadius:10, padding:10, backgroundColor:'#ffffff18', alignItems:'center'}}><Text style={{fontFamily: 'monospace', fontSize:14, color:'white'}}>{data?.id}</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
});

export default MemberCard;
