import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, ScrollView, Modal, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ConsultasScreen = ({ route, navigation }) => {
  const [consultas, setConsultas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [consultaAtual, setConsultaAtual] = useState(null);
  const { token } = route.params;

  useEffect(() => {
    fetch('http://18.214.226.89/consultas/paciente/10', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setConsultas(data.data); // Assume que o servidor retorna uma lista de consultas
      })
      .catch(error => {
        console.error('Erro ao obter consultas:', error);
      });
  }, [token]);

  const handleEditConsulta = (consulta) => {
    setConsultaAtual({ ...consulta }); 
    setModalVisible(true);
  };

  const handleSaveChanges = () => {
    consultaAtual.posicao = '1';

    fetch(`http://18.214.226.89/consultas/${consultaAtual.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(consultaAtual),
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          Alert.alert('Erro ao atualizar a consulta:', JSON.stringify(data.errors));
        } else {
          Alert.alert('Sucesso', 'Consulta atualizada com sucesso.');
          setModalVisible(false);
          // Atualizar a lista de consultas
          const updatedConsultas = consultas.map(consulta =>
            consulta.id === consultaAtual.id ? consultaAtual : consulta
          );
          setConsultas(updatedConsultas);
        }
      })
      .catch(error => {
        console.error('Erro ao salvar alterações:', error);
      });
  };

  const handleChangeText = (key, value) => {
    setConsultaAtual(prevConsulta => ({
      ...prevConsulta,
      [key]: value,
    }));
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo 2.png')} style={styles.logo} />
      <Text style={styles.titleText}>Minhas Consultas</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {consultas.map((consulta, index) => (
          <TouchableOpacity key={index} style={styles.consultaContainer} onPress={() => handleEditConsulta(consulta)}>
            <Text style={styles.consultaText}>Data: {consulta.data}</Text>
            <Text style={styles.consultaText}>Hora: {consulta.horario_inicio} - {consulta.horario_fim}</Text>
            <Text style={styles.consultaText}>Status: {consulta.status}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Consultas', { token })}>
          <Ionicons name="list" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Agendamento', { token })}>
          <Ionicons name="calendar-outline" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MeusDados', { token })}>
          <Ionicons name="person-outline" size={32} color="white" />
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Editar Consulta</Text>
            {consultaAtual && (
              <>
                <Text style={styles.fieldName}>Data:</Text>
                <TextInput
                  style={styles.fieldValue}
                  value={consultaAtual.data} 
                  onChangeText={text => handleChangeText('data', text)}
                />
                <Text style={styles.fieldName}>Horário de Início:</Text>
                <TextInput
                  style={styles.fieldValue}
                  value={consultaAtual.horario_inicio} 
                  onChangeText={text => handleChangeText('horario_inicio', text)}
                  placeholder="HH:MM"
                />
                <Text style={styles.fieldName}>Horário de Fim:</Text>
                <TextInput
                  style={styles.fieldValue}
                  value={consultaAtual.horario_fim}
                  onChangeText={text => handleChangeText('horario_fim', text)}
                  placeholder="HH:MM"
                />
                <Text style={styles.fieldName}>Status:</Text>
                <TextInput
                  style={styles.fieldValue}
                  value={consultaAtual.status}
                  onChangeText={text => handleChangeText('status', text)}
                />
                <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
                  <Text style={styles.buttonText}>Salvar Alterações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007954',
    alignItems: 'center',
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
  titleText: {
    fontSize: 25,
    color: 'white',
    marginBottom: 15
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    width: '90%',
  },
  consultaContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    width: '100%',
  },
  consultaText: {
    color: '#007954',
    fontSize: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    color: '#007954',
  },
  fieldName: {
    fontSize: 15,
    marginVertical: 5,
    color: '#007954',
  },
  fieldValue: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007954',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ConsultasScreen;
