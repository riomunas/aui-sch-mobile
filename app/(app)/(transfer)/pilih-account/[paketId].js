import { router, useLocalSearchParams } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Page() {
  var {paketId} = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Pilih Account Tujuan</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>

      <Text>Anda memilih paket : {paketId} </Text>

      <Pressable onPress={() => router.push("/(transfer)/submit-transfer/paket1/account1")}>
        
        <Text style={styles.subtitle}>Pilih</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
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