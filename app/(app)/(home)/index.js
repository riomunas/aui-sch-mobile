import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import UserCard from "../../../components/UserCard";
import { SafeAreaView } from "react-native-safe-area-context";
import ActionButton from "../../../components/ActionButton";
import color from "../../../config/colors";
import PackageCard from "../../../components/PakageCard";
import { useEffect, useState } from "react";
// import axios from "axios";
import { axiosWithToken } from "../../../config/axios-withtoken-config";

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
//     <SafeAreaView style={{ flexDirection:'column', flex: 1, justifyContent:'space-between', padding:10, backgroundColor:'grey'}}>
//         {/* user section */}
//         <UserCard user={UserData} />
        
//         {/* action section */}
//         <View style={{ backgroundColor:'yellow', flexDirection: 'row'  }}>
//           <ActionButton iconName="check" text="Apply" onPress={() => router.push("/(apply)/pilih-paket")} />
//           <ActionButton iconName="exchange" text="Transfer" onPress={() => router.push("/(transfer)/pilih-paket")} />
//           <ActionButton iconName="handshake-o" text="Claim" onPress={() => router.push("/(claim)/pilih-paket")} />
//           {/* Tambahkan lebih banyak ActionButton sesuai kebutuhan */}
//         </View>

//         <View style={styles.container}>

//           <View style={{ backgroundColor: 'red', height: 100 }}>
//             <Text>asdfasdf</Text>
//           </View>

// {/* 
//           <Text style={{ marginVertical:5 }}>Daftar Paket</Text>
//           {
//             paketData.map((item, index) => (
//               <Item key={index} item={item}/>
//             ))
//           } */}

//         </View>
//       <ScrollView>
//       </ScrollView>
//     </SafeAreaView>


    <SafeAreaView style={{ padding:10, flex:1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View  style={{gap:10, flex:1}}>

          {/* user section */}
          <UserCard user={UserData} />

          {/* id card elektronik  */}
          <View style={{ borderWidth:1, padding:10, borderRadius:10, minHeight:200, backgroundColor: color.black }}>
            <View><Text style={{...styles.title, color:'white'}}>user id</Text></View>
            <View><Text style={{...styles.title, color:'white'}}>12/12/1212</Text></View>
          </View>

          {/* action section */}
          <View style={{ flexDirection: 'row', gap:10 }}>
            <ActionButton iconName="check" text="Apply" onPress={() => router.push("/(apply)/pilih-paket")} />
            <ActionButton iconName="exchange" text="Transfer" onPress={() => router.push("/(transfer)/pilih-paket")} />
            <ActionButton iconName="handshake-o" text="Claim" onPress={() => router.push("/(claim)/pilih-paket")} />
            {/* Tambahkan lebih banyak ActionButton sesuai kebutuhan */}
          </View>

          {/* paket section */}
          <View style={{marginTop:25}}><Text style={styles.title}>Paket Yang Diambil</Text></View>
          <View style={{gap:3}}>
            <PackageCard packageName='{item.name}' packagePrice={'12/12/1212'}/>
            <PackageCard packageName='{item.name}' packagePrice={'12/12/1212'}/>
            <PackageCard packageName='{item.name}' packagePrice={'12/12/1212'}/>
            <PackageCard packageName='{item.name}' packagePrice={'12/12/1212'}/>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
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
  }
});
