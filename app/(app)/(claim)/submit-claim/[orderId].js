import { router, useLocalSearchParams } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import moment from "moment";
import LoadingIndicator from '../../../../components/LoadingIndicator';
import PackageItem from "../../../../components/PackageItem";
import { axiosWithToken } from '../../../../config/axios-withtoken-config';
import Button from "../../../../components/Button";
import MemberCard from '../../../../components/MemberCard';
import color from '../../../../config/colors';

export default function Page() {
  const [ errorMessage, setErrorMessage ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { orderId, accountId } = useLocalSearchParams();
  const [ dataPaket, setDataPaket ] = useState(null);
  const fetchData = axiosWithToken();
  const formatterUang = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR', // Mata uang Indonesia
    minimumFractionDigits: 0, // Jumlah digit minimum untuk desimal
  });

  const loadData = () => {
    setLoading(true);
    
    //data paket
    fetchData.get(`/api/paket/my-paket/${orderId}`)
    .then(res => {

      setDataPaket(res.data.data);
      
      setLoading(false);
    }).catch(err => {
      if (err.response.data) {
        setErrorMessage(err.response.data.data)
      }
      setLoading(false);
    })
  }

  const submit = () => {
    setLoading(true);
    fetchData.post(`/api/transaction/claim/${orderId}`)
    .then((res) => {
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
          {dataPaket != null? 
            <>
            <Text>Paket Yang Akan di Claim : </Text>
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
