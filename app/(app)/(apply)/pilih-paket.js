import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { axiosWithToken } from "../../../config/axios-withtoken-config";
import { SafeAreaView } from "react-native-safe-area-context";
import PackageCard from '../../../components/PakageCard';
import BottomBar from "../../../components/BottomBar";
import Button from "../../../components/Button";
import CustomComponent from "../../../components/CustomComponent";

export default function Page() {
  const [selectedPaket, setSelectedPaket] = useState(null);
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

  const Item = ({ item }) => {
    return (
      <Pressable style={({ pressed }) => [pressed && {opacity:0.7} ]} onPress={() => {
        if (item.id == selectedPaket?.id) {
          setSelectedPaket(null);
        } else {
          setSelectedPaket(item);
        }
      }}>
        <CustomComponent key={item.id} packageName={item.name} price={formatterUang.format(item.price)} isSelectable={true} isSelected={selectedPaket?.id === item.id?true:false} />
      </Pressable>
    )};

  return (
    <View style={{ flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ }}>
        <View style={styles.container}>
          {paketData.map((item, index) => (
            <Item key={index} item={item}/>
          ))}
        </View>
      </ScrollView>
      <BottomBar 
        packageName={selectedPaket?.name} 
        totalPrice={selectedPaket? formatterUang.format(selectedPaket.price) : 0} 
        onPressPay={() => console.log('Pay')} 
        isVisible={selectedPaket !== null} 
        onPress={() => {
            router.push({
              pathname: '/(apply)/pilih-pembayaran/[paketId]',
              params: { paketId: selectedPaket?.id },
            });
        }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10, 
    gap:10
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
