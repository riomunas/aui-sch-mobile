import { Image, Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppContext } from "../context/app-context";
import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Button from "../components/Button";
import { ActivityIndicator } from "react-native-paper";
import color from "../config/colors";
import LoadingIndicator from "../components/LoadingIndicator";
import { Ionicons } from "@expo/vector-icons";
import ModalComponent from '../components/ModalComponent';

export default function Page() {
  const { onLogin, token } = useAppContext();
  const [ loading, setLoading ] = useState(false);
  const [ username, setUsername ] = useState(null);
  const [ password, setPassword ] = useState(null); 
  const [ securePassword, setSecurePassword ] = useState(true);
  
  const login = async () => {
    setLoading(true);

    const response = await onLogin(username, password);
    if (response.status == 'FAILED') {
      setLoading(false);
      alert(response.data);
    } else {
      setLoading(false);
      router.replace('/');
    }
  }

  return (
    <SafeAreaView style={{ flexDirection:'column', flex: 1, justifyContent: 'center', paddingHorizontal: 20}}>
      <View style={{ flexDirection: 'column', flex:1, justifyContent: 'center'}}>
        <View style={styles.main}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Please put your cridential correctly.</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={require('../assets/ico.png')} style={{ width: 150, height: 150}} />
        </View>
        <View style={{ marginBottom: 10, }}>
          <Text>User Name :</Text>
          <Input placeholder="Username" onChangeText={(text) => setUsername(text)} value={username} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Password :</Text>
          <View style={{ 
            height: 35, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth:0.7, borderColor: color.biru, borderRadius: 5, paddingHorizontal: 10}}>
            <TextInput style={{flex: 1}}
              placeholder="Enter your password"
              placeholderTextColor='#aaa'
              secureTextEntry={securePassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Pressable onPress={() => setSecurePassword(!securePassword)}>
              <Ionicons name={securePassword?"eye-off":"eye"} size={20} color={color.biru} />
            </Pressable>

          </View>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button onPress={login} >
            Login
          </Button>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>Not Registered?</Text> 
          <Link style={{ color: '#2196f3' }} push href={"/sign-up"}> Sign Up</Link>
        </View>

        <LoadingIndicator visible={loading} />

        {/* Modal untuk menampilkan pesan loading */}
        {/* <Modal
          animationType="fade"
          transparent={true}
          visible={loading?true:false}
          onRequestClose={() => {
            // Handle jika modal ditutup
            // setModalVisible(false);
          }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
              <ActivityIndicator color={color.biru} />
              <Text style={{ marginTop: 10 }}>Logging in...</Text>
            </View>
          </View>
        </Modal> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    justifyContent: "center",
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
