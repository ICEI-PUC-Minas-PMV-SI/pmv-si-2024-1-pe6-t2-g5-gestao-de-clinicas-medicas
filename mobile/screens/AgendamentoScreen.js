import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Image, Alert, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AgendamentoScreen = ({ route, navigation }) => {
  const [medicos, setMedicos] = useState([]);
  const [horarios, setHorarios] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null);
  const { token } = route.params;

  useEffect(() => {
    if (token) {
      fetch('http://18.214.226.89/medicos', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          setMedicos(data.data);
        })
        .catch(error => {
          console.error('Erro ao obter médicos:', error);
        });
    }
  }, [token]);

  const handleMedicoPress = (medico) => {
    setSelectedMedico(medico);
    fetchHorarios(medico.id);
  };

  const fetchHorarios = (medicoId) => {
    fetch(`http://18.214.226.89/horarios/`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setHorarios(data.data);
        setModalVisible(true);
      })
      .catch(error => {
        console.error('Erro ao obter horários:', error);
      });
  };

  const handleHorarioPress = (horario) => {
    setSelectedHorario(horario);
  };

  const handleAgendarConsulta = () => {
    if (!selectedMedico || !selectedHorario) {
      Alert.alert('Erro', 'Selecione um médico e um horário antes de agendar.');
      return;
    }

    const consultaData = {
      idmedico: 5,
      idpaciente: 1, // Substitua pelo ID do paciente real
      data: '2024-06-30', // Substitua pela data real
      horario_inicio: selectedHorario.horario_inicio,
      horario_fim: selectedHorario.horario_fim,
      posicao: '5',
      status: 'Pendente',
    };

    fetch('http://18.214.226.89/consultas', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(consultaData),
    })
      .then(response => response.json())
      .then(data => {
        Alert.alert('Sucesso', 'Consulta agendada com sucesso.');
        setModalVisible(false);
      })
      .catch(error => {
        console.error('Erro ao agendar consulta:', error);
        Alert.alert('Erro', 'Erro ao agendar consulta. Por favor, tente novamente mais tarde.');
      });
  };

  const renderHorarios = () => {
    return (
      <View style={styles.horariosContainer}>
        {horarios.map((horario, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.horarioButton, selectedHorario && selectedHorario.id === horario.id ? styles.selectedHorario : null]}
            onPress={() => handleHorarioPress(horario)}
          >
            <Text style={styles.horarioText}>{horario.dia} - {horario.horario_inicio} às {horario.horario_fim}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderModalContent = () => {
    return (
      <View style={styles.modalContent}>
        {selectedMedico && (
          <>
            <Text style={styles.modalHeaderText}>Horários Disponíveis para {selectedMedico.nome}</Text>
            {renderHorarios()}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => handleAgendarConsulta()}
            >
              <Text style={styles.modalCloseButtonText}>Agendar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo 2.png')} style={styles.logo} />

      <Text style={styles.titleText}>Médicos Disponíveis</Text>
      <FlatList
        data={medicos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMedicoPress(item)}>
            <View style={styles.card}>
              <Text>Nome: {item.nome}</Text>
              <Text>Especialidade: {item.especialidade}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {renderModalContent()}
        </View>
      </Modal>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007954',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight
  },
  logo: {
    width: 150,
    height: 80,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalHeaderText: {
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalInfoText: {
    marginBottom: 5,
  },
  modalCloseButton: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#007954',
    padding: 10,
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 25,
    margin: 20,
    color: 'white'
  },
  horariosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  horarioButton: {
    backgroundColor: '#007954',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  selectedHorario: {
    backgroundColor: '#00543d', // Color when selected
  },
  horarioText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AgendamentoScreen;
