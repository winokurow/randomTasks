import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import { addSubject } from './SubjectsActions';


class Subjects extends React.Component {
  render() {
    return (
      <ImageBackground source={{ uri: 'https://wallpapertag.com/wallpaper/full/3/4/d/121586-new-red-gradient-background-2560x1600-for-phone.jpg' }} style={styles.container}>
        <Text style={{ marginTop: '10%', fontSize: 16, color: 'white' }}>Tasks:</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            multiline={false}
            placeholder={'Task'}
            placeholderTextColor="white"
          />
          <TouchableOpacity>
            <Icon name="plus" size={30} color="#900" style={{ marginLeft: 15 }} />
          </TouchableOpacity>
        </View>
          {
            this.props.subjects.all_subjects.map((subject, index) => (
              
              <Button
                key={ subject }
                title={ `Add ${ subject }` }
                onPress={() =>
                  this.props.addSubject(index)
                }
              />
            ))
          }
  
          <Button
            title="Back to home"
            onPress={() =>
              this.props.navigation.navigate('Home')
            }
          />
      </ImageBackground>
    );
  }
}
 
//...
 
const mapStateToProps = (state) => {
  const { subjects } = state
  return { subjects }
};



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


export default connect(mapStateToProps, {addSubject})(Subjects);
