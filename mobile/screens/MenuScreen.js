import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Image, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ConsultasScreen = ({ route, navigation }) => {
  const [prontuarios, setProntuarios] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProntuario, setSelectedProntuario] = useState(null);
  const { token } = route.params;

  useEffect(() => {
    console.log("token", token)
    fetch('http://18.214.226.89/prontuarios/paciente/2', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        setProntuarios(data.data);
      })
      .catch(error => {
        console.error('Erro ao obter prontuários:', error);
      });
  }, [token]);

  const handleConsultaPress = (item) => {
    setSelectedProntuario(item);
    setModalVisible(true);
  };

  const renderModalContent = () => {
    return (
      <View style={styles.modalContent}>
        {selectedProntuario && (
          <>
            <Text style={styles.modalHeaderText}>
              <Text style={styles.modalHeaderBold}>Especialidade:</Text> {selectedProntuario.especialidade}
            </Text>
            <Text style={styles.modalHeaderText}>
              <Text style={styles.modalHeaderBold}>Médico:</Text> {selectedProntuario.nome_medico}
            </Text>
            <Text style={styles.modalHeaderText}>
              <Text style={styles.modalHeaderBold}>Data da Consulta:</Text> {formatarData(selectedProntuario.data)}
            </Text>
            <Text style={styles.modalHeaderText}>
              <Text style={styles.modalHeaderBold}>Horário:</Text> {selectedProntuario.horario_inicio} - {selectedProntuario.horario_fim}
            </Text>
            <Text style={styles.modalInfoText}>
              <Text style={styles.modalInfoBold}>Histórico:</Text> {selectedProntuario.historico_medico}
            </Text>
            <Text style={styles.modalInfoText}>
              <Text style={styles.modalInfoBold}>Diagnóstico:</Text> {selectedProntuario.diagnostico}
            </Text>
            <Text style={styles.modalInfoText}>
              <Text style={styles.modalInfoBold}>Exames:</Text> {selectedProntuario.exames}
            </Text>
            <Text style={styles.modalInfoText}>
              <Text style={styles.modalInfoBold}>Prescrições:</Text> {selectedProntuario.prescricoes}
            </Text>
            <Text style={styles.modalInfoText}>
              <Text style={styles.modalInfoBold}>Tratamentos:</Text> {selectedProntuario.tratamentos}
            </Text>
            <Text style={styles.modalInfoText}>
              <Text style={styles.modalInfoBold}>Observações:</Text> {selectedProntuario.observacoes || 'Nenhuma observação.'}
            </Text>
            <Text style={styles.modalInfoText}>
              <Text style={styles.modalInfoBold}>Autenticação:</Text> {selectedProntuario.has || 'Nenhuma observação.'}
            </Text>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseButtonText}>Fechar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    );
  };

  const formatarData = (data) => {
    const dataFormatada = new Date(data);
    return `${dataFormatada.getDate()}/${dataFormatada.getMonth() + 1}/${dataFormatada.getFullYear()}`;
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo 2.png')} style={styles.logo} />
      <Text style={styles.titleText}>Meus Prontuários</Text>
      {prontuarios.length === 0 ? (
        <Text style={styles.noProntuariosText}>Ainda não há prontuários</Text>
      ) : (
        <FlatList
          data={prontuarios}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleConsultaPress(item)}>
              <View style={styles.card}>
                <Text>Data: {item.data}</Text>
                <Text>Médico: {item.nome_medico}</Text>
                <Text>Especialidade: {item.especialidade}</Text>
                <Text>Status: {item.status}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
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
    paddingTop: StatusBar.currentHeight,

  },
  logo: {
    width: 150,
    height: 80,
    marginBottom: 20,
    marginTop: 15,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 25,
    margin: 20,
    color: 'white',
  },
  noProntuariosText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 8, // Reduzir o padding vertical
    marginVertical: 10, // Reduzir o espaço vertical entre os cards
    borderRadius: 10,
    width: '100%', // Aumentar a largura dos cards
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
  },
  modalHeaderBold: {
    fontWeight: 'bold',
  },
  modalInfoText: {
    marginBottom: 5,
  },
  modalInfoBold: {
    fontWeight: 'bold',
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
});

export default ConsultasScreen;
