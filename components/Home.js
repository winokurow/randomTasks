import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { StyleSheet, Text, View, Button, Icon, TouchableOpacity } from 'react-native';
import { Header, Left } from 'react-native-elements';
import { useNavigation, DrawerActions } from '@react-navigation/native'

const  Home = () => {
  const [taskName, setTaskName] = useState('test')
  let tasks = useSelector(state => state.subjects.all_subjects, shallowEqual)
  const navigation = useNavigation();

  const chooseTask = () => {    
    // First, we loop the main dataset to count up the total weight. We're starting the counter at one because the upper boundary of Math.random() is exclusive.
    let total = 1;
    for (let i = 0; i < tasks.length; ++i) {
        total += tasks[i].taskWeight;
    }
    console.log(total)
    // Total in hand, we can now pick a random value akin to our
    // random index from before.
    const threshold = Math.floor(Math.random() * total);
    console.log(threshold)
    // Now we just need to loop through the main data one more time
    // until we discover which value would live within this
    // particular threshold. We need to keep a running count of
    // weights as we go, so let's just reuse the "total" variable
    // since it was already declared.
    total = 0;
    for (let i = 0; i < tasks.length; ++i) {
      // Add the weight to our running total.
      total += tasks[i].taskWeight;

      // If this value falls within the threshold, we're done!
      if (total >= threshold) {
        setTaskName(tasks[i].taskName)
        break
    }
}

    
  }

  return (
    <View style={styles.container}>
      <Header leftComponent={{ icon: 'menu', color: '#fff', onPress: () => navigation.dispatch(DrawerActions.toggleDrawer()), }}></Header>
           
      <Text style={styles.task}>{taskName}</Text>
      <Button onPress={chooseTask} title='Get Task' style={styles.button}/>
    </View>
  );
}
 
 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#a3bcc7cc7',
  },
  task: {
      paddingBottom: 20,
      fontSize: 25,
      fontWeight: 'bold',
      paddingLeft: 10,
      borderBottomWidth: 1
  },
  button: {
    fontSize: 15
}
});


export default Home;

