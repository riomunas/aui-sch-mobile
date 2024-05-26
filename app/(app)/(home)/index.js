import { router } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import UserCard from "../../../components/SummaryAset";
import { SafeAreaView, useSafeAreaFrame } from "react-native-safe-area-context";
import ActionButton from "../../../components/ActionButton";
import { useEffect, useState } from "react";
import { axiosWithToken } from "../../../config/axios-withtoken-config";
import PackageItem from "../../../components/PackageItem";
import { FontAwesome6 } from '@expo/vector-icons';
import color from "../../../config/colors";
import LoadingIndicator from "../../../components/LoadingIndicator";
import moment from 'moment';
import MemberCard from "../../../components/MemberCard";
import SummaryAset from "../../../components/SummaryAset";

export default function Page() {
  const fetctData = axiosWithToken();

  const [ data, setData ] = useState({});
  const [ dataPaket, setDataPaket ] = useState(null);
  const [ dataUser, setDataUser] = useState(null);
  const [ dataTotalAset, setDataTotalAset] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const formatterUang = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR', // Mata uang Indonesia
    minimumFractionDigits: 0, // Jumlah digit minimum untuk desimal
  });

  const loadData = () => {
    setLoading(true);
    fetctData.get('/api/dashboard').then(res => {
      setLoading(false);
      setData(res.data.data);
      setDataPaket(res.data.data.paket)
      setDataUser(res.data.data.user)
      setDataTotalAset(res.data.data.total_aset)
    });
  }

  useEffect(() => {
    loadData()
  }, []);

  return (
    <SafeAreaView style={{ padding:10, flex:1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View  style={{gap:10, flex:1}}>
          
          {/* id card elektronik  */}
          <Pressable onPress={loadData}>
            <MemberCard data={dataUser}/>
          </Pressable>

          {/* user section */}
          <SummaryAset data={formatterUang.format(dataTotalAset)} />

          {/* action section */}
          <View style={{ flexDirection: 'row', gap:10 }}>
            <ActionButton iconName="check" text="Apply" onPress={() => router.push("/(apply)/pilih-paket")} >
              <FontAwesome6 name="check-double" size={32} color={color.biru} />
            </ActionButton>
            <ActionButton iconName="exchange" text="Transfer" onPress={() => router.push("/(transfer)/pilih-paket")}>
              <FontAwesome6 name="money-bill-transfer" size={32} color={color.biru} />
            </ActionButton>
            <ActionButton iconName="handshake-o" text="Claim" onPress={() => router.push("/(claim)/pilih-paket")}>
              <FontAwesome6 name="file-circle-check" size={32} color={color.biru} />
            </ActionButton>
          </View>

          {/* paket section */}
          <View style={{marginTop:25}}><Text style={styles.title}>Paket Yang Diambil</Text></View>
          
          {dataPaket?.map((item, index) => (
            <PackageItem 
              key={item.id}
              date={moment(item.date).format('DD MMMM YYYY')}
              price={formatterUang.format(item.start_price)}
              currentPrice={formatterUang.format(item.current_price)}
              packageName={item.name}
            />
          ))}
          
        </View>
        <LoadingIndicator visible={loading} />
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
