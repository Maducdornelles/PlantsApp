import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen'; 
import PlantDetailScreen from './screens/PlantDetailScreen';
import CartScreen from './screens/CartScreen';
import LoginScreenFirst from './screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginFirst"
          component={LoginScreenFirst}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={SignInScreen} // Altere o componente para SignInScreen
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={SignUpScreen} // Adicione a rota para SignUpScreen
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlantDetail"
          component={PlantDetailScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
