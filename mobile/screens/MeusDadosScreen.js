import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, StatusBar, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MeusDadosScreen = ({ route, navigation }) => {
  const [cliente, setCliente] = useState(null);
  const { token } = route.params;
  const { id } = route.params;


  useEffect(() => {
    fetch(`http://18.214.226.89/pacientes/id/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        const fetchedCliente = data.data[0];
        fetchedCliente.data_nascimento = formatDate(fetchedCliente.data_nascimento);
        setCliente(fetchedCliente);
      })
      .catch(error => {
        console.error('Erro ao obter dados do cliente:', error);
      });
  }, [token, id]);

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };
  
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    return `${year}-${month}-${day}`;
  };
  
  const handleSaveChanges = () => {
    const clienteToSave = {
      ...cliente,
      data_nascimento: parseDate(cliente.data_nascimento)
    };

    fetch(`http://18.214.226.89/pacientes/${cliente.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(clienteToSave),
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          Alert.alert('Erro ao atualizar os dados:', data.errors);
        } else {
          Alert.alert('Sucesso', 'Dados atualizados com sucesso.');
        }
      })
      .catch(error => {
        console.error('Erro ao salvar alterações:', error);
      });
  };

  const handleChangeText = (key, value) => {
    setCliente(prevCliente => ({
      ...prevCliente,
      [key]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo 2.png')} style={styles.logo} />
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {cliente && (
          <>
            <Text style={styles.titleText}>Meus Dados</Text>
            <Text style={styles.fieldName}>Nome:</Text>
            <View style={styles.fieldContainer}>
              <TextInput
                style={styles.fieldValue}
                value={cliente.nome}
                onChangeText={text => handleChangeText('nome', text)}
              />
            </View>
            <Text style={styles.fieldName}>Data de Nascimento:</Text>
            <View style={styles.fieldContainer}>
              <TextInput
                style={styles.fieldValue}
                value={cliente.data_nascimento}
                onChangeText={text => handleChangeText('data_nascimento', text)}
              />
            </View>
            <Text style={styles.fieldName}>CPF:</Text>
            <View style={styles.fieldContainer}>
              <TextInput
                style={styles.fieldValue}
                value={cliente.cpf}
                onChangeText={text => handleChangeText('cpf', text)}
              />
            </View>
            <Text style={styles.fieldName}>Telefone:</Text>
            <View style={styles.fieldContainer}>
              <TextInput
                style={styles.fieldValue}
                value={cliente.telefone}
                onChangeText={text => handleChangeText('telefone', text)}
              />
            </View>
            <Text style={styles.fieldName}>Logradouro:</Text>
            <View style={styles.fieldContainer}>
              <TextInput
                style={styles.fieldValue}
                value={cliente.logradouro}
                onChangeText={text => handleChangeText('logradouro', text)}
              />
            </View>
            <Text style={styles.fieldName}>Número:</Text>
            <View style={styles.fieldContainer}>
              <TextInput
                style={styles.fieldValue}
                value={cliente.numero}
                onChangeText={text => handleChangeText('numero', text)}
              />
            </View>
            <Text style={styles.fieldName}>Bairro:</Text>
            <View style={styles.fieldContainer}>
              <TextInput
                style={styles.fieldValue}
                value={cliente.bairro}
                onChangeText={text => handleChangeText('bairro', text)}
              />
            </View>
            <Text style={styles.fieldName}>Cidade:</Text>
            <View style={styles.fieldContainer}>
              <TextInput
                style={styles.fieldValue}
                value={cliente.cidade}
                onChangeText={text => handleChangeText('cidade', text)}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
              <Text style={styles.buttonText}>Salvar Alterações</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
      <View style={styles.navigation}>
        <NavigationItem icon="list" text="Prontuários" onPress={() => navigation.navigate('Consultas', { token, id })} />
        <NavigationItem icon="medical" text="Consultas" onPress={() => navigation.navigate('MinhasConsultas', { token, id })} />
        <NavigationItem icon="calendar-outline" text="Agendamento" onPress={() => navigation.navigate('Agendamento', { token, id })} />
        <NavigationItem icon="person-outline" text="Meus Dados" onPress={() => navigation.navigate('MeusDados', { token, id })} />
      </View>
    </View>
  );
};

const NavigationItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.navigationItem} onPress={onPress}>
    <Ionicons name={icon} size={32} color="white" />
    <Text style={styles.navigationItemText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007954',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    paddingBottom: 10,
  },
  logo: {
    width: 150,
    height: 80,
    marginBottom: 20,
    resizeMode: 'contain',
    marginTop: 15,
  },
  consultasButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  consultasButtonText: {
    color: '#007954',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleText: {
    fontSize: 25,
    marginVertical: 20,
    color: 'white',
  },
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  fieldName: {
    fontSize: 15,
    marginVertical: 5,
    color: 'white',
  },
  fieldValue: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    flexGrow: 1,
    marginLeft: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText: {
    color: '#007954',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  navigationItem: {
    alignItems: 'center',
  },
  navigationItemText: {
    color: 'white',
    marginTop: 5,
  },
});

export default MeusDadosScreen;
