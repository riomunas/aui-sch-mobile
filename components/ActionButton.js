import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../config/colors';

const ActionButton = ({ iconName, text, onPress, children }) => {
  return (
    <Pressable  onPress={onPress}
      style={({ pressed }) => [
        { backgroundColor: pressed ? 'lightgrey' : 'white' },
        styles.container
      ]}>
      <View style={{ flex:1, padding: 10, flexDirection:'column', justifyContent:'center', alignItems:'center', borderTopLeftRadius:10, borderTopRightRadius:10 }}>
        {children}
      </View>
      <View style={{ padding: 5, flexDirection:'column', alignItems:'center', backgroundColor:color.biru, borderBottomLeftRadius:8, borderBottomRightRadius:8 }}><Text style={{fontSize:16, color:'white'}}>{text}</Text></View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    minHeight:100,
    
    borderStyle: 'solid',
    borderWidth: 0.7,
    borderColor: color.biru,
    borderRadius: 10,
    // alignItems: 'center'
  },
  icon: {
    // paddingVertical: 10,
    // paddingHorizontal: 20,
  },
  text: {
    color: color.black,
    fontSize: 16,
  },
});

export default ActionButton;
