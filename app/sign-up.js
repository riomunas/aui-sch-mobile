import { Alert, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useAppContext } from "../context/app-context";
import { Link, router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../components/Input";
import Button from "../components/Button";
import LoadingIndicator from "../components/LoadingIndicator";
import { Ionicons } from "@expo/vector-icons";
import color from '../config/colors';
import { Camera, CameraView, useCameraPermissions } from "expo-camera";


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

  const [ permission, requestPermission ] = useCameraPermissions();
  const [ showCamera, setShowCamera ] = useState(false);
  const [ cameraRedy, setCameraRedy ] = useState(false);
  const [ cameraRef, setCameraRef ] = useState(null);
  const [ picData, setPicData ] = useState(null);

  const takePicture = async () => {
    cameraRef.takePictureAsync({base64:true}).then((data) => {
      setPicData(data);
      setShowCamera(false);
    })
  };

  const register = async () => {
    // Lakukan validasi data di sini sebelum mengirimkan data pendaftaran
    if (!username || !password || !rePassword || !email || !firstName || !lastName) {
      alert('Please complete all inputs');
      return;
    }
    if (password !== rePassword) {
      alert('The password and password confirmation do not match');
      return;
    }
    setLoading(true);
    // Kirim data pendaftaran
    // contoh: fetch atau fungsi lain untuk mengirimkan data ke server
    const response = await onRegister({username:username, password:password, email:email, firstName:firstName, lastName:lastName, photoBase64:picData?.base64});
    if (response.status == 'FAILED') {
      setLoading(false);
      alert(response.data);
    } else {
      setLoading(false);
      alert('Registration successful');
      router.replace('/sign-in');
    }
  };


  return (
    <SafeAreaView style={{ flexDirection:'column', flex: 1, justifyContent: 'center', paddingHorizontal: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flexDirection: 'column', flex:1, justifyContent: 'center'}}>
        
        <Modal visible={permission?.granted && showCamera}>
          <CameraView style={{ flex: 1, justifyContent: 'space-between' }}
            ref={setCameraRef}
            onCameraReady={() => setCameraRedy(true)}
            facing='front'>
              <View style={{ padding: 15 }}>
                <Pressable style={({ pressed }) => [pressed && {opacity:0.7}]} onPress={() => setShowCamera(false)}>
                  <Ionicons name="close" size={36} color="white" />
                </Pressable>
              </View>
              <View style= {{alignItems: 'center', }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 15, marginBottom: 20, backgroundColor:'#ffffff42', borderRadius:50 }}>
                  <Pressable style={({ pressed }) => [pressed && {opacity:0.7}]} onPress={takePicture}>
                    <Ionicons name="camera" size={36} color="white" />
                  </Pressable>
                </View>
              </View>
          </CameraView>
        </Modal>

        <View style={styles.main}>
          <View style={{ alignItems: 'center' }}>
            <Pressable onPress={() => {
                setShowCamera(true)
                requestPermission()
              }}>
              <Image source={picData ? {uri: picData?.uri} : require('../assets/user.png')} style={{width: 120, height:120, borderRadius: 100, marginVertical: 30}} />
            </Pressable>
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
              placeholderTextColor='#aaa'
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
              placeholder="Re-Enter your password"
              secureTextEntry={securePassword}
              placeholderTextColor='#aaa'
              value={rePassword}
              onChangeText={(text) => setRePassword(text)}
            />
          </View>
        </View>

        <View style={{ marginBottom: 10, }}>
          <Text>E-Mail :</Text>
          <Input placeholder="E-Mail" keyboardType="email-address" onChangeText={(text) => setEmail(text)} value={email} />
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

