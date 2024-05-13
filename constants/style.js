import { Platform, StyleSheet } from "react-native";

const globalStyle = StyleSheet.create({
  saveArea: {
    flex:1,
    paddingTop: Platform.OS === 'android' ? 35 : 0,
    backgroundColor: '#F3F3FF'
  }
});

export default globalStyle;