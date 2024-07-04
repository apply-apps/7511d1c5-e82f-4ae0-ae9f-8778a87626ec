// Filename: index.js
// Combined code from all files

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome to the Fairy Tale App</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Story')}
      >
        <Text style={styles.buttonText}>Start the Fairy Tale</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function StoryScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.text}>Once upon a time, in a faraway land, there was a beautiful and enchanted forest...</Text>
        <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />
        <Text style={styles.text}>Deep in the heart of the forest, there lived a kind and gentle fairy named Faye...</Text>
        <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />
        <Text style={styles.text}>Faye had a special gift - she could talk to animals and help plants grow...</Text>
        <Image source={{ uri: 'https://picsum.photos/200/300' }} style={styles.image} />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Ending')}
        >
          <Text style={styles.buttonText}>Continue to Ending</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function EndingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>The End</Text>
      <Text style={styles.text}>And so, Faye continued to bring joy and harmony to the forest, living happily ever after...</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#ce8abd',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Story" component={StoryScreen} />
        <Stack.Screen name="Ending" component={EndingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}