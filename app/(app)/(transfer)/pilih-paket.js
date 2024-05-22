import { Link, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Pilih Paket transfer</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>

      <Pressable onPress={() => router.push("/(transfer)/pilih-account/paket1")}>
        <Text style={styles.subtitle}>Pilih</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(transfer)/pilih/paket1/xxx/user1")}>
        <Text style={styles.subtitle}>Pilih xxx xxx xxx</Text>
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
