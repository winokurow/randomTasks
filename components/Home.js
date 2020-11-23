import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

 
class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.subjects && <Text>You have { this.props.subjects.current.length } subjects.</Text>}
        {this.props.subjects &&
          this.props.subjects.current.map((subject, index) => (
            <Button
              key={ subject }
              title={ `${ subject }` }
            />
          ))
        }
        <Button
          title="Select more subjects"
          onPress={() =>
            this.props.navigation.navigate('Subjects')
          }
        />
      </View>
    );
  }
}
 
 
const mapStateToProps = (state) => {
    const { subjects } = state

  return { subjects }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps)(Home);
