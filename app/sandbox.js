import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import globalStyle from '../constants/style';

export default function SandboxPage() {
  return (
    <SafeAreaView style={[globalStyle.saveArea]}>
      <View style={styles.container}>
        <Text style={styles.boxOne}>One</Text>
        <Text style={styles.boxTwo}>Two</Text>
        <Text style={styles.boxThree}>Three</Text>
        <Text style={styles.boxFour}>Four</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container : {
    // height: 500,
    // flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop:40,
    height: 500,
    // width: 300,
    backgroundColor: 'lightgrey',
  },
  boxOne: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    flex:1,
    backgroundColor: 'violet',
    padding: 10
  },
  boxTwo: {
    flex:1,
    backgroundColor: 'gold',
    padding: 15,
    marginBottom: 40
  },
  boxThree: {
    flex:1,
    backgroundColor: 'coral',
    padding: 20
  },
  boxFour: {
    flex:1,
    backgroundColor: 'skyblue',
    padding: 25
  }
})