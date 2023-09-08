import React, { useState, useEffect, FC } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'; // Importe o useNavigation do React Navigation
// import * as firebase from "firebase";
import { firebaseConfig } from "../FiraBaseConfig";
import { initializeApp } from "firebase/app";

initializeApp(firebaseConfig);

const SignUpScreen: FC<any> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFailed, setIsFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Para mostrar um indicador de carregamento
  const [error, setError] = useState(null); // Para armazenar mensagens de erro
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false); // Para mostrar o popup de sucesso

  useEffect(() => {
    // Inicialize o Firebase uma vez quando o componente for montado
    getAuth();
  }, []); // A array vazia [] garante que a inicialização ocorra apenas uma vez

  const showSuccessModal = () => {
    setIsSuccessModalVisible(true);
  };

  const handleSignUp = async () => {
    const auth = getAuth(); // Obtenha a instância de autenticação já inicializada
    setIsLoading(true); // Ativar o indicador de carregamento

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // O usuário foi cadastrado com sucesso
      setIsLoading(false); // Desativar o indicador de carregamento
      showSuccessModal(); // Mostrar o popup de confirmação
    } catch (error) {
      console.log('teste')
      setIsFailed(true);
      setIsLoading(false);
    }
  };

  const handleGoToLogin = () => {
    navigation.navigate('Login'); // Substitua 'Login' pelo nome de sua tela de login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={text => setPassword(text)}
        secureTextEntry
        value={password}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSignUp} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator color="white" size="small" />
        ) : (
          <Text style={styles.buttonText}>Cadastrar</Text>
        )}
      </TouchableOpacity>
      <Text style={styles.linkText} onPress={handleGoToLogin}>
        Já possui uma conta? Faça login.
      </Text>
      <Modal
        visible={isFailed}
        transparent={true}
        animationType='fade'
        onRequestClose={() => setIsFailed(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Ops!{'\n'}E-mail ou senha estão incorretos.</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setIsFailed(false)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal
        visible={isSuccessModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsSuccessModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Cadastro realizado com sucesso!</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setIsSuccessModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: 'Poppins-Bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#418B64',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: 10,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#418B64',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  linkText: {
    marginTop: 20,
    color: '#204330',
    fontSize: 16,
  },
});

export default SignUpScreen;
