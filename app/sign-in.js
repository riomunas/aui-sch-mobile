import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useAppContext } from "../context/app-context";
import { Link, router } from "expo-router";
// import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Button from "../components/Button";
import axios from "axios";

export default function Page() {
  const { onLogin } = useAppContext();
  
  const [ username, setUsername ] = useState('dev-user');
  const [ password, setPassword ] = useState('Test123$'); 
  
  const login = async () => {
    const response = await onLogin(username, password);
    if (response.status == 'FAILED') {
      alert(response.data);
    } else {
      router.replace('/');
    }
  }

  const inputActionHandler = (type, payload) =>
    dispatch({
      type: type,
      payload: payload,
    });

  return (
    <SafeAreaView style={{ flexDirection:'column', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{ flexDirection: 'column', flex:1, justifyContent: 'center'}}>
        <Image source={require('../assets/ico.png')} style={{ width: 150, height: 150}} />
        <View style={{ marginBottom: 10, }}>
          <Text>User Name :</Text>
          <Input placeholder="Username" onChangeText={(text) => setUsername(text)} value={username} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text>Password :</Text>
          <Input placeholder="Password" secureTextEntry onChangeText={(text) => setPassword(text)} value={password} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button icon="account" mode="contained" onPress={login} >
            Login
          </Button>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text>Not Registered?</Text> 
          <Link style={{ color: '#2196f3' }} replace href={"/signup"}> Sign Up</Link>
        </View>
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
