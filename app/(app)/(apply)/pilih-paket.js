import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { axiosWithToken } from "../../../config/axios-withtoken-config";
import { SafeAreaView } from "react-native-safe-area-context";
import PackageCard from '../../../components/PakageCard';

export default function Page() {
  const [ paketData, setPaketData] = useState([]);
  const fetchData = axiosWithToken();
  const formatterUang = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR', // Mata uang Indonesia
    minimumFractionDigits: 0, // Jumlah digit minimum untuk desimal
  });
  
  useEffect(() => {
    fetchData
    .get('/api/paket')
    .then(res => {
      setPaketData(res.data.data);  
    })
  }, []);

  const Item = ({ item }) => (
    <TouchableOpacity activeOpacity={0.7} onPress={() => router.push({
      pathname: '/(apply)/pilih-pembayaran/[paketId]',
      params: { paketId: item.id },
    })}>
      <PackageCard packageName={item.name} packagePrice={formatterUang.format(item.price)}/>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding:10}}>
      <ScrollView>
        <View style={styles.container}>
          {paketData.map((item, index) => (
            <Item key={index} item={item}/>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
});
