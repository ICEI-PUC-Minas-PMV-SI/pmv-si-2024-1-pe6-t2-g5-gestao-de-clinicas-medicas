import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Image, Alert, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AgendamentoScreen = ({ route, navigation }) => {
  const [medicos, setMedicos] = useState([]);
  const [horarios, setHorarios] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMedico, setSelectedMedico] = useState(null);
  const [selectedDia, setSelectedDia] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null);
  const { token } = route.params;
  const { id } = route.params;

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
          console.log(data)
          setMedicos(data.data);
        })
        .catch(error => {
          console.error('Erro ao obter médicos:', error);
        });
    }
  }, [token, id]);

  const handleMedicoPress = (medico) => {
    setSelectedMedico(medico);
    fetchHorarios(medico.id);
  };

  const fetchHorarios = (medicoId) => {
    fetch(`http://18.214.226.89/horarios/${medicoId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        const horariosPorDia = data.data.reduce((acc, horario) => {

          if (horario.disponivel === 'SIM') {
            acc[horario.dia] = [];
            acc[horario.dia].push(horario); 
          }
          return acc;
        }, {});
        setHorarios(horariosPorDia);
        setModalVisible(true);
      })
      .catch(error => {
        console.error('Erro ao obter horários:', error);
      });
  };

  const handleDiaPress = (dia) => {
    setSelectedDia(dia);
    setSelectedHorario(null); 
  };

  const handleHorarioPress = (horario) => {
    setSelectedHorario(horario);
  };

  const handleAgendarConsulta = () => {
    if (!selectedMedico || !selectedHorario) {
      Alert.alert('Erro', 'Selecione um médico, dia e horário antes de agendar.');
      return;
    }

    const consultaData = {
      idmedico: selectedMedico.id,
      idpaciente: id, 
      data: selectedDia, 
      horario_inicio: formatHour(selectedHorario.horario_inicio),
      horario_fim: formatHour(selectedHorario.horario_fim),
      posicao: '1',
      status: 'AGUARDANDO CONSULTA',
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
        atualizaHorario(selectedHorario.id);
        Alert.alert('Sucesso', 'Consulta agendada com sucesso.');
        setModalVisible(false);
      })
      .catch(error => {
        console.error('Erro ao agendar consulta:', error);
        Alert.alert('Erro', 'Erro ao agendar consulta. Por favor, tente novamente mais tarde.');
      });
  };

  const atualizaHorario = (horarioId) => {
    console.log(token)
    const dadosAtualizacao = {
      dia:selectedDia,
      horario_inicio: formatHour(selectedHorario.horario_inicio), 
      horario_fim: formatHour(selectedHorario.horario_fim), 
      idmedico: selectedMedico.id,
      disponivel: 'NAO'
    };
    console.log(dadosAtualizacao)
    fetch(`http://18.214.226.89/horarios/${horarioId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosAtualizacao), 
    })
      .then(response => response.json())
      .then(data => {
        console.log('Horário marcado como indisponível:', data);
       
      })
      .catch(error => {
        console.error('Erro ao atualizar horário:', error);
      });
  };

  const formatHour = (hourString) => {
    const [hours, minutes] = hourString.split(':');
    return `${hours}:${minutes}`;
  };

  const renderDias = () => {
    return (
      <View style={styles.diasContainer}>
        {Object.keys(horarios).map((dia, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.diaButton, selectedDia === dia ? styles.selectedDia : null]}
            onPress={() => handleDiaPress(dia)}
          >
            <Text style={styles.diaText}>{formatDate(dia)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const renderHorarios = () => {
    if (!selectedDia || !horarios[selectedDia]) {
      return (
        <View style={styles.horariosContainer}>
          <Text style={styles.horarioText}>Nenhum horário disponível para este dia.</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.horariosContainer}>
        {horarios[selectedDia].map((horario, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.horarioButton, selectedHorario && selectedHorario.id === horario.id ? styles.selectedHorario : null]}
            onPress={() => handleHorarioPress(horario)}
          >
            <Text style={styles.horarioText}>{horario.horario_inicio} às {horario.horario_fim}</Text>
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
            {renderDias()}
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
              <Text style={styles.cardText}>Nome: {item.nome}</Text>
              <Text style={styles.cardText}>Especialidade: {item.especialidade}</Text>
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
    padding: 15,
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
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    marginBottom: 10,
  },
  navigationItem: {
    alignItems: 'center',
  },
  navigationItemText: {
    color: 'white',
    marginTop: 5,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: '#007954',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  diasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  diaButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  selectedDia: {
    backgroundColor: '#007954',
  },
  diaText: {
    color: '#000',
  },
  horariosContainer: {
    marginTop: 20,
  },
  horarioButton: {
    backgroundColor: '#eee',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  selectedHorario: {
    backgroundColor: '#007954',
  },
  horarioText: {
    color: '#000',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 20,
  },
});

export default AgendamentoScreen;
