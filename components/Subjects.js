import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { addSubject } from './SubjectsActions';
import Task from './Task'


const Subjects = () => {
  const [value, setValue] = useState('')
  let tasks = useSelector(state => state.subjects.all_subjects)
  console.log(tasks)
  console.log(Array.isArray(tasks))
  const dispatch = useDispatch()

  const handleAddTask = () => {
    if (value.length > 0) {
      dispatch(addSubject(value))
      setValue('')
    }
  }

  return (
    <ImageBackground source={{ uri: 'https://wallpapertag.com/wallpaper/full/3/4/d/121586-new-red-gradient-background-2560x1600-for-phone.jpg' }} style={styles.container}>
      <Text style={{ marginTop: '10%', fontSize: 16, color: 'white' }}>Tasks:</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.textInput}
          multiline={false}
          placeholder={'Task'}
          onChangeText={(value) => setValue(value)}
          placeholderTextColor="white"
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <Icon name="plus" size={30} color="#900" style={{ marginLeft: 15 }} />
        </TouchableOpacity>
      </View>
        <ScrollView style={{width: '100%'}}>
          {tasks.map((task, index) => (
              <Task
                text={task}
                key={index}
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
    alignItems: 'center',
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
