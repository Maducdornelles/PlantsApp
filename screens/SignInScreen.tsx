import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importe as funções de autenticação do Firebase

type SignInScreenProps = {
  navigation: StackNavigationProp<any>; // Substitua 'any' pelo tipo correto se possível
};

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    try {
      const auth = getAuth(); // Obtenha a instância de autenticação
      await signInWithEmailAndPassword(auth, email, password); // Faça a autenticação com email e senha
      // Autenticação bem-sucedida, navegue para a tela Home
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        value={password}
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Registration')}
      >
        <Text style={styles.createAccountText}>Criar sua conta</Text>
      </TouchableOpacity>
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
    fontFamily: 'SourceSans-Regular', // Defina a fonte
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
  createAccountText: {
    marginTop: 10,
    color: '#204330', // Cor do link
  },
});

export default SignInScreen;
