import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SavedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SavedScreen</Text>
    </SafeAreaView>
  );
}

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Optional: change as per your app design
  },
});
