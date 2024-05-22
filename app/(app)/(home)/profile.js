import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../../../context/app-context";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { axiosWithToken } from "../../../config/axios-withtoken-config";
import PackageCard from "../../../components/PakageCard";
import Button from "../../../components/Button";


export default function Page() {
  const { onLogout } = useAppContext();
  const [paketData, setPaketData] = useState([]);
  const fetchData = axiosWithToken();
  const formatterUang = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR', // Mata uang Indonesia
    minimumFractionDigits: 0, // Jumlah digit minimum untuk desimal
  });

  const fetchDataPaket = () => {
    console.log('fetc tect')
    fetchData.get('/api/paket/my-paket').then(res => {
      setPaketData(res.data.data);
    });
  }

  useEffect(() => {
    fetchDataPaket();
  }, []);

  const Item = ({ item }) => (
    <PackageCard packageName={item.name} packagePrice={formatterUang.format(item.price)}/>
  );

  const logout = async () => {
    const response = await onLogout();
    console.log('>> logout', response.status)
    if (response.status == 'FAILED') {
      alert(response.data);
    } else {
      router.replace('/');
    }
  }

  return (
    <View style={styles.container}>
      <Text>Paket Saya</Text>
      {paketData.map((item, index) => (
        <Item key={index} item={item}/>
      ))}

      <Button icon="account" mode="contained" onPress={fetchDataPaket} >
        Refresh
      </Button>
      
      <View style={styles.main}>
        <Text style={styles.title}>Profile Screen</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>

      <Button icon="account" mode="contained" onPress={logout} >
        Log Out
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
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
