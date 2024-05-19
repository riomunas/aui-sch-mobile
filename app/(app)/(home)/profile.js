import { Pressable, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../../../context/app-context";
import { router } from "expo-router";

export default function Page() {
  const { onLogout } = useAppContext();

  const logout = async () => {
    const response = await onLogout();
    console.log(response)
    // if (response.status == 'FAILED') {
    //   alert(response.data);
    // } else {
    //   router.replace('/');
    // }
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Profile Screen</Text>
        <Text style={styles.subtitle}>This is the first page of your app.</Text>
      </View>

      <Pressable onPress={logout}>
        <Text style={styles.subtitle}>Log Out</Text>
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
