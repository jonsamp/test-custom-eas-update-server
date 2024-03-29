import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import DogImage from './assets/dog.jpg';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={DogImage} style={styles.image} />
      <Text>This is an update!</Text>
      <Text>This adds more text for RTV 2!</Text>
      <StatusBar style='auto' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 120,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300 * 1.5,
    resizeMode: 'contain',
    marginBottom: 16,
  },
});
