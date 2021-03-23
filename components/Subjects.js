import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import { DrawerActions } from '@react-navigation/native'
import { addSubject, deleteSubject } from './SubjectsActions';
import Task from './Task'
import { useNavigation } from '@react-navigation/native';

const Subjects = () => {
  const [taskName, setTaskName] = useState('')
  const [taskWeight, setTaskWeight] = useState('')
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  let tasks = useSelector(state => state.subjects.all_subjects, shallowEqual)
  const navigation = useNavigation();

  const dispatch = useDispatch()

  const handleAddTask = () => {
    if ((taskName.length > 0) && (taskWeight.length > 0)) {
      dispatch(addSubject({taskName:taskName, taskWeight: parseInt(taskWeight)}))
      setTaskName('')
      setTaskWeight('')
    }
  }
  const handleDeleteTask = (id) => {    
    dispatch(deleteSubject(id))
    forceUpdate()
  }
  return (
    <View style={styles.container}>
    <Header leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()), }}>
    </Header>
    
      <Text style={{ marginTop: '1%', fontSize: 25, color: 'black', fontWeight: 'bold' }}>Tasks:</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          autoCorrect={false} 
          style={styles.textInput}
          multiline={false}
          placeholder={'Name'}
          onChangeText={(value) => setTaskName(value)}
          placeholderTextColor="grey"
          value={taskName}
        />
        <TextInput
          autoCorrect={false} 
          style={styles.textInput}
          multiline={false}
          placeholder={'Weight'}
          onChangeText={(value) => setTaskWeight(value)}
          placeholderTextColor="grey"
          keyboardType='numeric'
          value={taskWeight}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <Icon name="plus" size={30} color="#900" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      </View>
        <ScrollView style={{width: '100%'}}>
          {tasks.map((task, index) => (
              <Task
                name={task.taskName}
                weight={task.taskWeight}
                key={index}
                delete={() => handleDeleteTask(index)}
              />
            )) 
        }
        </ScrollView>
        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
    </View>
  )
}
export default Subjects

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#a3bcc7',
  },
  textInput: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: "black"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333'
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth: 1,
    paddingRight: 10,
    marginTop: '1%'
  }
});
