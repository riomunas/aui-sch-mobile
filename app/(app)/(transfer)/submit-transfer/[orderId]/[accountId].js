import { router, useLocalSearchParams } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import LoadingIndicator from "../../../../../components/LoadingIndicator";
import { useEffect, useState } from "react";
import { axiosWithToken } from "../../../../../config/axios-withtoken-config";
import SelectablePackageItem from '../../../../../components/SelectablePackageItem';
import Button from "../../../../../components/Button";
import PackageItem from "../../../../../components/PackageItem";
import MemberCard from "../../../../../components/MemberCard";
import moment from "moment";
import color from "../../../../../config/colors";

export default function Page() {
  const [ errorMessage, setErrorMessage ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { orderId, accountId } = useLocalSearchParams();
  const [ dataPaket, setDataPaket ] = useState(null);
  const [ dataAccountTujuan, setDataAccountTujuan ] = useState(null);
  const fetchData = axiosWithToken();
  const formatterUang = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR', // Mata uang Indonesia
    minimumFractionDigits: 0, // Jumlah digit minimum untuk desimal
  });

  const loadData = () => {
    setLoading(true);
    
    //data paket
    fetchData.get(`/api/transaction/transfer/${orderId}/${accountId}`)
    .then(res => {
      // setPaketData(res.data.data);  
      setDataPaket(res.data.data.paket);
      //data user tujuan
      setDataAccountTujuan(res.data.data.user);

      setLoading(false);
    }).catch(err => {
      setErrorMessage(err.response.data.data)
      setLoading(false);
    })
  }

  const submit = () => {
    setLoading(true);
    fetchData.post(`/api/transaction/transfer/${orderId}/${accountId}`)
    .then((res) => {
      console.log(">>res ", res);
      setLoading(false);
      router.navigate('/');
    }).catch(err => {
      setLoading(false);
      alert(err.message)
    })
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <SafeAreaView style={{ padding:10, flex:1 }}>
        <View  style={{gap:10, flex:1}}>
          {dataAccountTujuan != null? 
            <>
            <Text>Account Tujuan : </Text>
            <MemberCard data={dataAccountTujuan}/> 
            <Text>Paket Yang Akan di Transfer : </Text>
            <PackageItem packageName={dataPaket?.name} date={moment(dataPaket?.data).format('DD MMMM YYYY')} currentPrice={formatterUang.format(dataPaket?.current_price)} price={formatterUang.format(dataPaket?.start_price)} />

            <Button icon="account" mode="contained" onPress={submit} >
              Submit
            </Button>
            </>
              :
            <View style={{justifyContent:'center', alignItems:'center', borderColor:color.biru, borderRadius:10, borderStyle:'dashed', borderWidth:1, padding:50}}>
              <Text style={{textAlign:'center'}}>{errorMessage}</Text>
            </View>
          }
          
        </View>
        <LoadingIndicator visible={loading} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
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
