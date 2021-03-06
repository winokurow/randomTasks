import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const Task = (props) => (
    <View style={styles.taskWrapper}>
        <Text style={styles.task}>{props.name}</Text>
        <Text style={styles.task}>{props.weight}</Text>
        <Icon
            name="trash-2"
            size={30}
            color="#900"
            style={{ marginLeft: 'auto' }}
            onPress={props.delete}
        />
    </View>
)

export default Task

const styles = StyleSheet.create({
    taskWrapper: {
        flexDirection: 'row',
        borderColor: '#FFFFFF',
        borderBottomWidth: 1.5,
        width: '100%',
        alignItems: 'stretch'
    },
    task: {
        paddingBottom: 20,
        paddingLeft: 10,
        marginTop: 6,
        borderColor: '#F0F0F0',
        borderBottomWidth: 1,
        fontSize: 17,
        fontWeight: 'bold'
    }
})