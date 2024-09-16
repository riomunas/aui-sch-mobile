import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { axiosWithToken } from "../../../config/axios-withtoken-config";
import { SafeAreaView } from "react-native-safe-area-context";
import PackageCard from '../../../components/PakageCard';
import BottomBar from "../../../components/BottomBar";
import Button from "../../../components/Button";
import SelectablePackageItem from "../../../components/SelectablePackageItem";
import LoadingIndicator from "../../../components/LoadingIndicator";

export default function Page() {
  const [selectedPaket, setSelectedPaket] = useState(null);
  const [ paketData, setPaketData] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const fetchData = axiosWithToken();
  const formatterUang = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR', // Mata uang Indonesia
    minimumFractionDigits: 0, // Jumlah digit minimum untuk desimal
  });
  
  const loadData = () => {
    setLoading(true);
    fetchData
    .get('/api/paket')
    .then(res => {
      setLoading(false);
      setPaketData(res.data.data);  
    })
    .catch(error => {
      // Handle error
      console.log('Request failed:', error);
    });
  }

  useEffect(() => {
    loadData();
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
        <SelectablePackageItem key={item.id} packageName={item.name} price={formatterUang.format(item.price)} isSelectable={true} isSelected={selectedPaket?.id === item.id?true:false} />
      </Pressable>
    )};

  return (
    <View style={{ flex: 1}}>
      <LoadingIndicator visible={loading}/>

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
