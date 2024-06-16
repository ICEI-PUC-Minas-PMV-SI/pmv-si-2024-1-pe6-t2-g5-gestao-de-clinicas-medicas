import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen'; 
import AgendamentoScreen from './screens/AgendamentoScreen'; 
import MeusDadosScreen from './screens/MeusDadosScreen'; 
import MinhasConsultasScreen from './screens/ConsultasScreen'; 


const Stack = createStackNavigator();

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleLogin = () => {
    const credenciais = {
      email,
      password,
      tipo: 'FUNCIONARIO', // Credencial fixa
    };

    fetch('http://18.214.226.89/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credenciais),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Resposta da API:', data);
        if (data.token) {
          
          navigation.navigate('Consultas', { token: data.token });
        }else{
          Alert.alert('Credenciais Inválidas', 'Por favor, verifique suas credenciais e tente novamente.');
        }
      })
      .catch(error => {
        console.error('Erro ao enviar credenciais:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo 2.png')} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
      <Text style={[styles.link, styles.link2]} onPress={() => { /* lógica para esquecer a senha */ }}>
        Esqueci minha senha
      </Text>
      <View style={styles.firstAccessContainer}>
        <Text style={styles.firstAccessText}>Primeiro acesso? </Text>
        <Text style={styles.link} onPress={() => { /* lógica para cadastrar */ }}>
          Cadastrar
        </Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Consultas"
          component={MenuScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Agendamento"
          component={AgendamentoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MeusDados"
          component={MeusDadosScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MinhasConsultas"
          component={MinhasConsultasScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007954',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 170,
    height: 70,
    marginBottom: 32,
  },
  input: {
    width: '70%',
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 12,
    backgroundColor: '#fff',
    color: '#007954',
  },
  button: {
    width: '40%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#007954',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  link2: {
    marginTop: 20,
  },
  firstAccessContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  firstAccessText: {
    color: '#fff',
    marginRight: 2,
  },
});
