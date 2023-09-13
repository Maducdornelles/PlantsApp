import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
  // Função para navegar para a tela "Initial" quando o link "Sair" for pressionado
  const handleLogout = () => {
    navigation.navigate('Initial'); // Substitua 'Initial' pelo nome correto da tela que você deseja navegar.
  };

  return (
    <View style={[styles.container, { width, height }]}>
      <View style={styles.circle}></View>
      <View style={styles.header}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>maria</Text>
        <Text style={styles.profileEmail}>maria@maria.com</Text>
      </View>
      <View style={styles.line}></View>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 40,
    overflow: 'hidden',
    alignItems: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    position: 'absolute',
    backgroundColor: '#969595',
    borderRadius: 300,
    borderWidth: 1,
    borderColor: 'black',
    left: 24,
    top: 196,
    zIndex: 1,
  },
  header: {
    marginTop: 40,
    marginBottom: 24,
  },
  title: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    lineHeight: 24,
    bottom: -25,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileName: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    lineHeight: 24,
    bottom: -130,
  },
  profileEmail: {
    color: '#969595',
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 14,
    marginTop: 4,
    bottom: -135,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginTop: 8,
    bottom: -158,
  },
  logoutText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 24,
    marginBottom: 16,
    bottom: -175,
    left: -165,
  },
});

export default ProfileScreen;
