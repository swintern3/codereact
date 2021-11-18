import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi Srinath . How are you? </Text>
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#559',
    alignItems: 'center',
    justifyContent: 'center',
  },
});