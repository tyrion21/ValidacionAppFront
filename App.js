import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ParametersProvider } from './context/ParametersContext';

import Index from './app/index';
import Login from './app/login';
import Welcome from './app/welcome';
import Menu from './app/menu';
import Parameters from './app/parameters';
import Validacion from './app/menu/validacion';
import ControlPanel from './app/menu/controlPanel';
import Report from './app/menu/report';
import DetallePallet from './app/menu/tabs/DetallePallet';
import RechazoPallet from './app/menu/tabs/RechazoPallet';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ParametersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Index" component={Index} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Parameters" component={Parameters} />
          <Stack.Screen name="Validacion" component={Validacion} />
          <Stack.Screen name="ControlPanel" component={ControlPanel} />
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="DetallePallet" component={DetallePallet} />
          <Stack.Screen name="RechazoPallet" component={RechazoPallet} />
        </Stack.Navigator>
      </NavigationContainer>
    </ParametersProvider>
  );
};

export default App;