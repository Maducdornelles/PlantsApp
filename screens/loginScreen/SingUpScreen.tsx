import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseConfig } from '../../FirebaseConfig';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState(null);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const auth = getAuth(firebaseConfig);

  const handleSignUp = async () => {
    try {
      if (password !== passwordConfirmation) {
        console.log('As senhas não são iguais');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      setError(null);

      // Chame a função para exibir o modal de sucesso
      toggleSuccessModal(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleSuccessModal = (isVisible) => {
    setIsSuccessModalVisible(isVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        {/* Seu código de cabeçalho */}
      </View>
      <View style={styles.formContainer}>
        {error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-MAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu endereço de e-mail"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>SENHA</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CONFIRMAR SENHA</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha novamente"
            secureTextEntry
            value={passwordConfirmation}
            onChangeText={(text) => setPasswordConfirmation(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      {/* Modal de Sucesso */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isSuccessModalVisible}
        onRequestClose={() => {
          toggleSuccessModal(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.successText}>Usuário cadastrado com sucesso!</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => {
                toggleSuccessModal(false);
              }}
            >
              <Text style={styles.closeButtonText}>Fechar</Text>
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
    backgroundColor: 'white',
    borderRadius: 40,
    overflow: 'hidden',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 0,
  },
  headerContainer: {
    width: '120%',
    height: 98,
    marginBottom: 32,
  },
  customHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    paddingHorizontal: 24,
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4,
  },
  backButton: {
    position: 'absolute',
    left: 24,
    top: 40,
  },
  backButtonLabel: {
    fontSize: 32,
    color: 'black',
  },
  headerTitle: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    lineHeight: 24,
    marginBottom: -30,
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    marginVertical: 8,
  },
  label: {
    color: '#969595',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 15,
  },
  input: {
    width: '100%',
    height: 48,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 0.50,
    borderColor: 'black',
    paddingHorizontal: 16,
  },
  button: {
    width: '100%',
    height: 48,
    backgroundColor: '#418B64',
    borderRadius: 8,
    marginTop: 24,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'SourceSans-Regular',
    fontWeight: '400',
    lineHeight: 24,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
    marginBottom: 16,
  },
  // Estilos para o modal de sucesso
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  successText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: '#418B64',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
