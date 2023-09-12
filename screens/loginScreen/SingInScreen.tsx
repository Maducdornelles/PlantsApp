import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importe os módulos corretos do Firebase Authentication
import { firebaseConfig } from '../../FirebaseConfig';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const auth = getAuth(firebaseConfig); // Obtenha a instância de autenticação do Firebase
  const navigation = useNavigation(); // Obtenha o objeto de navegação

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Redirecione o usuário para a tela "Home" após o login bem-sucedido
      navigation.navigate('Home');

      console.log('Usuário logado com sucesso!', userCredential.user);
    } catch (error) {
      setError(error.message);
      console.error('Erro ao fazer login:', error);
    }
};

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.customHeader}>
          <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonLabel}>&lt;</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sign In</Text>
        </View>
      </View>
      <View style={styles.formContainer}>
        {error && <Text style={styles.error}>{error}</Text>}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-MAIL</Text>
          <TextInput
            style={styles.input}
            placeholder="samantha@email.com"
            placeholderTextColor="#969595"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>PASSWORD</Text>
          <TextInput
            style={styles.input}
            placeholder="*********"
            placeholderTextColor="#969595"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
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
    paddingLeft: 12,
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
    paddingTop: 32,
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
    fontFamily: 'Poppins-Regular',
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
});

export default SignInScreen;
