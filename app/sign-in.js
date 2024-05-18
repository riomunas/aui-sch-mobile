import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../context/app-context";
import { router } from "expo-router";

export default function Page() {
  const { onLogin } = useAppContext();
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Sign-In</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>


      <Pressable onPress={() => {
          onLogin();
          router.navigate("/")
        }}>
        <Text style={styles.subtitle}>Login</Text>
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
