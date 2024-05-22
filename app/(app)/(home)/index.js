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
    <SafeAreaView style={{ flexDirection:'column', flex: 1, justifyContent: 'center', padding:10}}>
      <ScrollView>
        <View style={styles.container}>
          {/* user section */}
          <UserCard user={UserData} />

          {/* action section */}
          <View style={{ flexDirection: 'row', marginVertical: 15, justifyContent: 'space-between' }}>
            <ActionButton iconName="check" text="Apply" onPress={() => router.push("/(apply)/pilih-paket")} />
            <ActionButton iconName="exchange" text="Transfer" onPress={() => router.push("/(transfer)/pilih-paket")} />
            <ActionButton iconName="handshake-o" text="Claim" onPress={() => router.push("/(claim)/pilih-paket")} />
            {/* Tambahkan lebih banyak ActionButton sesuai kebutuhan */}
          </View>

          <Text style={{ marginVertical:5 }}>Daftar Paket</Text>
          {paketData.map((item, index) => (
            <Item key={index} item={item}/>
          ))}

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  transactionCard: {
    borderColor: color.biru,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
