import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color:'#fff'}}>Open up App.js to start working on your app!</Text>
      </View>
      <View>
        <Text style={{color:'#fff'}}>Open up App.js to start working on your app!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logomarca: {
    flex:2
  },
  areaLogin:{
    flex:1
  }
});
