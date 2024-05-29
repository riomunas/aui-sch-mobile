import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppContext } from "../context/app-context";
import { Link, router } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Button from "../components/Button";
import LoadingIndicator from "../components/LoadingIndicator";
import { Ionicons } from "@expo/vector-icons";
import color from '../config/colors';

export default function Page() {
  const { onRegister } = useAppContext();
  
  const [ username, setUsername ] = useState(null);
  const [ password, setPassword ] = useState(null);
  const [ rePassword, setRePassword ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ firstName, setFirstName ] = useState(null);
  const [ lastName, setLastName ] = useState(null);
  const [ loading, setLoading ] = useState(false);
  const [ securePassword, setSecurePassword ] = useState(true);

  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setIdCard(result.uri);
    }
  };

  const register = async () => {
    // Lakukan validasi data di sini sebelum mengirimkan data pendaftaran
    if (!username || !password || !rePassword || !email || !firstName || !lastName) {
      alert('Mohon lengkapi semua inputan');
      return;
    }
    if (password !== rePassword) {
      alert('Password dan konfirmasi password tidak cocok');
      return;
    }
    setLoading(true);
    // Kirim data pendaftaran
    // contoh: fetch atau fungsi lain untuk mengirimkan data ke server
    const response = await onRegister({username:username, password:password, email:email, firstName:firstName, lastName:lastName});
    if (response.status == 'FAILED') {
      setLoading(false);
      alert(response.data);
    } else {
      setLoading(false);
      alert('Pendaftaran berhasil!');
      router.replace('/sign-in');
    }
  };


  return (
    <SafeAreaView style={{ flexDirection:'column', flex: 1, justifyContent: 'center', paddingHorizontal: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: 'column', flex:1, justifyContent: 'center'}}>
        <View style={styles.main}>
          {/* <Text style={styles.title}>Register</Text> */}
          {/* <Text style={styles.subtitle}>Please put your profile.</Text> */}
        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
          <Image source={require('../assets/ico.png')} style={{ width: 150, height: 150}} />
        </View>
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
          <Text>Re-Password :</Text>
          {/* <Input placeholder="Re-Password" secureTextEntry onChangeText={(text) => setRePassword(text)} value={rePassword} /> */}
          <View style={{ 
            height: 35, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth:0.7, borderColor: color.biru, borderRadius: 5, paddingHorizontal: 10}}>
            <TextInput style={{flex: 1}}
              placeholder="Enter your password"
              secureTextEntry={securePassword}
              value={rePassword}
              onChangeText={(text) => setRePassword(text)}
            />
            <Pressable onPress={() => setSecurePassword(!securePassword)}>
              <Ionicons name={securePassword?"eye-off":"eye"} size={20} color={color.biru} />
            </Pressable>
          </View>
        </View>
        <View style={{ marginBottom: 10, }}>
          <Text>E-Mail :</Text>
          <Input placeholder="E-Mail" onChangeText={(text) => setEmail(text)} value={email} />
        </View>
        <View style={{ marginBottom: 10, }}>
          <Text>First Name :</Text>
          <Input placeholder="First Name" onChangeText={(text) => setFirstName(text)} value={firstName} />
        </View>
        <View style={{ marginBottom: 10, }}>
          <Text>Last Name :</Text>
          <Input placeholder="Last Name" onChangeText={(text) => setLastName(text)} value={lastName} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <Button icon="account" mode="contained" onPress={register} >
            Register
          </Button>
        </View>
      </View>
      </ScrollView>
      <LoadingIndicator visible={loading} />
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

