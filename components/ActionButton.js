import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Pressable, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import color from '../config/colors';

const ActionButton = ({ iconName, text, onPress }) => {
  return (
    <>
      <Pressable style={styles.container} onPress={onPress}>
        <Icon name={iconName} size={30} color={color.biru} style={styles.icon} />
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  icon: {
    marginBottom: 5,
  },
  text: {
    color: color.black,
    fontSize: 16,
  },
});

export default ActionButton;
