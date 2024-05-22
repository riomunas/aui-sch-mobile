import { View, Text, SafeAreaView, Platform, StyleSheet, TouchableOpacity, ImageBackground, FlatList, FlatListComponent, ScrollView } from 'react-native'
import React from 'react'
import globalStyle from '../../config/env'
import { FontAwesome } from '@expo/vector-icons'
import color from '../../config/colors'
import { router } from 'expo-router'
import { useAuth } from '../../context/AuthContext'

export default function HomePage() {
  const { token, onHello, onLogout } = useAuth();

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d73',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d74',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d75',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d76',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d77',
      title: 'Third Item',
    },
  ];

  const Item = ({title}) => (
    <ImageBackground borderRadius={7} source={require('../../assets/card-1.png')} style={{padding:5, height: 70, marginBottom:10, marginHorizontal:15}}>
      <Text style={{ color: '#FFF' , fontSize: 15, textAlign: 'center', fontWeight: 700 }}>{title}</Text>
    </ImageBackground>
  );

  return (
    <SafeAreaView style={[globalStyle.saveArea]}>
      <ScrollView>
        <View style={{ flex:1 }}>

          {/* Card User */}
          <ImageBackground borderRadius={7} source={require('../../assets/card-2.png')} style={{ height: 190, marginTop:20, marginBottom:10, marginHorizontal:15}}>
            <View style={{ flex:1, padding:15 }}>
              <Text style={{ color: '#FFF' , fontSize: 20, fontWeight: 700 }}>Rio Berliandinata Munas</Text>
            </View>
            <View style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderBottomLeftRadius:7, borderBottomRightRadius:7, padding:15 }}>
              <Text style={{ color: '#FFF' , fontSize: 15, textAlign: 'center', fontWeight: 700 }}>e0849e51-05a8-4643-a023-7edaf912bec7</Text>
            </View>
          </ImageBackground>

          {/* Card Action */}
          <View style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity onPress={() => {
                onLogout();
                // router.push('transfer/transfer')
              }}>
              <View style={styles.transactionCard}>
                <FontAwesome name="exchange" size={20} color={color.biru} style={{padding:17, marginBottom:5, backgroundColor:'#fff', borderRadius:7}}/>
                <Text style={{ color:color.biru }}>Transfer</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {
                onHello();
                // router.push('apply/apply')
              }}>
              <View style={styles.transactionCard}>
                <FontAwesome name="check" size={20} color={color.biru} style={{padding:17, marginBottom:5, backgroundColor:'#fff', borderRadius:7}}/>
                <Text style={{ color:color.biru }}>Apply</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity  onPress={() => {router.push('apply/apply')}}>
              <View style={styles.transactionCard}>
                <FontAwesome name="handshake-o" size={20} color={color.biru} style={{padding:17, marginBottom:5, backgroundColor:'#fff', borderRadius:7}}/>
                <Text style={{ color:color.biru }}>Claim</Text>
              </View>
            </TouchableOpacity>
          </View>
          
          {/* Title List Paket */}
          {/* <Text style={{ fontWeight:'bold', marginVertical: 15, marginHorizontal:15, color:color.biru }}>Paket :</Text> */}

          {/* List Paket */}
          {DATA.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => {router.push(`apply/${item.id}`)}}>
              <Item key={index} title={item.title}/>
            </TouchableOpacity>
          ))}
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  transactionCard: {
    // borderWidth:0.7,
    borderColor: color.biru,
    // backgroundColor: '#470a92',
    // borderRadius:7,
    // width:110,
    // height:60,
    alignItems: 'center',
    justifyContent: 'center',
  },
})