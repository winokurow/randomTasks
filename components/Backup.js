import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { StyleSheet, Text, View, Button, Icon, TouchableOpacity } from 'react-native';
import { Header, Left } from 'react-native-elements';
import { useNavigation, DrawerActions } from '@react-navigation/native'
import { Credentials, aws } from "aws-sdk";
import { s3config } from "./aws.js";
import { importTasks } from './SubjectsActions';

const  Backup = () => {
  let tasks = useSelector(state => state.subjects.all_subjects, shallowEqual)
  const navigation = useNavigation();
  const dispatch = useDispatch()

  const s3 = new AWS.S3(s3config);

  const exportTasks = () => {    

    const s3params = {
      Bucket: 'ilwtasks',
      ContentType: "image/json",
      Key: 'tasks.json',
      Body: JSON.stringify(tasks)
     };

     s3.putObject(s3params)
     .on('httpUploadProgress', (evt) => {
      // that's how you can keep track of your upload progress
      console.log('erfolg');
    })
    .send((err) => {
       if (err) {
        console.log('err');
        console.log(err);
       }
    })

  }

  const s3params = {
    Bucket: 'ilwtasks',
    Key: 'tasks.json'
   };

  const importTask = async () => {
    try {
      const file = await s3
        .getObject(s3params)
        .promise();
      console.log(file.Body);
      const tasks = JSON.parse(file.Body.toString('utf-8'));
      console.log(tasks);
      dispatch(importTasks(tasks))
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <View style={styles.container}>
      <Header leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()), }}></Header>
      <View style={styles.buttonContainer}>
        <Button onPress={exportTasks} title='Export' style={styles.button}/>
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={importTask} title='Import' style={styles.button}/>
      </View>
    </View>
  );
}
 
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#a3bcc7',
  },
  task: {
      paddingBottom: 20,
      fontSize: 25,
      fontWeight: 'bold',
      paddingLeft: 10,
      borderBottomWidth: 1,
      width: '40%',
      alignSelf: 'center',
      marginVertical: 30
  },
  button: {
    fontSize: 15
  },
  buttonContainer: {
    width: '40%',
    alignSelf: 'center',
    marginVertical: 15,
  }
});


export default Backup;

