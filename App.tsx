import React, { useEffect, useState } from 'react';
import { useFonts } from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Navigation from './navigation';

const Stack = createStackNavigator();

const App: React.FC = () => {
  const [ fontsLoaded ] = useFonts({
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'SourceSans-Regular': require('./assets/fonts/SourceSans-Regular.ttf')
  })

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Navigation />
  );
};

export default App;
