import { router } from "expo-router";
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import UserCard from "../../../components/UserCard";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionButton from "../../../components/ActionButton";
import color from "../../../config/colors";
import PackageCard from "../../../components/PakageCard";
import { useEffect, useState } from "react";
// import axios from "axios";
import { axiosWithToken } from "../../../config/axios-withtoken-config";
import MemberCard from "../../../components/MemberCard";
import PackageItem from "../../../components/PackageItem";
import CustomComponent from "../../../components/CustomComponent";
import { FontAwesome6 } from '@expo/vector-icons';

export default function Page() {
  const fetctData = axiosWithToken();
  const [paketData, setPaketData] = useState([]);
  const formatterUang = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR', // Mata uang Indonesia
    minimumFractionDigits: 0, // Jumlah digit minimum untuk desimal
  });

  useEffect(() => {
    fetctData.get('/api/paket').then(res => {
      setPaketData(res.data.data);
    });
  }, []);

  const UserData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };
  
  const Item = ({ item }) => (
    <PackageCard packageName={item.name} packagePrice={formatterUang.format(item.price)}/>
  );

  return (
    <SafeAreaView style={{ padding:10, flex:1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View  style={{gap:10, flex:1}}>
          
          {/* id card elektronik  */}
          <View style={{ flex:1, borderRadius:10, minHeight:150, position: 'relative'}}>
            <Image style={{ flex: 1, borderRadius:10, resizeMode: 'cover', position: 'absolute', width: '100%', height: '100%', }} source={require('../../../assets/card-3.png')}/>
            <View style={{ padding:15, flex:1, gap:10}}>
              <View style={{ margin:0, flexDirection:'row', justifyContent:'space-between'}}>
                <Image source={require('../../../assets/ico1.png')} style={{ width: 50, height: 33}} />
                <Text style={{color:'white'}}>12/12/1212</Text>
              </View>
              <View style={{ flex:1,  padding:0, flexDirection:'row', alignItems:'center'}}>
                <View style={{ flex:1, justifyContent:'space-between'}}>
                  <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold', marginBottom: 5,}}>nama</Text>
                  <Text style={{color: '#A6ACB9',fontSize: 14,marginBottom: 5,}}>email</Text>
                  <Text style={{color: '#A6ACB9',fontSize: 14,}}>tanggal_daftar</Text>
                </View>
                <Image source={require('../../../assets/user.png')} style={{width: 100,height: 100,borderRadius: 50,marginRight: 20,}} />
              </View>
              <View style={{ alignItems:'center'}}><Text style={{...styles.title, color:'white', fontSize:18}}>AAAA-13121-1345SDSFE988-988324</Text></View>
            </View>
          </View>

          {/* user section */}
          <UserCard user={UserData} />

          {/* action section */}
          <View style={{ flexDirection: 'row', gap:10 }}>
            <ActionButton iconName="check" text="Apply" onPress={() => router.push("/(apply)/pilih-paket")} />
            <ActionButton iconName="exchange" text="Transfer" onPress={() => router.push("/(transfer)/pilih-paket")} />
            <ActionButton iconName="handshake-o" text="Claim" onPress={() => router.push("/(claim)/pilih-paket")} />
            {/* Tambahkan lebih banyak ActionButton sesuai kebutuhan */}
          </View>

          {/* paket section */}
          <View style={{marginTop:25}}><Text style={styles.title}>Paket Yang Diambil</Text></View>
          
          <CustomComponent 
            date={'12 Mei 2024'}
            price={'Rp. 2.0000.000'}
            packageName={'Paket SD 1'}
          />
          
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold'
  },
});
