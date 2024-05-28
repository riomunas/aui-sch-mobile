import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { axiosWithToken } from "../../../config/axios-withtoken-config";
import BottomBar from "../../../components/BottomBar";
import SelectablePackageItem from "../../../components/SelectablePackageItem";
import LoadingIndicator from "../../../components/LoadingIndicator";
import color from "../../../config/colors";

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
    .get('/api/paket/my-paket')
    .then(res => {
      console.log(res.data.data);
      setLoading(false);
      setPaketData(res.data.data);  
    })
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={{ flex: 1}}>
      <LoadingIndicator visible={loading}/>
      
      
      <ScrollView showsVerticalScrollIndicator={false} style={{ }}>
        <View style={styles.container}>
          { paketData?.length != 0 ?
          <>
            {paketData.map((item, index) => (
              <Pressable key={item.id}  style={({ pressed }) => [pressed && {opacity:0.7} ]} onPress={() => {
                if (item.id == selectedPaket?.id) {
                  setSelectedPaket(null);
                } else {
                  setSelectedPaket(item);
                }
              }}>
                <SelectablePackageItem packageName={item.name} price={formatterUang.format(item.current_price)} isSelectable={true} isSelected={selectedPaket?.id === item.id?true:false} />
              </Pressable>
            ))}
          </>
            :
            <View style={{justifyContent:'center', alignItems:'center', borderColor:color.biru, borderRadius:10, borderStyle:'dashed', borderWidth:1, padding:50}}>
              <Text style={{textAlign:'center'}}>Belum Ada Paket Terdaftar</Text>
            </View>
          }
        </View>
          
      </ScrollView>
      <BottomBar 
        btnTitle={"Pilih"}
        packageName={selectedPaket?.name} 
        totalPrice={selectedPaket? formatterUang.format(selectedPaket.current_price) : 0} 
        onPressPay={() => console.log('Pay')} 
        isVisible={selectedPaket !== null} 
        onPress={() => {
            router.push({
              pathname: '/(transfer)/pilih-account/[orderId]',
              params: { orderId: selectedPaket?.id },
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
