import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, StatusBar, ScrollView, Modal, TextInput, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

const ConsultasScreen = ({ route, navigation }) => {
  const [consultas, setConsultas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [consultaAtual, setConsultaAtual] = useState(null);
  const [editable, setEditable] = useState(false); // Estado para controlar se a consulta é editável
  const { token } = route.params;
  const { id } = route.params;

  useEffect(() => {
    fetch(`http://18.214.226.89/consultas/paciente/${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setConsultas(data.data);
      })
      .catch(error => {
        console.error('Erro ao obter consultas:', error);
      });
  }, [token, id]);

  const handleEditConsulta = (consulta) => {
    // Verifica se a consulta pode ser editada (status não é 'Finalizado' ou 'Cancelado')
    const isEditable = consulta.status !== 'FINALIZADO' && consulta.status !== 'CANCELADO';
    setEditable(isEditable);
    setConsultaAtual({ ...consulta });
    setModalVisible(true);
  };

  const handleSaveChanges = () => {
    
    consultaAtual.posicao = '1';
    const formattedConsulta = {
      ...consultaAtual,
      horario_inicio: formatTime(consultaAtual.horario_inicio),
      horario_fim: formatTime(consultaAtual.horario_fim),
    };
    console.log(formattedConsulta)
    fetch(`http://18.214.226.89/consultas/${consultaAtual.id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedConsulta),
    })
      .then(response => response.json())
      .then(data => {
        if (data.errors) {
          console.log(data.errors)
          Alert.alert('Erro ao atualizar a consulta:', JSON.stringify(data.errors));
        } else {
          Alert.alert('Sucesso', 'Consulta atualizada com sucesso.');
          setModalVisible(false);
          
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

  const handleStatusChange = (value) => {
    
    if (value === 'Cancelado') {
      Alert.alert(
        'Confirmar Cancelamento',
        'Tem certeza que deseja cancelar esta consulta?',
        [
          { text: 'Sair', style: 'cancel' },
          { text: 'Confirmar', onPress: () => handleChangeText('status', value) }
        ]
      );
    } else {
      handleChangeText('status', value);
    }
  };

  const handleChangeText = (key, value) => {
    setConsultaAtual(prevConsulta => ({
      ...prevConsulta,
      [key]: value,
    }));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
  };

  const formatDate2 = (dateString) => {
    const valores = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', valores);
  };

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    const formattedHours = hours.padStart(2, '0');
    const formattedMinutes = minutes.padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo 2.png')} style={styles.logo} />
      <Text style={styles.titleText}>Minhas Consultas</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {consultas.map((consulta, index) => (
          <TouchableOpacity key={index} style={styles.consultaContainer} onPress={() => handleEditConsulta(consulta)}>
            <Text style={styles.consultaText}>Data: {formatDate(consulta.data)}</Text>
            <Text style={styles.consultaText}>Hora: {consulta.horario_inicio.slice(0, 5)} - {consulta.horario_fim.slice(0, 5)}</Text>
            <Text style={styles.consultaText}>Status: {consulta.status}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.navigation}>
        <NavigationItem icon="list" text="Prontuários" onPress={() => navigation.navigate('Consultas', { token, id })} />
        <NavigationItem icon="medical" text="Consultas" onPress={() => navigation.navigate('MinhasConsultas', { token, id })} />
        <NavigationItem icon="calendar-outline" text="Agendamento" onPress={() => navigation.navigate('Agendamento', { token, id })} />
        <NavigationItem icon="person-outline" text="Meus Dados" onPress={() => navigation.navigate('MeusDados', { token, id })} />
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
                  value={formatDate2(consultaAtual.data)} 
                  editable={false}
                />
                <Text style={styles.fieldName}>Horário de Início:</Text>
                <TextInput
                  style={styles.fieldValue}
                  value={consultaAtual.horario_inicio} 
                  onChangeText={text => handleChangeText('horario_inicio', text)}
                  placeholder="HH:MM"
                  editable={editable}
                />
                <Text style={styles.fieldName}>Horário de Fim:</Text>
                <TextInput
                  style={styles.fieldValue}
                  value={consultaAtual.horario_fim} 
                  onChangeText={text => handleChangeText('horario_fim', text)}
                  placeholder="HH:MM"
                  editable={editable}
                />
                <Text style={styles.fieldName}>Status:</Text>
                <RNPickerSelect
                  placeholder={{}}
                  items={[
                    { label: 'Aguardando Consulta', value: 'Aguardando Consulta' },
                    { label: 'Cancelar', value: 'Cancelado' },
                  ]}
                  value={consultaAtual.status}
                  onValueChange={(value) => handleStatusChange(value)}
                  disabled={!editable}
                />
                <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
                  <Text style={styles.buttonText}>Salvar Alterações</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Sair</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
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
    width: '100%',
  },
  consultaContainer: {
    backgroundColor: '#f1f1f1',
    width: '80%',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
  },
  consultaText: {
    fontSize: 15,
    marginVertical: 5,
    color: '#007954',
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
    borderRadius: 10,
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
  navigationItem: {
    alignItems: 'center',
  },
  navigationItemText: {
    color: 'white',
    marginTop: 5,
  },
});

export default ConsultasScreen;
