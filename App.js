import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import Home from './components/Home';
import Subjects from './components/Subjects';
import Backup from './components/Backup';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './configureStore'
const { persistor, store } = configureStore()

const Drawer = createDrawerNavigator();


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={ Home } options={{ drawerLabel: 'Random subject' }} />
            <Drawer.Screen name="Subjects" component={ Subjects } options={{ drawerLabel: 'Manage subjects' }} />
            <Drawer.Screen name="Backup" component={ Backup } options={{ drawerLabel: 'Backup' }} />
          </Drawer.Navigator>
        </NavigationContainer>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
