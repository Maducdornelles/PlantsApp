import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import CartScreen from '../screens/CartScreen';
import NavBar from '../components/NavBar';
import InitialScreen from '../screens/InitialScreen';
import { FC, ReactNode } from 'react';
import SignInScreen from '../screens/loginScreen/SingInScreen';
import SignUpScreen from '../screens/loginScreen/SingUpScreen';
import DetailsScreen from '../screens/DetailScreen/DetailScreen';
import ProfileScreen from '../screens/PerfilScreen/PerfilScreen';


const Stack = createNativeStackNavigator();

export interface RootStackParamList {
    Home: undefined
}

export default () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Initial">
                <Stack.Screen
                    name="Initial"
                    component={InitialScreen}
                    options={{ headerShown: false, animation: 'fade' }}
                />
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ headerShown: false, animation: 'fade' }}
                />
                <Stack.Screen
                    name="Favorite"
                    component={FavoriteScreen}
                    options={{ headerShown: false, animation: 'fade' }}
                />
                <Stack.Screen
                    name="Cart"
                    component={CartScreen}
                    options={{ headerShown: false, animation: 'fade' }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{ headerShown: false, animation: 'fade' }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{ headerShown: false, animation: 'fade' }}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={{ headerShown: false, animation: 'fade' }}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ headerShown: false, animation: 'fade' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

};
