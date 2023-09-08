import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, BannerImage, Title, FormContainer, SubTitle, ButtonWrapper, ButtonContainer, ButtonText } from './styles';

type RootStackParamList = {
  Home: undefined;
  LoginFirst: undefined;
  Login: undefined;
  Registration: undefined;
  PlantDetail: undefined;
  Cart: undefined;
};

type LoginScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'LoginFirst'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <Container>
      <ImageBackground source={require('../../assets/background.jpg')}>
        <BannerImage />
      </ImageBackground>

      <FormContainer>
        <Title>
          Plant{'\n'}Paradise
        </Title>
        <SubTitle>
          Find your favorite plants and{'\n'}help the environment
        </SubTitle>
        <ButtonWrapper>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <ButtonContainer>
              <ButtonText>Sign In</ButtonText>
            </ButtonContainer>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <ButtonContainer>
              <ButtonText>Sign Up</ButtonText>
            </ButtonContainer>
          </TouchableOpacity>
        </ButtonWrapper>
      </FormContainer>
    </Container>
  );
};

export default LoginScreen;
