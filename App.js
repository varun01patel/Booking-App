import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import Modal from "react-native-modal";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <StackNavigator />
        <Modal/>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Optional: change as per your app design
  },
});
