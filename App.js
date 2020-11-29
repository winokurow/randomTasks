import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import subjectsReducer from './components/SubjectsReducer';
import Home from './components/Home';
import Subjects from './components/Subjects';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";

const store = createStore(subjectsReducer);
const Drawer = createDrawerNavigator();


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={ Home } options={{ drawerLabel: 'Random subject' }} />
          <Drawer.Screen name="Subjects" component={ Subjects } options={{ drawerLabel: 'Manage subjects' }} />
        </Drawer.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}



export default App;
