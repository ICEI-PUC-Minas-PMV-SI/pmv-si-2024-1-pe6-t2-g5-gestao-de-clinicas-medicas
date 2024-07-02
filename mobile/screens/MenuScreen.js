import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet, Image, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const ConsultasScreen = ({ route, navigation }) => {
  // Declaração dos estados necessários
  const [prontuarios, setProntuarios] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProntuario, setSelectedProntuario] = useState(null);
  const { token } = route.params;
  const { id } = route.params; 
  // Efeito para carregar os prontuários ao montar o componente
  useEffect(() => {
    fetch(`http://18.214.226.89/prontuarios/paciente/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(id)
        setProntuarios(data.data);
      })
      .catch(error => {
        console.error('Erro ao obter prontuários:', error);
      });
  }, [token, id]); 

  const handleProntuarioPress = (item) => {
    setSelectedProntuario(item);
    setModalVisible(true);
  };


  const formatarData = (data) => {
    const dataFormatada = new Date(data);
    const dia = dataFormatada.getDate().toString().padStart(2, '0');
    const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataFormatada.getFullYear();
    const horas = dataFormatada.getHours().toString().padStart(2, '0');
    const minutos = dataFormatada.getMinutes().toString().padStart(2, '0');

    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
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
              <Text style={styles.modalInfoBold}>Autenticação:</Text> {selectedProntuario.hash_medico || 'Nenhuma observação.'}
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
            <TouchableOpacity onPress={() => handleProntuarioPress(item)}>
              <View style={styles.card}>
                <Text style={styles.cardText}>Data: {formatarData(item.data)}</Text>
                <Text style={styles.cardText}>Médico: {item.nome_medico}</Text>
                <Text style={styles.cardText}>Especialidade: {item.especialidade}</Text>
                <Text style={styles.cardText}>Status: {item.status}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
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
      {/* Barra de navegação inferior */}
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

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007954',
    alignItems: 'center',
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
    marginVertical: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  noProntuariosText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
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
    marginBottom: 6,
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
    paddingBottom: 10,
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
    padding: 12,
    borderRadius: 5,
  },
  modalCloseButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
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
