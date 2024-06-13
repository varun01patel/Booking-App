import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/Confirm.png')} 
        style={styles.image}
      />
      <Text style={styles.text}>Booking Confirmed</Text>
    </View>
  );
};

export default ConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: 'white',
    fontSize: 24,
    marginTop: 20,
  },
});
