import { Pressable, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../config/colors';

const Button = ({ children, onPress, style}) => {
  return (
    <>
      <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed, style,]}
          onPress={onPress}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </>
  )
}
export default React.memo(Button);

const styles = StyleSheet.create({
  button: {
    backgroundColor: color.biru,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonPressed: {
    opacity: 0.7, // Mengurangi kecerahan saat ditekan
  },
});