import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../../../context/app-context";

export default function Page() {
  const { onLogout } = useAppContext();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>

      <Pressable onPress={onLogout}>
        <Text style={styles.subtitle}>Claim</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(transfer)/pilih-paket")}>
        <Text style={styles.subtitle}>Transfer</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/(apply)/pilih-paket")}>
        <Text style={styles.subtitle}>Apply</Text>
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
