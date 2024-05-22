import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import color from '../config/colors';

const Button = ({ children, onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.9}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </>
  )
}
export default React.memo(Button);

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.biru,
    borderRadius: 5,
    padding: 10,
  },
  text: {
    color: color.white,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
});