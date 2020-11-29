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
      dispatch(addSubject({taskName:taskName, taskWeight: taskWeight}))
      setTaskName('')
      setTaskWeight('')
      console.log(tasks)
      console.log(tasks[0].name)
    }
  }
  const handleDeleteTask = (id) => {    
    console.log("delete" + id)
    console.log(tasks)
    dispatch(deleteSubject(id))
    forceUpdate()
  }
  return (
    <ImageBackground source={{ uri: 'https://wallpapertag.com/wallpaper/full/3/4/d/121586-new-red-gradient-background-2560x1600-for-phone.jpg' }} style={styles.container}>
    <Header leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()), }}>
    </Header>
    
      <Text style={{ marginTop: '10%', fontSize: 16, color: 'white' }}>Tasks:</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={false}
          placeholder={'Name'}
          onChangeText={(value) => setTaskName(value)}
          placeholderTextColor="white"
        />
        <TextInput
          style={styles.textInput}
          multiline={false}
          placeholder={'Weight'}
          onChangeText={(value) => setTaskWeight(value)}
          placeholderTextColor="white"
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
    </ImageBackground>
  )
}
export default Subjects

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    height: 20,
    flex: 1,
    minHeight: '7%',
    marginTop: '5%',
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderColor: 'rgb(222,222,222)',
    borderBottomWidth: 1,
    paddingRight: 10,
    paddingBottom: 5
  }
});
