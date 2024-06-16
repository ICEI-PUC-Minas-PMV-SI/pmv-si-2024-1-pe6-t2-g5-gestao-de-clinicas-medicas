import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

// Importe as telas que deseja navegar
import ConsultasScreen from './MenuScreen.js';
import AgendamentoScreen from './AgendamentoScreen.js';
import MeusDadosScreen from './MeusDadosScreen.js';

const Tab = createBottomTabNavigator();

const Navigation = ({ token }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Consultas') {
            iconName = 'stethoscope';
          } else if (route.name === 'Agendamento') {
            iconName = 'calendar-alt';
          } else if (route.name === 'MeusDados') {
            iconName = 'user';
          }

          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: '#000',
        style: {
          backgroundColor: 'black',
        },
        tabStyle: {
          backgroundColor: 'black',
        },
      }}
    >
      <Tab.Screen name="Consultas" component={ConsultasScreen} />
      <Tab.Screen name="Agendamento" component={AgendamentoScreen}>
        {() => <AgendamentoScreen token={token} />}
      </Tab.Screen>
      <Tab.Screen name="MeusDados" component={MeusDadosScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;
