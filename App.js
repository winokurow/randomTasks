import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import subjectsReducer from './components/SubjectsReducer';
import Home from './components/Home';
import Subjects from './components/Subjects';
 

const Stack = createStackNavigator();
const store = createStore(subjectsReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Subjects"
            component={Subjects}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
